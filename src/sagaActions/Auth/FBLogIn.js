// import { LoginManager, AccessToken } from "react-native-fbsdk";

// import { ToastAndroid } from "react-native";

// export const fbLogin = () => {
//   try {
//     LoginManager.logInWithPermissions(["public_profile", "email"]).then(
//       function (result) {
//         if (result.isCancelled) {
//           ToastAndroid.show(
//             translate("social_login_cencel"),
//             ToastAndroid.SHORT
//           );
//         } else {
//           AccessToken.getCurrentAccessToken().then((data) => {
//             console.log("data", data);
//             //   initUser(data.accessToken, appCode, socialLogin);
//           });
//         }
//       },
//       function (error) {
//         ToastAndroid.show(
//           translate("login_fail_with_error"),
//           ToastAndroid.SHORT
//         );
//       }
//     );
//   } catch (error) {
//     console.log("Error in ", error);
//   }
// };
