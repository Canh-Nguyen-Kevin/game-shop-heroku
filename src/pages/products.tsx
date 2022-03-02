import React, { useEffect, useState } from "react";

import { allProducts } from "../features/counter/productSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { ProductSkeleton, TitleSkeleton } from "../components/skeleton";

import ProductCard from "../components/productCard";
import { Row, Col } from "antd";
import {
  FundFilled,
  AndroidFilled,
  RocketFilled,
  AccountBookFilled,
  DatabaseFilled,
  PieChartFilled,
} from "@ant-design/icons";

const Products = ({ loading }: any) => {
  const products = useAppSelector(allProducts);

  return (
    <>
      <Row justify="start" className="color-container">
        {loading ? (
          <TitleSkeleton />
        ) : (
          <div style={{ margin: "15px 20px" }}>
            <h2 className="white">
              <PieChartFilled className="icon" />
              <span>STANDING OUT PRODUCTS</span>
            </h2>
            The list of trending products that you may like.
          </div>
        )}
      </Row>
      <Row className="products-container" justify="start">
        {products
          .filter((item) => item.type === "entertain")
          .map((product) => {
            return (
              <Col
                lg={{ span: 6 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
                {loading ? (
                  <ProductSkeleton />
                ) : (
                  <ProductCard product={product} key={product.id} />
                )}
              </Col>
            );
          })}
      </Row>
      <Row justify="start" className="color-container">
        {loading ? (
          <TitleSkeleton />
        ) : (
          <div style={{ margin: "15px 20px" }}>
            <h2 className="white">
              <FundFilled className="icon" />
              <span>TOP SELLING PRODUCTS</span>
            </h2>
            The list of trending products that you may like.
          </div>
        )}
      </Row>
      <Row justify="start" className="products-container">
        {products
          .filter((item) => item.type === "topSelling")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 6 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
                {loading ? (
                  <ProductSkeleton />
                ) : (
                  <ProductCard product={product} key={product.id} />
                )}
              </Col>
            );
          })}
      </Row>
      <Row justify="start" className="color-container">
        {loading ? (
          <TitleSkeleton />
        ) : (
          <div style={{ margin: "15px 20px" }}>
            <h2 className="white">
              <RocketFilled className="icon" />
              <span>GAMES ON STEAM</span>
            </h2>
            The list of trending products that you may like.
          </div>
        )}
      </Row>
      <Row justify="start" className="products-container">
        {products
          .filter((item) => item.type === "games")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 6 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
                {loading ? (
                  <ProductSkeleton />
                ) : (
                  <ProductCard product={product} key={product.id} />
                )}
              </Col>
            );
          })}
      </Row>
      <Row justify="start" className="color-container">
        {loading ? (
          <TitleSkeleton />
        ) : (
          <div style={{ margin: "15px 20px" }}>
            <h2 className="white">
              <AndroidFilled className="icon" />
              <span>USEFUL APPS</span>
            </h2>
            The list of trending products that you may like.
          </div>
        )}
      </Row>
      <Row justify="start" className="products-container">
        {products
          .filter((item) => item.type === "apps")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 6 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
                {loading ? (
                  <ProductSkeleton />
                ) : (
                  <ProductCard product={product} key={product.id} />
                )}
              </Col>
            );
          })}
      </Row>
      <Row justify="start" className="color-container">
        {loading ? (
          <TitleSkeleton />
        ) : (
          <div style={{ margin: "15px 20px" }}>
            <h2 className="white">
              <AccountBookFilled className="icon" />
              <span>CODE WALLET</span>
            </h2>
            The list of trending products that you may like.
          </div>
        )}
      </Row>
      <Row justify="start" className="products-container">
        {products
          .filter((item) => item.type === "codes")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 6 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
                {loading ? (
                  <ProductSkeleton />
                ) : (
                  <ProductCard product={product} key={product.id} />
                )}
              </Col>
            );
          })}
      </Row>
      <Row justify="start" className="color-container">
        {loading ? (
          <TitleSkeleton />
        ) : (
          <div style={{ margin: "15px 20px" }}>
            <h2 className="white">
              <DatabaseFilled className="icon" />
              <span>MOBILE DATA</span>
            </h2>
            The list of trending products that you may like.
          </div>
        )}
      </Row>
      <Row justify="start" className="products-container">
        {products
          .filter((item) => item.type === "data")
          .map((product) => {
            return (
              <Col
                className="gutter-row"
                lg={{ span: 6 }}
                md={{ span: 6 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
                {loading ? (
                  <ProductSkeleton />
                ) : (
                  <ProductCard product={product} key={product.id} />
                )}
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default Products;
