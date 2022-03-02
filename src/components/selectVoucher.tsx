import React, { useState } from "react";
import { Menu, Dropdown, Row, Col } from "antd";
import { DownOutlined, GiftOutlined } from "@ant-design/icons";

const VoucherMenu = ({ getVoucher, subtotal }: any) => {
  const handleClick = ({ key }: any) => {
    getVoucher(key);
  };
  return (
    <Menu onClick={handleClick} style={{ width: 300 }} mode="vertical">
      <Menu.Item
        key="Free ship"
        className="cartItem"
        disabled={subtotal < 500000 ? true : false}
      >
        <img src="./images/free.jpg" alt="free ship" className="image" /> Free
        ship for payment over 500k
      </Menu.Item>
      <Menu.Item
        key={5}
        className="cartItem"
        disabled={subtotal < 200000 ? true : false}
      >
        <img src="./images/discount.jpg" alt="discount" className="image" />
        5% discount for payment over 200k
      </Menu.Item>
      <Menu.Item
        key={100}
        className="cartItem"
        disabled={subtotal < 1000000 ? true : false}
      >
        <img src="./images/subtract.jpg" alt="subtract" className="image" />
        -100k for payment over 1000k
      </Menu.Item>
    </Menu>
  );
};

const SelectVoucher = ({ handleVoucher, subtotal }: any) => {
  return (
    <div className="cartItem">
      <Dropdown
        overlay={<VoucherMenu getVoucher={handleVoucher} subtotal={subtotal} />}
        trigger={["click"]}
        placement="topLeft"
      >
        <a style={{ color: "black" }} onClick={(e) => e.preventDefault()}>
          <GiftOutlined className="icon" />
          Select Voucher <DownOutlined />
        </a>
      </Dropdown>
    </div>
  );
};

export default SelectVoucher;
