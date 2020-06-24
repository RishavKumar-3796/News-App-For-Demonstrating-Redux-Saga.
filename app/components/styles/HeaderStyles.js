import { StyleSheet, Platform } from 'react-native';
import { scale, Fonts, verticalScale, Colors, moderateScale } from '../../theme';
import colors from '../../theme/Colors';
const styles = StyleSheet.create({
    hitSlop: {
        top: 20,
        bottom: 20,
        right: 20,
        left: 20
    },
    headerStyle: {
        height: scale(50),
        backgroundColor: colors.primaryOrange,
        flexDirection: 'row',
        justifyContent: 'center',
        elevation: 1,
        shadowColor: Colors.initialTint,
        shadowRadius: 1,
        shadowOffset: { width: 1, height: 0 },
        shadowOpacity: 0.1,
        width: '100%'
    },
    backArrowImage: {
        height: scale(25),
        width: scale(25),
        alignSelf: 'center',
    },
    backButton: {
        height: scale(50),
        alignSelf: 'center',
        position: 'absolute',
        left: scale(15),
        zIndex: 20,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: moderateScale(20),
        alignSelf: 'center',
        color: '#000',
        fontWeight: '500',
        textAlign: 'center',
        textShadowColor: Colors.white,
        textShadowOffset: { width: 0.15, height: 0 },
        textShadowRadius: 0.5,
    },
    backText: {
        fontFamily: Fonts.type.popinsMedium,
        fontSize: moderateScale(17),
        fontWeight: '600',
        alignSelf: 'center',
        color: '#000',
        textAlign: 'center',
    },
    toggleSwitchContainer: {
        width: scale(40),
        height: scale(10),
        borderRadius: 10,
        padding: 0,
    },
    switchCircleStyle: {
        width: scale(23),
        height: scale(23),
        borderRadius: 10,
        backgroundColor: 'white'
    }
})

export default styles;