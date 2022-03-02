import React, { useState } from "react";
import { Menu, Dropdown, Row, Col } from "antd";
import {
  UserOutlined,
  DownOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const MethodMenu = ({ getMethod }: any) => {
  const handleClick = ({ key }: any) => {
    console.log("handleClick", key);
    getMethod(key);
  };
  return (
    <Menu onClick={handleClick} style={{ width: 300 }} mode="vertical">
      <Menu.Item key="Cash on delivery" className="cartItem">
        <img src="./images/cash.png" alt="free ship" className="image" />
        Cash on delivery
      </Menu.Item>
      <Menu.Item key="Pay with Paypal" className="cartItem">
        <img src="./images/paypal.png" alt="discount" className="image" />
        Pay with Paypal
      </Menu.Item>
      <Menu.Item key="Pay with MasterCard" className="cartItem">
        <img src="./images/master.png" alt="subtract" className="image" />
        Pay with MasterCard
      </Menu.Item>
    </Menu>
  );
};

const PaymentMethod = ({ handleMethod }: any) => {
  return (
    <div className="cartItem">
      <Dropdown
        overlay={<MethodMenu getMethod={handleMethod} />}
        trigger={["click"]}
        placement="topLeft"
      >
        <a style={{ color: "black" }} onClick={(e) => e.preventDefault()}>
          <SolutionOutlined className="icon" />
          Select Payment Method <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default PaymentMethod;
