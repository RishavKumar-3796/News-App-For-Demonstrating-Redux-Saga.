
import { StyleSheet } from 'react-native';
import { Fonts, scale, verticalScale, Colors, moderateScale } from '../../theme';
import colors from '../../theme/Colors';

const styles = StyleSheet.create({
    mainView: {
        width: '46%',
        paddingHorizontal: scale(10),
        paddingVertical: scale(10),
        elevation: 3,
        alignSelf: 'center',
        shadowColor: 'grey',
        shadowRadius: 3,
        shadowOffset: { width: 2, height: 2 },
        borderWidth: scale(0.5),
        backgroundColor: 'white',
        borderColor: Colors.veryLightGray,
        shadowOpacity: 0.5,
        marginTop: scale(15),
        borderRadius: scale(12),
        margin: '2%'
    },
    newsImage: {
        height: scale(140),
        width: '100%',
        alignSelf: 'center',
        borderTopLeftRadius: scale(8),
        borderTopRightRadius: scale(8),
    },
    dividerView: {
        marginVertical: scale(5),
        backgroundColor: 'grey',
        borderTopWidth: 1,
        borderColor: colors.veryLightGray
    },
    dateText: {
        color: '#A9A9A9',
        fontSize: scale(12),
        textAlign: 'center',
    }
});

export default styles;