"use client";

import MyBookmark from "@/components/settings/MyBookmark";
import DeleteAccount from "@/components/settings/DeleteAccount";

const SettingPage = () => {
  const page = "deleteAccount";

  switch (page) {
    // case "myBookmark":
    //   return <MyBookmark />;
    // case "myPage":
    //   return <Mypage />;
    case "deleteAccount":
      return <DeleteAccount />;
    default:
      return <MyBookmark />;
  }
};

export default SettingPage;
