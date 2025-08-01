import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <div>
            <View style={styles.container}>
                {icon && <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.gray}
                    style={styles.icon} />}
                <TextInput style={defaultStyles.text} {...otherProps} />
            </View>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.lightgray,
        borderRadius: 25,
        flexDirection: "row",
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;