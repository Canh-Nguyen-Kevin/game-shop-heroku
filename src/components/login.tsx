import React, { useState } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../features/auth/userAuth";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import { setActiveUser } from "../features/counter/userSlice";
import {
  showForm,
  showLoginForm,
  loginFormState,
  formState,
} from "../features/counter/formSlice";

import { Form, Input, Checkbox, Button } from "antd";

import {
  UserOutlined,
  LockOutlined,
  FacebookFilled,
  MailFilled,
} from "@ant-design/icons";
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    md: { span: 8, offset: 0 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const Login = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("login done", user.email);
        const displayName = user.email;
        dispatch(
          setActiveUser({
            userName: displayName,
            email: displayName,
          })
        );
        dispatch(showForm(false));
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error");
        // ..
      });
  };
  return (
    <Form
      {...formItemLayout}
      name="normal_login"
      labelAlign="left"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            required: true,
            pattern: new RegExp(
              "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
            ),
            message: "Please input a valid E-mail address!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Please input your Password!" }]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <div className="flex">
        <div>
          <Checkbox>Remember me</Checkbox>
        </div>

        <p>
          <a href="">Forgot password?</a>
        </p>
      </div>

      <div>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "100%" }}
          onClick={handleLogin}
        >
          Log in
        </Button>
      </div>
      <p style={{ textAlign: "center" }}>
        <u>OR LOGIN WITH</u>
      </p>
      <div className="flex">
        <div>
          <Button
            ghost
            type="primary"
            icon={<FacebookFilled />}
            onClick={() => props.loginWithFacebook()}
          >
            Facebook
          </Button>
        </div>
        <div>
          <Button
            ghost
            danger
            icon={<MailFilled />}
            onClick={() => {
              props.loginWithGoogle();
            }}
          >
            Google
          </Button>
        </div>
      </div>
      <Form.Item style={{ justifyContent: "center" }}>
        Don't have an account?
        <Button
          type="text"
          danger
          onClick={() => {
            dispatch(showLoginForm(false));
          }}
        >
          <strong>Register</strong>
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
