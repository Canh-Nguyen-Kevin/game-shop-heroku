import React, { useState } from "react";
import { Link } from "react-router-dom";
import { currentCart } from "../features/counter/cartSlice";
import { allProducts } from "../features/counter/productSlice";
import { useAppSelector } from "../app/hooks";

import { Row, Col, Button, Result } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import ProductCard from "../components/productCard";
import InCartProduct from "../components/inCartProduct";

const Cart = () => {
  const products = useAppSelector(currentCart);
  const similarProducts = useAppSelector(allProducts);
  const [productQty, setProductQty] = useState(4);

  const handleLoadMore = () => {
    const moreProducts = productQty + 4;
    if (moreProducts > similarProducts.length)
      return alert("no more products to load");
    setProductQty(moreProducts);
  };

  return (
    <>
      {products.length ? (
        <InCartProduct />
      ) : (
        <Result
          status="404"
          title="Sorry"
          subTitle="Your cart is empty."
          extra={
            <Link to="./">
              <Button type="primary">Back Home</Button>
            </Link>
          }
        />
      )}

      <div className="products-container">
        <h2 style={{ margin: "15px 20px" }}>
          <DollarOutlined className="icon" />
          PRODUCTS THAT YOU MIGHT LIKE
        </h2>
        <Row justify="start" className="products-container">
          {similarProducts.slice(0, productQty).map((item) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 6 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
                <ProductCard product={item} />
              </Col>
            );
          })}
        </Row>
        <div style={{ textAlign: "center" }}>
          <Button ghost danger onClick={handleLoadMore}>
            Load more
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
