import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, PhoneOutlined } from "@ant-design/icons";
import AddressPicker from "./addressPicker";
import { showAddressForm } from "../features/counter/formSlice";
import { setuserAddress } from "../features/counter/userSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 8, offset: 0 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 16 },
  },
};
const AddressForm = () => {
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<number | string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [ward, setWard] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleProvince = (text: string) => {
    setProvince(text);
  };
  const handleDistrict = (text: string) => {
    setDistrict(text);
  };
  const handleWard = (text: string) => {
    setWard(text);
  };

  const handleAddress = () => {
    if (
      !fullName ||
      !phoneNumber ||
      !province ||
      !district ||
      !ward ||
      !streetAddress
    )
      return;
    dispatch(
      setuserAddress({
        fullName,
        phoneNumber,
        province,
        district,
        ward,
        streetAddress,
      })
    );
    setFullName("");
    setPhoneNumber("");
    setStreetAddress("");
    setProvince("");
    setDistrict("");
    setWard("");
    dispatch(showAddressForm(false));
  };
  return (
    <Form
      {...formItemLayout}
      name="register"
      labelAlign="left"
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="Full name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            pattern: new RegExp("^[a-zA-Z]{4,50}(?: [a-zA-Z]+){0,2}$"),
            message: "Full name must be from 4 to 50 characters",
            whitespace: true,
          },
        ]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
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
        <Input
          type="number"
          prefix={<PhoneOutlined />}
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Form.Item>

      <AddressPicker
        handleProvince={handleProvince}
        handleDistrict={handleDistrict}
        handleWard={handleWard}
      />

      <Form.Item
        name="Address"
        label="Address"
        rules={[
          { required: true, message: "Please enter your address detail!" },
        ]}
      >
        <Input.TextArea
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
        />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Make this my default address</Checkbox>
      </Form.Item>
      <div className="flex">
        <div>
          <Button
            type="primary"
            style={{ width: "100px" }}
            onClick={() => dispatch(showAddressForm(false))}
          >
            Back
          </Button>
        </div>
        <div>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100px" }}
            onClick={handleAddress}
          >
            Continue
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default AddressForm;
