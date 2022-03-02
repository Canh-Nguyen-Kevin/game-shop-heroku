import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Input, Menu } from "antd";
import {
  BankOutlined,
  QqCircleFilled,
  FireFilled,
  HourglassFilled,
  RocketFilled,
  TrophyFilled,
  ThunderboltFilled,
} from "@ant-design/icons";
import { getSearch } from "../features/counter/productSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { SiderSkeleton } from "./skeleton";

const HomeSider = ({ loading }: any) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      {loading ? (
        <SiderSkeleton />
      ) : (
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",

            fontSize: "1.1rem",
          }}
        >
          <Link to="./search">
            <Menu.Item key="0" onClick={() => dispatch(getSearch("all"))}>
              <BankOutlined className="icon" />
              All
            </Menu.Item>
            <Menu.Item key="1" onClick={() => dispatch(getSearch("entertain"))}>
              <QqCircleFilled className="icon" />
              Entertaining
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => dispatch(getSearch("topSelling"))}
            >
              <FireFilled className="icon" />
              Top Selling
            </Menu.Item>
            <Menu.Item key="3" onClick={() => dispatch(getSearch("games"))}>
              <HourglassFilled className="icon" />
              Gaming
            </Menu.Item>
            <Menu.Item key="4" onClick={() => dispatch(getSearch("apps"))}>
              <RocketFilled className="icon" />
              Applications
            </Menu.Item>
            <Menu.Item key="5" onClick={() => dispatch(getSearch("codes"))}>
              <TrophyFilled className="icon" />
              Code Wallet
            </Menu.Item>
            <Menu.Item key="6" onClick={() => dispatch(getSearch("data"))}>
              <ThunderboltFilled className="icon" />
              Data
            </Menu.Item>
          </Link>
        </Menu>
      )}
    </div>
  );
};

export default HomeSider;
