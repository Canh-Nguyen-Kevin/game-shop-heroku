import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  showForm,
  showLoginForm,
  loginFormState,
  formState,
} from "../features/counter/formSlice";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../features/auth/userAuth";
import { setActiveUser } from "../features/counter/userSlice";

import Register from "./register";
import Login from "./login";
import { Card, Row, Col, Button } from "antd";

import { UserOutlined, CloseCircleFilled } from "@ant-design/icons";

const RegisterDes = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Register" bordered={false}>
        <img src="/images/bird.png" alt="image" style={{ width: "100%" }} />
      </Card>
    </div>
  );
};

const LoginDes = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Login" bordered={false}>
        <img src="/images/person.png" alt="image" style={{ width: "100%" }} />
      </Card>
    </div>
  );
};

export const LoginForm = () => {
  const isLoginForm = useAppSelector(loginFormState);
  const dispatch = useAppDispatch();
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result: any) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential: any = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("token", token);
        const loginUser = {
          userName: result.user.displayName,
          email: result.user.email,
          token: token,
        };

        localStorage.setItem("user", JSON.stringify(loginUser));
        const getUser: any = localStorage.getItem("user");

        dispatch(
          setActiveUser({
            userName: loginUser.userName,
            email: loginUser.email,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  const loginWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result: any) => {
        const credential: any =
          FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("token", token);
        const loginUser = {
          userName: result.user.displayName,
          email: result.user.email,
          token: token,
        };

        localStorage.setItem("user", JSON.stringify(loginUser));
        const getUser: any = localStorage.getItem("user");

        dispatch(
          setActiveUser({
            userName: loginUser.userName,
            email: loginUser.email,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login-form">
      <Row>
        <CloseCircleFilled
          style={{
            fontSize: "2rem",
            position: "absolute",
            top: "-15px",
            right: "-15px",
            zIndex: 100,
          }}
          onClick={() => dispatch(showForm(false))}
        />
        <Col
          lg={{ span: 12 }}
          md={{ span: 0 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        >
          {isLoginForm ? LoginDes() : RegisterDes()}
        </Col>
        <Col
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          {isLoginForm ? (
            <Login
              loginWithFacebook={loginWithFacebook}
              loginWithGoogle={loginWithGoogle}
            />
          ) : (
            <Register
              loginWithFacebook={loginWithFacebook}
              loginWithGoogle={loginWithGoogle}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};
