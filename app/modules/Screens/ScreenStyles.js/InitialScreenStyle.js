
import { StyleSheet } from 'react-native';
import { Fonts, scale, verticalScale, Colors, moderateScale } from '../../../theme';
import Global from '../../../configs/Global';


const styles = StyleSheet.create({
    buttonStyle: {
        position: 'absolute',
        bottom: Global.statusBarHeightFunc()
    },
    foodImage: {
        height: '100%',
        width: '23%',
        alignSelf: 'center',
        borderRadius: scale(8)
    },
    foodImageExpanded: {
        height: '90%',
        width: '23%',
        borderRadius: scale(8)
    },
    containerStyle: {
        justifyContent: 'center',
        backgroundColor: Colors.containerColor
    },
    mainTextStyle: {
        color: Colors.primaryOrange,
        fontWeight: '800',
        fontSize: Fonts.size.h1,
        textAlign: 'center',
        textShadowColor: Colors.white,
        textShadowOffset: { width: 0.15, height: 0.15 },
        textShadowRadius: 1,
    },
    loadingText: {
        color: Colors.primaryOrange,
        fontWeight: '400',
        fontSize: scale(16),
        textAlign: 'center',
        textShadowColor: Colors.white,
        textShadowOffset: { width: 0.15, height: 0.15 },
        textShadowRadius: 1,
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(10),
        paddingVertical: scale(10),
        elevation: 3,
        marginHorizontal: scale(15),
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOffset: { width: 2, height: 2 },
        borderWidth: scale(0.5),
        backgroundColor: 'white',
        borderColor: Colors.veryLightGray,
        shadowOpacity: 0.2,
        marginTop: scale(15),
        borderRadius: scale(12)
    },
    mainViewExpanded: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(10),
        paddingVertical: scale(10),
        elevation: 4,
        marginHorizontal: scale(15),
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOffset: { width: 4, height: 4 },
        borderWidth: scale(0.5),
        backgroundColor: '#F5F5F5',
        borderColor: Colors.veryLightGray,
        shadowOpacity: 0.5,
        marginTop: scale(15),
        borderRadius: scale(12)
    },
    starStyle: {
        paddingHorizontal: scale(8),
        width: '60%',
        marginTop: scale(10)
    },
    textView: {
        width: '73%',
    },
    textViewExpanded: {
        width: '73%',
        backgroundColor: '#F5F5F5',
    },
    headingText: {
        color: '#000',
        fontWeight: '500',
        fontSize: scale(16),
        textShadowColor: 'grey',
        textShadowOffset: { width: 0.15, height: 0.15 },
        textShadowRadius: 0.5,
    },
    summaryText: {
        color: '#484848',
        fontSize: scale(14),
    },
    listingMarkerButton: {
        backgroundColor: Colors.primaryOrange,
        justifyContent: 'center',
        borderRadius: scale(6),
        height: scale(40),
        width: scale(40),
        alignSelf: 'center',
    },
    markerImage: {
        height: scale(25),
        width: scale(25),
        alignSelf: 'center',
    },
    individualStarStyle: {
        paddingHorizontal: 6
    },
    listContainer: {
        paddingBottom: scale(40)
    },
    dividerView: {
        marginTop: scale(10),
        backgroundColor: 'grey'
    },
    dateText: {
        color: '#A9A9A9',
        fontSize: scale(12),
        textAlign: 'right',
    }
});

export default styles;