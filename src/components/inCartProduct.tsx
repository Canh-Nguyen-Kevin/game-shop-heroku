import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { checkProduct, currentCart } from "../features/counter/cartSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

import { Row, Col, Button, Checkbox, Affix } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import CartItem from "../components/cartItem";

const InCartProduct = () => {
  const products = useAppSelector(currentCart);
  const dispatch = useAppDispatch();

  const totalProduct = products.reduce(
    (total, product) => total + product.qty,
    0
  );
  const productQuantity = products.reduce(
    (sum, product) => (product.check ? sum + product.qty : sum),
    0
  );
  const totalMoney = products.reduce(
    (sum, product) => (product.check ? sum + product.price * product.qty : sum),
    0
  );

  const handleSelectAll = (e: any) => {
    products.forEach((product) => {
      dispatch(checkProduct({ ...product, check: e.target.checked }));
    });
  };
  const handleCheckout = () => {
    if (!productQuantity) alert("Please select at least a product to purchase");
  };

  return (
    <>
      <div>
        <Row justify="space-between" gutter={10}>
          <Col
            className="gutter-row"
            lg={{ span: 17 }}
            md={{ span: 17 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <div className="products-container">
              <div className="cartItem">
                <h2>
                  <ShoppingCartOutlined className="icon" />
                  SHOPPING CART
                </h2>
                <Row justify="space-around" align="middle">
                  <Col
                    lg={{ span: 12 }}
                    md={{ span: 24 }}
                    sm={{ span: 24 }}
                    xs={{ span: 24 }}
                  >
                    <Checkbox
                      onChange={handleSelectAll}
                      checked={productQuantity === totalProduct ? true : false}
                    >
                      Select All
                    </Checkbox>
                  </Col>
                  <Col
                    lg={{ span: 12 }}
                    md={{ span: 0 }}
                    sm={{ span: 0 }}
                    xs={{ span: 0 }}
                  >
                    <Row justify="space-around" align="middle">
                      <Col span={6}>
                        <strong>Price</strong>
                      </Col>
                      <Col span={6}>
                        <strong>Quantity</strong>
                      </Col>
                      <Col span={6}>
                        <strong>Total</strong>
                      </Col>
                      <Col span={6}></Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              {products.map((product) => {
                return (
                  <CartItem
                    product={product}
                    key={`${product.id}${product.duration}`}
                  />
                );
              })}
            </div>
          </Col>
          <Col
            className="gutter-row"
            lg={{ span: 7 }}
            md={{ span: 7 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Affix offsetTop={100}>
              <div className="affix">
                <span>
                  Subtotal ({productQuantity} items):
                  <strong> {totalMoney} đ</strong>
                </span>
                <div style={{ textAlign: "center", marginTop: 50 }}>
                  <Link to={productQuantity ? "/payment" : "/cart"}>
                    <Button
                      type="primary"
                      danger
                      onClick={handleCheckout}
                      style={{ width: "100%" }}
                    >
                      Proceed to check out
                    </Button>
                  </Link>
                </div>
              </div>
            </Affix>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default InCartProduct;
