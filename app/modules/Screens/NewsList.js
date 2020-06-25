import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { Container, Spinner, Toast } from 'native-base';
import CustomHeader from '../../components/CustomHeader';
import { SafeAreaView } from 'react-navigation';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './ScreenStyles/InitialScreenStyle';
import { connect } from 'react-redux';
import { getNewsListingRequest } from '../../redux/actions/Auth';
import { NewsListViewCompoennt } from '../../components/NewsListViewCompoennt';
import { GridViewListing } from '../../components/GridViewListing';

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsDataList: [], //data List
            isLoading: false, //main loader
            isComfortableView: true,
            scrollPosition: 0, //default scroll position
            offset: 0, //which will fetch the data acc to value provided
            isBottomLoader: false //for bottom activity indicator
        };
    }

    componentDidMount() {
        //get data while initial render.
        this.setState({ isLoading: true }, () => this.getListOfNews())
    }

    getListOfNews = () => {
        const { getNewsList } = this.props; //for calling Saga to get the data
        const { offset } = this.state; //dynamic offset value
        let postData = { count: 20, offset: offset } //keeping count constant and offset as per data loading
        getNewsList(postData); //calling the mapDispatchToProps
    }

    componentDidUpdate(prevProps) { //when there would be change in props or state value
        const { auth } = this.props; //reading the reducer value
        if (prevProps?.auth?.fetching && !auth?.fetching) { //For checking the API has given response
            this.handleResponse(); //for initial api call
        }
    }

    handleResponse = () => { //handling the API response
        const { auth: { newsData, error } } = this.props; //Reading the value from reducer
        const { newsDataList } = this.state;
        if (newsData && error === null) {
            //concatenating the value to state from reducer
            this.setState({ isLoading: false, isBottomLoader: false, newsDataList: newsDataList.concat(newsData) })
        } else {
            //if any error occurs
            this.setState({ isLoading: false, isBottomLoader: false }, () => Toast.show(error));
        };
    }

    onEndReached = () => { //on flatlist end reached
        const { auth } = this.props;
        const { offset } = this.state;
        if (!auth?.fetching) this.setState({ offset: offset + 10 }, () => this.getListOfNews())
    }

    handleScroll = (event) => { //for scroll behaviour
        this.setState({ scrollPosition: event.nativeEvent.contentOffset.y });
    }

    renderBottomSpinner = () => ( //for bottom flatlist spinner
        <Spinner />
    )

    renderFlatlist = () => {
        const { newsDataList, isComfortableView } = this.state; //destructuring the state
        return (

            <View style={styles.flatListWrapper}>
                {/* wrapping the flatlist in view so it gets proper bottom height */}
                <FlatList
                    ref={ref => this.flatListRef = ref}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    data={newsDataList}
                    removeClippedSubviews={false}
                    onScroll={this.handleScroll}
                    numColumns={isComfortableView ? 1 : 2} //changing num columns to support grid or list layout 
                    updateCellsBatchingPeriod={1}
                    ListFooterComponent={() => this.renderBottomSpinner()} //render spinner when flatlist fetches new set of data
                    renderItem={({ item }) =>
                        isComfortableView ?
                            <NewsListViewCompoennt
                                item={item}
                                props={this.props} />
                            //List View of data
                            :
                            <GridViewListing
                                item={item}
                                props={this.props}
                            />
                        //Grid View of data
                    }
                    onEndReached={({ distanceFromEnd }) => {
                        if (distanceFromEnd >= 0) {
                            // Called once when the scroll position gets within onEndReachedThreshold of the rendered content
                            this.setState({ isBottomLoader: true }, () => this.onEndReached())
                        }
                    }}
                    onEndReachedThreshold={0.5} //how far is it from bottom
                    extraData={newsDataList} //whenever we need re rendering of the flatlist
                    key={(isComfortableView ? 'comfort' : 'compact')} //for changing num columns dynamically
                    keyExtractor={(item, index) => String(index)}
                />
            </View>
        )
    }

    renderSpinner = () => { //render the main full screen spinner
        return (
            <>
                <Spinner />
                <Text style={styles.loadingText}>{'Loading...'}</Text>
            </>
        )
    }

    onSwitchPress = (value) => {
        //function called on switch press
        const { scrollPosition, isComfortableView } = this.state;
        this.setState({ isComfortableView: value }, () =>
            setTimeout(() => {
                //There is no jerk, it scrolls smoothly
                let newScrollPosition = !isComfortableView ? scrollPosition * 2.5 : scrollPosition / 1.5
                this.flatListRef.scrollToOffset({ offset: newScrollPosition, animated: true })
            }, 500))
    }

    render() {
        //See how small is the initial render. Makes the code very readable
        const { isLoading } = this.state;
        return (
            <SafeAreaView style={ApplicationStyles.screen.safeAreaViewContainer} forceInset={{ bottom: 'never' }}>
                <CustomHeader title={'News List'} showToggle={true} onSwitchPress={(value) => this.onSwitchPress(value)} />
                <Container style={styles.containerStyle}>
                    {isLoading ? this.renderSpinner() : this.renderFlatlist()}
                </Container>
            </SafeAreaView>
        );
    }
}

// Reading from store
const mapStateToProps = state => ({
    auth: state.auth,
});

//Dispatching to props
const mapDispatchToProps = dispatch => ({
    getNewsList: (data) => dispatch(getNewsListingRequest(data)),
});

//connect HOC
export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
