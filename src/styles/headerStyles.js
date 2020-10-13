import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 17.5,
        paddingVertical: 14.5,
        backgroundColor: '#eceff1',
    },
    mainWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 10,
        lineHeight: 12,
        color: '#2a2e32',
        fontWeight: 'bold'
    },
    priceText: {
        fontSize: 14,
        color: '#2a2e32',
        fontWeight: 'bold'
    }
});

export default styles;