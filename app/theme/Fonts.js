import { StyleSheet } from 'react-native';
import { Colors } from './';

const type = {
    nunito: 'Nunito-SemiBold',
    popins: 'Poppins',
    popinsRegular: 'Poppins-Regular',
    popinsMedium: 'Poppins-Medium',
};

const size = {
    h1: 32,
    h2: 30,
    h3: 24,
    h4: 20,
    regular: 16,
    small: 14,
    tiny: 13
};

const styles = StyleSheet.create({
    h1: {
        fontFamily: type.futura,
        fontSize: size.h1,
        fontWeight: 'bold',
        color: Colors.approxMatterhorn
    }
});

export default {
    type,
    size,
    styles
};
