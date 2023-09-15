import React, { useState } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Alert,
    View,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Modal from 'react-native-modal';
export default function BarcodeScanner({ showAlertModel, onClose }) {
    const onSuccess = e => {
        console.log('Data()()', e);
        if (e.data) {
            Alert.alert('Your Code is', e.data, [
                { text: 'OK', onPress: () => onClose() },
            ]);            
        }
        // Linking.openURL(e.data).catch(err =>
        //   console.error('An error occured', err),
        // );
    };
    return (
        <Modal
            style={styles.modalContent}
            isVisible={showAlertModel}
            animationIn="fadeIn"
            animationInTiming={100}
            backdropOpacity={0.5}
            onBackButtonPress={onClose}
            onBackdropPress={onClose}>
            <View style={{ backgroundColor: 'white', height: '70%' }}>
                <View>
                    <TouchableOpacity onPress={() => onClose()} style={{ backgroundColor: '#009688', width: '20%', margin: 5 }}>
                        <Text style={{ textAlign: 'center' }}>Close</Text>
                    </TouchableOpacity>
                </View>
                <QRCodeScanner
                    cameraStyle={{
                        width: '100%',
                        height: '100%',
                        alignSelf: 'center',
                    }}
                    cameraContainerStyle={{
                        width: '80%',
                        height: '80%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}
                    onRead={onSuccess}
                    topContent={
                        <View>
                            <Text style={styles.centerText}>Scan the QR code.{abx}</Text>
                        </View>
                    }
                />
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
    modal: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flex: 1,
    },
});
