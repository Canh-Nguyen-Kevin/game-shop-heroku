import React from "react";
import { Row, Col, Divider, Skeleton } from "antd";

import "./skeleton.scss";

//home page Skeleton.
export const TitleSkeleton = () => {
  return (
    <div className="titleSk">
      <h2 className="bigTextSk"></h2>
      <p className="smallTextSk"></p>
    </div>
  );
};
export const SiderSkeleton = () => {
  return (
    <>
      <div className="siderSk"></div>
      <div className="siderSk"></div>
      <div className="siderSk"></div>
      <div className="siderSk"></div>
      <div className="siderSk"></div>
      <div className="siderSk"></div>
      <div className="siderSk"></div>
    </>
  );
};
export const SliderSkeleton = () => {
  return (
    <Row justify="space-between">
      <Col
        className="gutter-row"
        lg={{ span: 18 }}
        md={{ span: 18 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <div className="sliderSk"></div>
      </Col>
      <Col
        className="gutter-row"
        lg={{ span: 6 }}
        md={{ span: 6 }}
        sm={{ span: 0 }}
        xs={{ span: 0 }}
      >
        <div className="bannerSk">
          <div className="imgSk"></div>
          <div className="imgSk"></div>
        </div>
      </Col>
    </Row>
  );
};
export const ProductSkeleton = () => {
  return (
    <div className="postSk">
      <div className="imgSk"></div>
      <div className="desSk"></div>
      <div className="priceSk"></div>
    </div>
  );
};

//productDetail page skeleton.
export const ImageDetailSkeleton = () => {
  return (
    <div className="imageDetailSk">
      <div className="bigImageSk"></div>
      <div className="smallImageSk">
        <div className="imageSk"></div>
        <div className="imageSk"></div>
        <div className="imageSk"></div>
        <div className="imageSk"></div>
      </div>
    </div>
  );
};

export const DescriptionSkeleton = () => {
  return (
    <div className="descriptionSk">
      <div className="desTitleSk"></div>
      <div className="textSk"></div>
      <div className="textSk"></div>
      <div className="btnContainerSk">
        <div className="btnSk"></div>
        <div className="btnSk"></div>
      </div>
    </div>
  );
};
