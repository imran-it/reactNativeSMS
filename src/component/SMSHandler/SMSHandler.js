// // import React from 'react';

// // import {View, Text, ImageBackground, StatusBar} from 'react-native';


// // Example to Send Text SMS on Button Click in React Native
// // https://aboutreact.com/send-text-sms-in-react-native/

// // import React in our code
// import React, { useState } from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';

// // import SMS API
// import SendSMS from 'react-native-sms';

// const App = () => {
//   const [mobileNumber, setMobileNumber] = useState('9999999999');
//   const [bodySMS, setBodySMS] = useState(
//     'Please follow https://aboutreact.com',
//   );

//   const initiateSMS = () => {
//     // Check for perfect 10 digit length
//     if (mobileNumber.length != 10) {
//       alert('Please insert correct contact number');
//       return;
//     }

//     SendSMS.send(
//       {
//         // Message body
//         body: bodySMS,
//         // Recipients Number
//         recipients: [mobileNumber],
//         // An array of types 
//         // "completed" response when using android
//         successTypes: ['sent', 'queued'],
//       },
//       (completed, cancelled, error) => {
//         if (completed) {
//           console.log('SMS Sent Completed');
//         } else if (cancelled) {
//           console.log('SMS Sent Cancelled');
//         } else if (error) {
//           console.log('Some error occured');
//         }
//       },
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           Example to Send Text SMS on Button Click in React Native
//         </Text>
//         <Text style={styles.titleTextsmall}>
//           Enter Mobile Number
//         </Text>
//         <TextInput
//           value={mobileNumber}
//           onChangeText={
//             (mobileNumber) => setMobileNumber(mobileNumber)
//           }
//           placeholder={'Enter Conatct Number to Call'}
//           keyboardType="numeric"
//           style={styles.textInput}
//         />
//         <Text style={styles.titleTextsmall}>
//           Enter SMS body
//         </Text>
//         <TextInput
//           value={bodySMS}
//           onChangeText={(bodySMS) => setBodySMS(bodySMS)}
//           placeholder={'Enter SMS body'}
//           style={styles.textInput}
//         />
//         <TouchableOpacity
//           activeOpacity={0.7}
//           style={styles.buttonStyle}
//           onPress={initiateSMS}>
//           <Text style={styles.buttonTextStyle}>
//             Send Message
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     textAlign: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   titleTextsmall: {
//     marginVertical: 8,
//     fontSize: 16,
//   },
//   buttonStyle: {
//     justifyContent: 'center',
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#8ad24e',
//   },
//   buttonTextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   textInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     width: '100%',
//     paddingHorizontal: 10,
//   },
// });

// // const SMSHandler = () => {
// //   // const themeColor = useSelector((state) => state.Settings.ThemeColor);

// //   // const dispatch = useDispatch();

// //   // const Styles = styles();

// //   return (
// //     <>
// //       <View>
// //         <Text>ok</Text>
// //       </View>
// //     </>
// //   );
// // // };

// // export default SendSMS;




import React from 'react';
import { NativeModules, View, TouchableOpacity, Text } from 'react-native';
import { PermissionsAndroid } from 'react-native';
var DirectSms = NativeModules.DirectSms;

export default class App extends React.Component {

  async sendDirectSms() {
    try {

      console.log("okokokok")
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
        DirectSms.sendDirectSms('0935', 'This is a direct message');
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
