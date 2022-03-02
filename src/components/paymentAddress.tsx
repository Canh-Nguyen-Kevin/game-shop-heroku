import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "antd";
import { UserOutlined, EnvironmentOutlined } from "@ant-design/icons";

import {
  showAddressForm,
  addressFormState,
} from "../features/counter/formSlice";
import { addressState } from "../features/counter/userSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const PaymentAddress = () => {
  const userAddress = useAppSelector(addressState);

  const dispatch = useAppDispatch();

  return (
    <div className="info-container">
      <h2>USER ADDRESS</h2>
      <Row justify="space-between" className="cartItem">
        <Col
          className="gutter-row"
          lg={{ span: 5 }}
          md={{ span: 5 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        >
          <strong>
            <UserOutlined className="icon" />
            User Information
          </strong>
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 10 }}
          md={{ span: 10 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        >
          <EnvironmentOutlined className="icon" />
          <strong>Address</strong>
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 5 }}
          md={{ span: 5 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Button
            type="primary"
            danger
            onClick={() => dispatch(showAddressForm(true))}
          >
            Add new address
          </Button>
        </Col>
      </Row>
      {userAddress.length
        ? userAddress.map((address: any) => {
            return (
              <Row justify="space-between" className="cartItem">
                <Col
                  className="gutter-row"
                  lg={{ span: 5 }}
                  md={{ span: 5 }}
                  sm={{ span: 24 }}
                  xs={{ span: 24 }}
                >
                  <p>
                    <strong>
                      {address.fullName} {address.phoneNumber}
                    </strong>
                  </p>
                </Col>
                <Col
                  className="gutter-row"
                  lg={{ span: 10 }}
                  md={{ span: 10 }}
                  sm={{ span: 24 }}
                  xs={{ span: 24 }}
                >
                  <p>
                    {" "}
                    {address.streetAddress},{address.ward}, {address.district},{" "}
                    {address.province}
                  </p>
                </Col>
                <Col
                  className="gutter-row"
                  lg={{ span: 5 }}
                  md={{ span: 5 }}
                  sm={{ span: 24 }}
                  xs={{ span: 24 }}
                ></Col>
              </Row>
            );
          })
        : undefined}
    </div>
  );
};
export default PaymentAddress;
