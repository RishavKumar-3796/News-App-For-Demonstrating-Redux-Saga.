import React from 'react';
import { View, Text, Image } from 'react-native';
import Global from '../configs/Global';
import styles from './styles/GridViewListingStyle';

export const GridViewListing = (props) => {
    //Accessing the item passed from the props
    const item = props?.item

    const renderDate = () => {
        //Formatting the dates
        return <Text style={styles.dateText}>{Global.transformDateFromNow(item?.updatedAt.trim())}</Text>
    }

    return (
        <View style={styles.mainView}>
            {/** ? is a optional chaining method to stop crashes */}
            <Image source={{ uri: item?.imageUrl }} style={styles.newsImage} />
            {/* rendering the views independently */}
            <View style={styles.dividerView} />
            {renderDate()}
        </View>
    )
}