import React, { useEffect, useState } from "react";

import ProductCard from "../components/productCard";
import { Row, Col, Select } from "antd";
import { motion, AnimatePresence } from "framer-motion";

import { allProducts, searchTerm } from "../features/counter/productSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";

const { Option } = Select;

const Search = () => {
  const searchCategory = useAppSelector(searchTerm);

  const [category, setCategory] = useState(searchCategory || "all");
  const [price, setPrice] = useState<number>();
  const [discount, setDiscount] = useState<number>();

  const [productsFiltered, setProductsFiltered] = useState<any>([]);
  const [searchPrice, setSearchPrice] = useState<any>([]);
  const [searchDiscount, setSearchDiscount] = useState<any>([] || searchPrice);
  const products = useAppSelector(allProducts);

  useEffect(() => {
    const handleDiscount = () => {
      switch (discount) {
        case 20:
          setProductsFiltered(
            searchDiscount.filter((product: any) => product.discount < discount)
          );
          break;
        case 49:
          setProductsFiltered(
            searchDiscount.filter(
              (product: any) =>
                product.discount <= discount && product.discount >= 20
            )
          );
          break;
        case 50:
          setProductsFiltered(
            searchDiscount.filter(
              (product: any) => product.discount >= discount
            )
          );
          break;
        default:
          setProductsFiltered(searchDiscount);
      }
    };

    handleDiscount();
  }, [discount, price, category]);
  useEffect(() => {
    const handlePrice = () => {
      switch (price) {
        case 100000:
          setProductsFiltered(
            searchPrice.filter((product: any) => product.price < price)
          );
          setSearchDiscount(
            searchPrice.filter((product: any) => product.price < price)
          );
          break;
        case 499000:
          setProductsFiltered(
            searchPrice.filter(
              (product: any) =>
                product.price <= price && product.price >= 100000
            )
          );
          setSearchDiscount(
            searchPrice.filter(
              (product: any) =>
                product.price <= price && product.price >= 100000
            )
          );
          break;
        case 500000:
          setProductsFiltered(
            searchPrice.filter((product: any) => product.price >= price)
          );
          setSearchDiscount(
            searchPrice.filter((product: any) => product.price >= price)
          );
          break;
        default:
          setProductsFiltered(searchPrice);
        // setDiscount(searchPrice);
      }
    };

    handlePrice();
  }, [price, category]);
  useEffect(() => {
    const handleCategory = () => {
      if (category === "all") {
        setProductsFiltered(products);

        setSearchPrice(products);
        return;
      } else {
        setProductsFiltered(
          products.filter((product) => product.type === category)
        );
        setSearchPrice(products.filter((product) => product.type === category));
      }
    };
    handleCategory();
  }, [category]);

  return (
    <div className="products-container" style={{ minHeight: "100vh" }}>
      <Row className="cartItem" align="middle" justify="start">
        <Col
          className="gutter-row"
          lg={{ span: 5 }}
          md={{ span: 7 }}
          sm={{ span: 11 }}
          xs={{ span: 22 }}
        >
          <h2>Category</h2>
          <Select
            showSearch
            className="select"
            placeholder="Category"
            optionFilterProp="children"
            defaultValue={category}
            onChange={(value: string) => setCategory(value)}
            filterOption={(input, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA: any, optionB: any) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="all">All</Option>
            <Option value="entertain">Entertaining</Option>
            <Option value="topSelling">TopSelling</Option>
            <Option value="games">Gaming</Option>
            <Option value="apps">Application</Option>
            <Option value="codes">CodeWallet</Option>
            <Option value="data">Data</Option>
          </Select>
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 5 }}
          md={{ span: 7 }}
          sm={{ span: 11 }}
          xs={{ span: 22 }}
        >
          <h2>Price</h2>
          <Select
            showSearch
            className="select"
            placeholder="Price"
            optionFilterProp="children"
            onChange={(value: number) => setPrice(value)}
            filterOption={(input, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA: any, optionB: any) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value={0}>All price</Option>
            <Option value={100000}>Under 100k</Option>
            <Option value={499000}>From 100k to under 500k</Option>
            <Option value={500000}>500k and above</Option>
          </Select>
        </Col>
        <Col
          className="gutter-row"
          lg={{ span: 5 }}
          md={{ span: 7 }}
          sm={{ span: 11 }}
          xs={{ span: 22 }}
        >
          <h2>Discount</h2>
          <Select
            showSearch
            className="select"
            placeholder="Discount"
            optionFilterProp="children"
            onChange={(value: number) => setDiscount(value)}
            filterOption={(input, option: any) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA: any, optionB: any) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value={0}>All type of discount</Option>
            <Option value={20}>Under 20% discount</Option>
            <Option value={49}>From 20% to under 50% discount</Option>
            <Option value={50}>50% discount and above</Option>
          </Select>
        </Col>
      </Row>
      <motion.div layout>
        <Row className="products-container" justify="start">
          <AnimatePresence>
            {productsFiltered.map((product: any) => {
              return (
                <Col
                  className="gutter-row"
                  lg={{ span: 6 }}
                  sm={{ span: 12 }}
                  xs={{ span: 24 }}
                >
                  <ProductCard product={product} key={product.id} />
                </Col>
              );
            })}
          </AnimatePresence>
        </Row>
      </motion.div>
    </div>
  );
};

export default Search;
