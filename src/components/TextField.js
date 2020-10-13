import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { textInputStyles as styles } from '../styles';

const TextField = props => {
    const { title } = props;
    return(
        <>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput />
            </View>

        </>
    )
}

export default TextField;