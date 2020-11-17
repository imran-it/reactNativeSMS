import React from 'react';
import { NativeModules, View, TouchableOpacity, Text } from 'react-native';
import { PermissionsAndroid } from 'react-native';


var DirectSms = NativeModules.DirectSms;

export default class App extends React.Component {

  async sendDirectSms() {
    try {


      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
        {
          title: 'YourProject App Sms Permission',
          message:
            'YourProject App needs access to your inbox ' +
            'so you can send messages in background.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );



      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //  DirectSms.sendDirectSms('045549044488', 'This is a direct message');

        console.log('DirectSms', DirectSms)
      } else {
        console.log('SMS permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.sendDirectSms()}>
          <Text>send SMS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
