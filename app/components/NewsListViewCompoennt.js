import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../modules/Screens/ScreenStyles/InitialScreenStyle';
import Global from '../configs/Global';

export const NewsListViewCompoennt = (props) => {
    //using default useState hooks
    const [expanded, setExpanded] = useState(false)
    //Accessing the item passed from the props
    const item = props?.item

    //Instead of re writing codes we can optimise them using functional renders
    const renderSubTexts = (value, totalLines, styles) => (
        <Text style={styles} ellipsizeMode='tail' numberOfLines={!expanded ? totalLines : undefined}>{value?.trim()}</Text>
    )

    const renderDate = () => {
        //Formatting the dates
        return <Text style={styles.dateText}>{Global.transformDateFromNow(item?.updatedAt)}</Text>
    }

    return (
        <TouchableOpacity style={!expanded ? styles.mainView : styles.mainViewExpanded}
            onPress={() => setExpanded(!expanded)}>
            {/** ? is a optional chaining method to stop crashes */}
            <Image source={{ uri: item?.imageUrl }} style={!expanded ? styles.foodImage : styles.foodImageExpanded} />

            <View style={styles.textView}>
                {/* rendering the views independently */}
                {renderSubTexts(item?.headline, 2, styles.headingText)}
                <View style={styles.dividerView} />
                {renderSubTexts(item?.summary, 3, styles.summaryText)}
                {expanded &&
                    <>
                        {/* for rendering date view when it is expanded */}
                        <View style={styles.dividerView} />
                        {renderDate()}
                    </>
                }
            </View>
        </TouchableOpacity>
    )
}