import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Row, Col, Image } from "antd";

const PaymentItem = ({ product }: any) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cartItem">
      <Row
        justify="space-between"
        align="middle"
        style={{ textAlign: "center" }}
      >
        <Col
          className="gutter-row"
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Row
            justify="space-between"
            align="middle"
            style={{ textAlign: "center" }}
          >
            <Col span={8}>
              <Image width={150} src={product.img[0]} alt={product.name} />
            </Col>
            <Col span={15}>
              <span>
                {product.description}
                {product.duration}
              </span>
            </Col>
          </Row>
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 12 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Row
            justify="space-between"
            align="middle"
            style={{ textAlign: "center" }}
          >
            <Col span={7}>
              <span style={{ marginLeft: 10 }}>{product.price}đ</span>
            </Col>
            <Col span={7}>
              <span>{product.qty}</span>
            </Col>
            <Col span={7}>
              <span style={{ marginLeft: 10 }}>{`${
                product.price * product.qty
              } đ`}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentItem;
