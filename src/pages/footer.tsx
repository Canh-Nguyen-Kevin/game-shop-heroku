import React, { useState, useEffect } from "react";

import { Row, Col, Divider, Card } from "antd";

import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <Row align="middle" justify="center" className="products-container">
        <Col
          className="gutter-row"
          lg={{ span: 5 }}
          md={{ span: 5 }}
          sm={{ span: 11 }}
          xs={{ span: 22 }}
        >
          <Card
            title="Customers support"
            bordered={false}
            style={{ width: "100%" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 5 }}
          md={{ span: 5 }}
          sm={{ span: 11 }}
          xs={{ span: 22 }}
        >
          <Card
            title="About Meta Gaming"
            bordered={false}
            style={{ width: "100%" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 5 }}
          md={{ span: 5 }}
          sm={{ span: 11 }}
          xs={{ span: 22 }}
        >
          <Card
            title="Payment method"
            bordered={false}
            style={{ width: "100%" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 5 }}
          md={{ span: 5 }}
          sm={{ span: 11 }}
          xs={{ span: 22 }}
        >
          <Card title="Contact us" bordered={false} style={{ width: "100%" }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
