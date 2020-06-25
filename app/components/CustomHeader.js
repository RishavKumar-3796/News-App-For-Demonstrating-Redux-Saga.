import React, { Component, useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Images, Icons, Colors } from '../theme';
import styles from './styles/HeaderStyles';
import SwitchToggle from '@dooboo-ui/native-switch-toggle';

export default CustomHeader = (props) => {
    //using of hooks for functional rendering
    const [switchOn, setSwitchOn] = useState(false)
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.titleText}>{switchOn ? 'Compact' : 'Comfortable'}</Text>
            {props?.showToggle && // getting value from props
                <View style={styles.absView}>
                    {/* Switch toggle */}
                    <SwitchToggle
                        containerStyle={styles.toggleSwitchContainer}
                        backgroundColorOff={Colors.duckEggBlue}
                        backgroundColorOn={Colors.starColor}
                        circleStyle={styles.switchCircleStyle}
                        switchOn={switchOn}
                        circleColorOff={Colors.light}
                        circleColorOn={Colors.gray3}
                        duration={200}
                        onPress={() => { setSwitchOn(!switchOn), props?.onSwitchPress(switchOn) }}
                    />
                </View>
            }
        </View>
    )
}

