import React, { useState } from 'react';
import BarcodeScanner from './BarcodeScanner';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({navigation}) {
    const [showModal, setShowModal] = useState(false);
    const onClose = () => {
        setShowModal(false)
    }

// Calling the divide function with b = 0
const result = divide(10, 0);
console.log(result);

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)} style={styles.buttonstyle}>
                <Text style={styles.textStyle}>Press Button to Scan QR code</Text>
            </TouchableOpacity>
            <BarcodeScanner showAlertModel={showModal} onClose={onClose} />
            <TouchableOpacity onPress={() =>navigation.navigate('GenerateQRCode')} style={styles.buttonstyle}>
                <Text style={styles.textStyle}>PPressss Button to Generate QR code</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonstyle: {
        backgroundColor: '#009688',
        width: '60%',
        alignSelf: 'center',
        height: '6%',
        marginTop: '50%',
        borderRadius: 5,
        elevation: 8,
    },
    textStyle: {
        textAlign: 'center',
        padding: '5%',
        color: 'black',
    },
});
