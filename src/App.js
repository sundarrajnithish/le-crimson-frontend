import { CometChat } from "@cometchat-pro/chat";
import * as CONSTANTS from "./constants/constants";
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/components";

import "./App.css";

const appid = CONSTANTS.APP_ID;
const region = CONSTANTS.APP_REGION;
const authKey = CONSTANTS.AUTH_KEY;
const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();

CometChat.init(appid, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
  },
  (error) => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

//create dummy user

const uid = "user2";
//const name = "ss";
//var user = new CometChat.User(uid);
//user.setName(name);
//CometChat.createUser(user, authKey).then(
// (user) => {
//  console.log("user created", user);
// },
//(error) => {
//   console.log("error", error);
// }
//);

CometChat.login(uid, authKey).then(
  (user) => {
    console.log("Login Successful:", { user });
  },
  (error) => {
    console.log("Login failed with exception:", { error });
  }
);

function App() {
  return (
    <div style={{ width: "800px", height: "800px" }}>
      <CometChatUI />
    </div>
  );
}

export default App;
