import React from 'react';
import {
  NativeModules,
  View,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import {PermissionsAndroid} from 'react-native';

// import SmsAndroid from 'react-native-get-sms-android';

var DirectSms = NativeModules.DirectSms;

var Bulb = NativeModules.Bulb;

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
        //  DirectSms.sendDirectSms(
        //   '01712177588',
        //   'This is a new direct message',
        // );

        console.log('Bulb is', Bulb);

        Bulb.turnOn();

        // let phoneNumber = '00722233311';
        // let message = 'This is a direct message';

        // SmsAndroid.autoSend(
        //   phoneNumber,
        //   message,
        //   (fail) => {
        //     console.log('Failed with this error: ' + fail);
        //   },
        //   (success) => {
        //     console.log('SMS sent successfully', success);
        //   },
        // );

        var filter = {
          box: 'sent', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all

          /**
           *  the next 3 filters can work together, they are AND-ed
           *
           *  minDate, maxDate filters work like this:
           *    - If and only if you set a maxDate, it's like executing this SQL query:
           *    "SELECT * from messages WHERE (other filters) AND date <= maxDate"
           *    - Same for minDate but with "date >= minDate"
           */
          // minDate: 1554636310165, // timestamp (in milliseconds since UNIX epoch)
          // maxDate: 1556277910456, // timestamp (in milliseconds since UNIX epoch)
          // bodyRegex: '(.*)This is a direct message(.*)', // content regex to match

          /** the next 5 filters should NOT be used together, they are OR-ed so pick one **/
          // read: 0, // 0 for unread SMS, 1 for SMS already read
          // _id: 3, // specify the msg id
          // thread_id: 12, // specify the conversation thread_id
          // address: '00722233311', // sender's phone number
          // body: 'This is a direct message', // content to match
          /** the next 2 filters can be used for pagination **/
          // indexFrom: 0, // start from index 0
          // maxCount: 10, // count of SMS to return each time
        };

        // SmsAndroid.list(
        //   JSON.stringify(filter),
        //   (fail) => {
        //     console.log('Failed with this error: ' + fail);
        //   },
        //   (count, smsList) => {
        //     console.log('Count: ', count);
        //     // console.log('List: ', smsList);
        //     var arr = JSON.parse(smsList);

        //     console.log(arr, arr[0].thread_id);

        //     SmsAndroid.delete(
        //       arr[0].thread_id,
        //       (fail) => {
        //         console.log('Failed with this error: ' + fail);
        //       },
        //       (success) => {
        //         console.log('SMS deleted successfully');
        //       },
        //     );
        //   },
        // );

        // let _id = 1;

        // SmsAndroid.delete(
        //   _id,
        //   (fail) => {
        //     console.log('Failed with this error: ' + fail);
        //   },
        //   (success) => {
        //     console.log('SMS deleted successfully');
        //   },
        // );

        console.log('DirectSms', DirectSms);
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
