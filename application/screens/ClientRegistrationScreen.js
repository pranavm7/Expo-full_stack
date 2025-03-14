import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const ClientRegistrationScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = async () => {
        if (!name || !email || !password) {
            Alert.alert('Error', 'All fields are required');
            return;
            }
            const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        Alert.alert('Success', data.message);
    };

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium">Client Registration</Text>
            <TextInput label="Name" value={name} onChangeText={setName} />
            <TextInput label="Email" value={email} onChangeText={setEmail} />
            <TextInput label="Password" value={password} secureTextEntry
            onChangeText={setPassword} />
            <Button mode="contained" onPress={handleRegister}>Register</Button>
        </View>
    );
    };
    const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
});
export default ClientRegistrationScreen;