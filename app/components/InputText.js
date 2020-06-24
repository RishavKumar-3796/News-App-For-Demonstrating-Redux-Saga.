import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/InputTextStyles';

export default InputText = ({
    refer,
    containerStyle,
    onSubmitEditing,
    returnKeyType,
    placeholderTextColor = '#828282',
    placeholder = 'Input',
    onChangeText,
    value,
    multiline,
    maxLength,
    autoCorrect = false,
    onFocus,
    onBlur,
    blurOnSubmit,
    autoCapitalize,
    secureTextEntry
}) => {
    return (
        <TextInput
            ref={refer}
            style={[styles.inputContainerStyles, containerStyle]}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={returnKeyType}
            placeholderTextColor={placeholderTextColor}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            multiline={multiline}
            maxLength={maxLength}
            autoCorrect={autoCorrect}
            onFocus={onFocus}
            onBlur={onBlur}
            blurOnSubmit={blurOnSubmit}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
            textAlignVertical={'top'}
        />
    );
};

InputText.propTypes = {
    refer: PropTypes.func,
    containerStyle: PropTypes.object,
    onSubmitEditing: PropTypes.func,
    placeholderTextColor: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    multiline: PropTypes.bool,
    maxLength: PropTypes.number,
    autoCorrect: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    blurOnSubmit: PropTypes.bool,
    autoCapitalize: PropTypes.bool,
    secureTextEntry: PropTypes.bool
}