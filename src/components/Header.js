import React from 'react';
import { View, Text } from 'react-native';
import { headerStyles as styles } from '../styles';
import { Logo } from '.';

const Header = props => {
    return(
        <View style={styles.container}>
            <View style={styles.mainWrapper}>
                <View>
                    <Text style={styles.titleText}>
                        SHOP NAME
                    </Text>
                    <Text style={styles.priceText}>
                        ¥ 99,999
                    </Text>
                </View>
                <Logo />
            </View>
        </View>
    )
}

export default Header;
