import { CometChat } from "@cometchat-pro/chat";
import * as CONSTANTS from "../constants/constants";


const appid = CONSTANTS.APP_ID;
const region = CONSTANTS.APP_REGION;

const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .build();

CometChat.init(appid, appSetting).then(
  () => {
    console.log("CometChat Initialization completed successfully");
  },
  (error) => {
    console.log("CometChat Initialization failed with error:", error);
  }
);