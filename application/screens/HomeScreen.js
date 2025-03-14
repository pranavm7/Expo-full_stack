import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
            <Button title="Contact Us" onPress={() => navigation.navigate('ContactUs')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
});
export default HomeScreen;