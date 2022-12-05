import { CometChat } from "@cometchat-pro/chat";
import * as CONSTANTS from "../constants/constants";

const authKey = CONSTANTS.AUTH_KEY;
const uid = "user2"
// const uid = localStorage.getItem("email")
const name = localStorage.getItem("name")

// var user = new CometChat.User(uid);
// user.setName(name);
// CometChat.createUser(user, authKey).then(
//     user => {
//         console.log("user created", user);
//     },error => {
//         console.log("error", error);
//     }
// )

CometChat.login(uid, authKey).then(
    (user) => {
      console.log("Login Successful:", { user });
    },
    (error) => {
      console.log("Login failed with exception:", { error });
    }
  );