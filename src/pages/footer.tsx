import React, { useState, useEffect } from "react";

import { Row, Col, Divider, Card } from "antd";

import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  GithubFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <Row justify="center" className="products-container">
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
            <p className="footer-content">Support Center</p>
            <p className="footer-content">Meta Gaming Blog</p>
            <p className="footer-content">Shopping Guidelines</p>
            <p className="footer-content">Payment</p>
            <p className="footer-content">Delivery</p>
            <p className="footer-content">Customer Services</p>
            <p className="footer-content">Warranty Policy</p>
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
            <p className="footer-content">What Is Meta Gaming</p>
            <p className="footer-content">Recruitment</p>
            <p className="footer-content">Terms And Services</p>
            <p className="footer-content">Privacy Policy</p>
            <p className="footer-content">Flash Sales</p>
            <p className="footer-content">FAQs</p>
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
            <p className="footer-content">
              <img src="/images/paypal.png" alt="paypal" className="image" />
              Pay With Paypal
            </p>
            <p className="footer-content">
              <img src="/images/master.png" alt="master" className="image" />
              Pay With MasterCard
            </p>
            <p className="footer-content">
              <img
                src="/images/delivery.jpg"
                alt="delivery"
                className="image"
              />
              Pay On Delivery
            </p>
            <p className="footer-content">
              <img src="/images/free.jpg" alt="free" className="image" />
              Free Ship
            </p>
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
            <p className="footer-content">
              <FacebookFilled className="icon" style={{ color: "#1890ff" }} />
              Facebook
            </p>
            <p className="footer-content">
              <InstagramFilled className="icon" /> Instagram
            </p>
            <p className="footer-content">
              <TwitterCircleFilled
                className="icon"
                style={{ color: "#1890ff" }}
              />{" "}
              Twitter
            </p>

            <p className="footer-content">
              <LinkedinFilled className="icon" style={{ color: "#1890ff" }} />{" "}
              <a href="https://www.linkedin.com/in/canh-nguyen-a47637159/">
                Linkedin
              </a>
            </p>
            <p className="footer-content">
              <GithubFilled className="icon" style={{ color: "black" }} />{" "}
              <a href="https://github.com/Canh-Nguyen-Kevin">Github</a>
            </p>
          </Card>
        </Col>
      </Row>
      <h4 style={{ width: "90%", margin: "0 auto", paddingBottom: "30px" }}>
        &copy; 2022 Canh Nguyen all rights reserved
      </h4>
    </div>
  );
};

export default Footer;
