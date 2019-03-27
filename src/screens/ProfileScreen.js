/**
|--------------------------------------------------
| Screen with hardcoded data just to make the app more complete
|--------------------------------------------------
*/
import React, { Component } from "react";
import UserProfile from "alex_demo/src/components/UserProfile";

export default class ProfileScreen extends Component {
  render() {
    return (
      <UserProfile
        name={"Alex So"}
        companyName={"Alex Company Ltd."}
        companyCatchPhrase={"I love programming"}
        email={"superalex2105@ahotmail.com"}
        phone={"91234567"}
        address={"NT, Hong Kong"}
      />
    );
  }
}
