import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { submitButtonStyles } from '../styles';

const SubmitButton = (props) => {
    const { onPress, title } = props;

    return(
        <TouchableOpacity onPress={onPress}>
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default SubmitButton;