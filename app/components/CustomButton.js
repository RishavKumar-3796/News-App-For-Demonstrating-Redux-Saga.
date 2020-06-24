import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/CustomButtonStyles';

export default CustomButton = ({ onPress, iconImage = null, title, btnStyle, textStyle, iconStyles }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, btnStyle]}>
            {iconImage && <Image source={iconImage} style={[styles.iconStyles, iconStyles]} />}
            <Text style={[styles.titleStyle, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

CustomButton.propTypes = {
    onPress: PropTypes.func,
    iconImage: PropTypes.string,
    title: PropTypes.string,
    btnStyle: PropTypes.object,
    textStyle: PropTypes.object,
    iconStyles: PropTypes.object
}
