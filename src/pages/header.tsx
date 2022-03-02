import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { Typography, Input, Badge, Dropdown, Row, Col } from "antd";

import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import meta from "../dataStorage/images/meta.png";
import { currentCart } from "../features/counter/cartSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import {
  setActiveUser,
  selectUserName,
  selectUserEmail,
} from "../features/counter/userSlice";

import { auth } from "../features/auth/userAuth";
import { LoginMenu, UserMenu, ItemsInCart } from "./headerMenu";
import MobileMenu from "../components/mobileMenu";

const { Title } = Typography;
const { Search } = Input;

const onSearch = (value: string) => {
  console.log(value);
};

const AppHeader = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector(selectUserName);
  const userEmail = useAppSelector(selectUserEmail);
  const products = useAppSelector(currentCart);

  const productQuantity = products.reduce(
    (sum, product) => sum + product.qty,
    0
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          setActiveUser({
            userName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(
          setActiveUser({
            userName: "",
            email: "",
          })
        );
      }
    });
  }, []);

  return (
    <div className="header">
      <Row align="middle" justify="space-between" style={{ width: "90%" }}>
        <Col
          className="gutter-row"
          lg={{ span: 0 }}
          md={{ span: 2 }}
          sm={{ span: 2 }}
          xs={{ span: 2 }}
        >
          <MobileMenu />
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 4 }}
          md={{ span: 0 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        >
          <Link to="/">
            <div
              className="logo"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src={meta}
                alt="Logo"
                style={{ width: 50, height: 50, borderRadius: 5 }}
              />
              <Title
                style={{
                  color: "white",
                  marginLeft: 10,
                  textAlign: "center",
                }}
                level={3}
              >
                META GAMING
              </Title>
            </div>
          </Link>
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 10 }}
          md={{ span: 17 }}
          sm={{ span: 17 }}
          xs={{ span: 17 }}
        >
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            style={{ width: "100%" }}
          />
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 4, offset: 1 }}
          md={{ span: 0 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        >
          {userEmail ? (
            <Dropdown overlay={<UserMenu />} placement="bottomCenter" arrow>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                style={{ fontSize: 15, color: "white" }}
              >
                <UserOutlined style={{ fontSize: 30 }} /> {userEmail}
              </a>
            </Dropdown>
          ) : (
            <Dropdown overlay={<LoginMenu />} placement="bottomCenter" arrow>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                style={{ fontSize: 15, color: "white" }}
              >
                <UserOutlined style={{ fontSize: 30 }} /> Login/Register
              </a>
            </Dropdown>
          )}
        </Col>

        <Col
          className="gutter-row"
          lg={{ span: 1 }}
          md={{ span: 2 }}
          sm={{ span: 2 }}
          xs={{ span: 2 }}
        >
          <Link to="/cart">
            <Badge count={productQuantity} showZero color={"#ff4d4f"}>
              <Dropdown overlay={<ItemsInCart />} placement="bottomRight" arrow>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                  style={{ fontSize: 15, color: "white" }}
                >
                  <Link to="/cart">
                    <ShoppingCartOutlined
                      style={{ fontSize: 40, color: "white" }}
                    />
                  </Link>
                </a>
              </Dropdown>
            </Badge>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default AppHeader;
