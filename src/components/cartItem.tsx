import React, { useState } from "react";
import {
  addCartItem,
  removeCartItem,
  adjustQty,
  checkProduct,
  currentCart,
} from "../features/counter/cartSlice";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Row, Col, Divider, Button, Rate, Input, Checkbox, Image } from "antd";

const CartItem = ({ product }: any) => {
  const [input, setInput] = useState<number>(product.qty);
  const [checked, setChecked] = useState(false);

  const dispatch = useAppDispatch();
  const handleQuantity = (e: any) => {
    setInput(e.target.value);

    if (e.target.value < 1) {
      window.confirm("Do you really want to remove this product")
        ? dispatch(removeCartItem(product))
        : setInput(1);
    } else {
      dispatch(adjustQty({ ...product, qty: parseInt(e.target.value) }));
    }
  };

  const handleCheckbox = (e: any) => {
    setChecked(e.target.checked);
    dispatch(checkProduct({ ...product, check: e.target.checked }));
  };

  return (
    <div className="cartItem">
      <Row justify="space-around" align="middle">
        <Col
          className="gutter-row"
          lg={{ span: 11 }}
          md={{ span: 24 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Row justify="space-around" align="middle">
            <Col className="gutter-row" span={1}>
              <Checkbox
                onChange={handleCheckbox}
                checked={product.check}
              ></Checkbox>
            </Col>
            <Col className="gutter-row" span={4}>
              <Image
                style={{ width: "100%" }}
                src={product.img[0]}
                alt={product.name}
              />
            </Col>
            <Col className="gutter-row" span={16}>
              <strong>
                {product.description}
                {product.duration}
              </strong>
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
          <Row justify="space-around" align="middle">
            <Col className="gutter-row" span={5}>
              <span style={{ marginLeft: 10 }}>{product.price}đ</span>
            </Col>
            <Col className="gutter-row" span={6}>
              <Input
                type="number"
                style={{
                  width: 70,
                  marginLeft: 10,
                  textAlign: "center",
                  border: "1px solid #1890ff",
                }}
                value={input}
                onChange={handleQuantity}
                min={0}
              />
            </Col>
            <Col className="gutter-row" span={6}>
              <span style={{ marginLeft: 10 }}>{`${
                product.price * product.qty
              } đ`}</span>
            </Col>
            <Col className="gutter-row" span={6}>
              <Button
                type="primary"
                danger
                onClick={() => {
                  dispatch(removeCartItem(product));
                }}
              >
                Remove
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;
