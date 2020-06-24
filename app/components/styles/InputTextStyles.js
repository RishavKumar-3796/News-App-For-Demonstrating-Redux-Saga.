import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale, Colors } from '../../theme'
const styles = StyleSheet.create({
    inputContainerStyles: {
        height: verticalScale(45),
        width: scale(310),
        borderColor: Colors.approxGainsboro,
        borderRadius: 6,
        borderWidth: 1,
        paddingLeft: scale(10),
        fontSize: moderateScale(14),
        marginTop: scale(10)
    },
});

export default styles;