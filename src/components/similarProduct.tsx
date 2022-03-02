import React, { useState } from "react";
import { getAllProducts, allProducts } from "../features/counter/productSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { Button, Row, Col } from "antd";
import { FileUnknownOutlined } from "@ant-design/icons";

import ProductCard from "./productCard";

const SimilarProduct = ({ item }: any) => {
  const products = useAppSelector(allProducts);
  const [productQty, setProductQty] = useState(4);
  const handleLoadMore = () => {
    const moreProducts = productQty + 4;
    if (
      moreProducts >
      products.filter((product) => product.type === item.type).length
    )
      return alert("no more products to load");
    setProductQty(moreProducts);
  };
  return (
    <div className="products-container">
      <h1 style={{ paddingLeft: 20 }}>
        <FileUnknownOutlined className="icon" />
        Similar products
      </h1>
      <Row justify="space-around">
        {products
          .filter((product) => product.type === item.type)
          .slice(0, productQty)
          .map((item) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 22 }}
                md={{ span: 22 }}
                sm={{ span: 22 }}
                xs={{ span: 22 }}
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
  );
};

export default SimilarProduct;
