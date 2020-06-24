
import { StyleSheet } from 'react-native';
import { Fonts, scale, verticalScale, Colors, moderateScale } from '../../theme';

const styles = StyleSheet.create({
    buttonStyle: {
        width: '85%',
        height: scale(40),
        borderRadius: scale(6),
        borderWidth: moderateScale(1),
        borderColor: Colors.approxGainsboro,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: Colors.primaryOrange,
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: Colors.initialTint,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        elevation: 3,
    },
    titleStyle: {
        color: Colors.white,
        fontWeight: '500',
        fontSize: Fonts.size.regular,
        textAlign: 'center',
        width: scale(300),
        textShadowColor: Colors.white,
        textShadowOffset: { width: 0.15, height: 0.15 },
        textShadowRadius: 1,
    },
    iconStyles: {
        height: verticalScale(20),
        width: scale(20),
        left: scale(28)
    }
});

export default styles;