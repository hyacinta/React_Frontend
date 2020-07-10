import React, { useEffect } from "react";
import MyMegaBox from "../Templates/MyMegaBox";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../Reducer/userInfoReducer";
import "./style/mypage.scss";

const MyPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(checkLogin());
  }, [dispatch]);

  return (
    <>
      <MyMegaBox />
    </>
  );
};

export default MyPage;
