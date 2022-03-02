import React from "react";
import { Row, Col } from "antd";

import { currentCart } from "../features/counter/cartSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import PaymentItem from "../components/paymentItem";

const PaymentProducts = () => {
  const products = useAppSelector(currentCart);
  const checkedProducts = products.filter((product) => product.check === true);
  const subtotal = checkedProducts.reduce(
    (sum, product) => sum + product.qty * product.price,
    0
  );
  const totalproducts = checkedProducts.reduce(
    (sum, product) => sum + product.qty,
    0
  );

  return (
    <div className="products-container">
      <div className="cartItem">
        <Row
          justify="space-between"
          align="middle"
          style={{ textAlign: "center" }}
        >
          <Col
            lg={{ span: 3 }}
            md={{ span: 0 }}
            sm={{ span: 0 }}
            xs={{ span: 0 }}
          >
            <strong>Image</strong>
          </Col>
          <Col
            lg={{ span: 8 }}
            md={{ span: 0 }}
            sm={{ span: 0 }}
            xs={{ span: 0 }}
          >
            <strong>Products</strong>
          </Col>
          <Col
            lg={{ span: 4 }}
            md={{ span: 7 }}
            sm={{ span: 7 }}
            xs={{ span: 7 }}
          >
            <strong>Price</strong>
          </Col>
          <Col
            lg={{ span: 4 }}
            md={{ span: 7 }}
            sm={{ span: 7 }}
            xs={{ span: 7 }}
          >
            <strong>Quantity</strong>
          </Col>
          <Col
            lg={{ span: 4 }}
            md={{ span: 7 }}
            sm={{ span: 7 }}
            xs={{ span: 7 }}
          >
            <strong>Total</strong>
          </Col>
        </Row>
      </div>
      {checkedProducts.map((product: any) => {
        return <PaymentItem product={product} />;
      })}
      <Row
        justify="end"
        style={{ color: "#1890ff", paddingRight: 30, marginTop: 20 }}
      >
        Subtotal ({totalproducts} products): <strong> {subtotal} đ</strong>
      </Row>
    </div>
  );
};

export default PaymentProducts;
