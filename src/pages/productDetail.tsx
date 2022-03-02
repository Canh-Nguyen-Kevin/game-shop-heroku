import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import { Row, Col } from "antd";
import ImageDetail from "../components/imageDetail";
import DescriptionDetail from "../components/descriptionDetail";
import CommentDetail from "../components/commentDetail";
interface paramsType {
  productId: string;
}

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams<paramsType>();

  const [item, setItem] = useState({
    id: 1,
    type: "",
    name: "",
    img: ["string", "string", "string", "string"],
    description: "string",
    detail: ["string", "string", "string", "string"],
    information: ["string", "string", "string", "string"],
    price: 0,
    discount: 0,
    qty: 0,
  });
  const fetchProductDetail = async () => {
    setIsLoading(true);
    try {
      const response: any = await axios.get(`/products/${productId}`);
      if (response.data) setItem(response.data);
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <>
      <div className="products-container">
        <Row justify="space-between" className="cartItem">
          <Col
            className="gutter-row"
            lg={{ span: 10 }}
            md={{ span: 10 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <ImageDetail item={item} isLoading={isLoading} />
          </Col>
          <Col
            className="gutter-row"
            lg={{ span: 13 }}
            md={{ span: 13 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <DescriptionDetail item={item} isLoading={isLoading} />
          </Col>
        </Row>
      </div>

      <CommentDetail item={item} />
    </>
  );
};

export default ProductDetail;
