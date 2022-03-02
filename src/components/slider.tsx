import { Carousel, Row, Col } from "antd";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./slider.css";
import { SliderImages, BannerImages } from "./images";
import { SliderSkeleton } from "./skeleton";

const renderSlider = () => {
  return SliderImages.map((item) => {
    return (
      <div key={item.id}>
        <img
          className="sliderImages"
          src={item.image}
          alt="image"
          style={{ width: "100%" }}
        />
      </div>
    );
  });
};
const renderBanner = () => {
  return BannerImages.map((item) => {
    return (
      <img
        src={item.image}
        alt="image"
        key={item.id}
        style={{ width: "100%" }}
      />
    );
  });
};

const Slider = ({ loading }: any) => {
  return (
    <>
      {loading ? (
        <SliderSkeleton />
      ) : (
        <Row justify="space-between">
          <Col
            className="gutter-row"
            lg={{ span: 18 }}
            md={{ span: 18 }}
            sm={{ span: 24 }}
            xs={{ span: 24 }}
          >
            <Carousel
              autoplay
              arrows
              prevArrow={<LeftOutlined />}
              nextArrow={<RightOutlined />}
            >
              {renderSlider()}
            </Carousel>
          </Col>
          <Col
            className="gutter-row"
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 0 }}
            xs={{ span: 0 }}
          >
            {renderBanner()}
          </Col>
        </Row>
      )}
    </>
  );
};
export default Slider;
