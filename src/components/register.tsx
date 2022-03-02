import React, { useState, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  showForm,
  showLoginForm,
  formState,
} from "../features/counter/formSlice";
import { createUser } from "../features/counter/userSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../features/auth/userAuth";
import { Form, Input, Button, AutoComplete } from "antd";

import {
  PhoneOutlined,
  LockOutlined,
  MailFilled,
  FacebookFilled,
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

const Register = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    dispatch(createUser(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(showLoginForm(true));
        console.log("register", user);
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
      name="register"
      onFinish={(values) => {
        onFinish(values);
        handleSubmit();
      }}
      labelAlign="left"
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
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
          prefix={<MailFilled />}
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            pattern: new RegExp(
              /^[+84|84|0]+(3|5|7|8|9|1[2|6|8|9])+([0-9]{8})\b/g
            ),
            message: "Please input your valid phone number!",
          },
        ]}
      >
        <Input prefix={<PhoneOutlined />} placeholder="Enter phone number" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            pattern: new RegExp(
              /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
            ),
            message:
              "Password at least 8 characters, including number, uppercase and lowercase ",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          placeholder="Confirm password"
        />
      </Form.Item>

      <div>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Register
        </Button>
      </div>
      <p style={{ textAlign: "center" }}>
        <u>OR LOGIN WITH</u>
      </p>
      <div className="flex">
        <Button
          ghost
          type="primary"
          icon={<FacebookFilled />}
          onClick={props.loginWithFacebook}
        >
          Facebook
        </Button>
        <Button
          ghost
          danger
          icon={<MailFilled />}
          onClick={() => props.loginWithGoogle()}
        >
          Google
        </Button>
      </div>
      <Form.Item style={{ justifyContent: "center" }}>
        Already have an account?
        <Button
          type="text"
          danger
          onClick={() => {
            dispatch(showLoginForm(true));
          }}
        >
          <strong>Login</strong>
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;
