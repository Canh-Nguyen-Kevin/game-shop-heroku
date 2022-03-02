import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { getAllProducts, getLoading } from "../features/counter/productSlice";
import { useAppDispatch } from "../app/hooks";
import axios from "axios";

import HomeSider from "../components/homesider";
import Slider from "../components/slider";
import Products from "./products";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  console.log("loading", loading);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      dispatch(getLoading(true));
      try {
        const response: any = await axios.get(
          "https://game-shop-api.herokuapp.com/products/"
        );
        dispatch(getAllProducts(response.data));
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
      dispatch(getLoading(false));
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Row align="middle" justify="space-around" className="products-container">
        <Col
          className="gutter-row"
          lg={{ span: 4 }}
          md={{ span: 0 }}
          sm={{ span: 0 }}
          xs={{ span: 0 }}
        >
          <HomeSider loading={loading} />
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 19 }}
          md={{ span: 21 }}
          sm={{ span: 22 }}
          xs={{ span: 22 }}
        >
          <Slider loading={loading} />
        </Col>
      </Row>

      <Products loading={loading} />
    </>
  );
};

export default Home;
