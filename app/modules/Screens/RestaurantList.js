import React, { Component } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { Container, Spinner } from 'native-base';
import CustomHeader from '../../components/CustomHeader';
import { SafeAreaView } from 'react-navigation';
import { ApplicationStyles, Icons } from '../../theme';
import styles from './ScreenStyles.js/InitialScreenStyle';
import { connect } from 'react-redux';
import { getRestaurantListingRequest } from '../../redux/actions/Auth';
import { RestaurantListingComponent } from '../../components/RestaurantListingComponent';
import { GridViewListing } from '../../components/GridViewListing';

class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsDataList: [],
            isLoading: false,
            isComfortableView: true,
            scrollPosition: 0,
            count: 10
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true }, () => this.getListOfNews())
    }

    getListOfNews = () => {
        const { getListOfRestaurant } = this.props;
        const { count } = this.state;
        let postData = { count, offset: 100 }
        getListOfRestaurant(postData);
    }

    componentDidUpdate(prevProps) {
        const { auth } = this.props;
        if (prevProps?.auth?.fetching && !auth?.fetching) {
            this.handleResponse(); //for initial api call
        }
    }

    handleResponse = () => {
        const { auth: { restaurantData, error } } = this.props;
        if (restaurantData && error === null) {

            this.setState({ isLoading: false, newsDataList: restaurantData })
        } else {
            this.setState({ isLoading: false });
        };
    }

    onEndReached = () => {
        const { auth } = this.props;
        const { count } = this.state;
        if (!auth?.fetching) {
            console.log('called');

            this.setState({ count: count + 10 }, () => this.getListOfNews())
        }
    }

    handleScroll = (event) => {
        this.setState({ scrollPosition: event.nativeEvent.contentOffset.y });
    }

    renderFlatlist = () => {
        const { newsDataList, isComfortableView } = this.state;
        return (
            <View style={{ flex: 1, height: Dimensions.get('window').height }}>
                <FlatList
                    ref={ref => this.flatListRef = ref}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                    data={newsDataList}
                    removeClippedSubviews={false}
                    onScroll={this.handleScroll}
                    numColumns={isComfortableView ? 1 : 2}
                    updateCellsBatchingPeriod={1}
                    renderItem={({ item }) =>
                        isComfortableView ?
                            <RestaurantListingComponent
                                item={item}
                                props={this.props} />
                            :
                            <GridViewListing
                                item={item}
                                props={this.props}
                            />
                    }
                    onEndReached={() => this.onEndReached()}
                    onEndReachedThreshold={0.5}
                    extraData={newsDataList}
                    key={(isComfortableView ? 'comfort' : 'compact')}
                    keyExtractor={(item) => item._id}
                />
            </View>
        )
    }

    renderSpinner = () => {
        return (
            <>
                <Spinner />
                <Text style={styles.loadingText}>{'Loading...'}</Text>
            </>
        )
    }

    onSwitchPress = (value) => {
        const { scrollPosition, isComfortableView } = this.state;
        this.setState({ isComfortableView: value }, () =>
            setTimeout(() => {
                let newScrollPosition = !isComfortableView ? scrollPosition * 2.8 : scrollPosition / 2
                this.flatListRef.scrollToOffset({ offset: newScrollPosition, animated: true })
            }, 500))
    }

    render() {
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


const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    getListOfRestaurant: (data) => dispatch(getRestaurantListingRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
