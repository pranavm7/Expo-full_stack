import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
const ContactUsScreen = () => {
    const [message, setMessage] = useState('');
    const handleSubmit = async () => {
    if (!message) {
    Alert.alert('Error', 'Message cannot be empty');
    return;
    }
    const response = await fetch('http://localhost:5000/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
    });
    const data = await response.json();
    Alert.alert('Success', data.message);
    };
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Contact Us</Text>
            <TextInput label="Your Message" value={message} multiline onChangeText={setMessage}
            />
            <Button mode="contained" onPress={handleSubmit}>Submit</Button>
        </View>
    );
    };
    const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
});
export default ContactUsScreen;