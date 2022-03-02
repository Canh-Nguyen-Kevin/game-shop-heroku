import React from "react";
import { Link } from "react-router-dom";
import { resetCount } from "../features/counter/counterSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCard = ({ product }: any) => {
  const { id, name, img, description, price, discount } = product;
  const dispatch = useAppDispatch();
  return (
    <Link to={`/products/${id}`}>
      <motion.div
        layout
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
        onClick={() => dispatch(resetCount())}
        className="product-card"
      >
        <LazyLoadImage
          src={`${img[0]}`}
          effect="blur"
          alt="image"
          style={{ width: "100%" }}
        />
        <p style={{ padding: "0 20px", color: "black" }}>{description}</p>
        <div className="description">
          <h4 style={{ color: "#1890ff" }}>{price}đ</h4>
          <h4 style={{ color: "#ff4d4f" }}>-{discount}%</h4>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
