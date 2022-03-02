import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "antd";

import { currentCart } from "../features/counter/cartSlice";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { addressState } from "../features/counter/userSlice";
import SelectVoucher from "../components/selectVoucher";
import PaymentMethod from "../components/paymentMethod";

const PaymentSummary = () => {
  const [voucher, setVoucher] = useState<any>();
  const [display, setDisplay] = useState<string>();
  const [method, setMethod] = useState<string>();
  const [randomFee, setRandomFee] = useState<any>();
  const [grandTotal, setGrandtotal] = useState<number>();

  const userAddress = useAppSelector(addressState);
  const products = useAppSelector(currentCart);

  const checkedProducts = products.filter((product) => product.check === true);
  const subtotal = checkedProducts.reduce(
    (sum, product) => sum + product.qty * product.price,
    0
  );

  const handleVoucher = (num: number | string) => {
    setVoucher(num);
  };
  const handleMethod = (text: string) => {
    setMethod(text);
  };

  const handleTotal = () => {
    setRandomFee(Math.floor(Math.random() * 10 + 30) * 1000);
    if (voucher === "Free ship") {
      setDisplay("Free Ship");
      setGrandtotal(subtotal);
    } else if (voucher < 100) {
      setDisplay(`-${voucher}% Discount`);
      setGrandtotal(
        subtotal + randomFee - ((subtotal + randomFee) * voucher) / 100
      );
    } else if (voucher >= 100) {
      setDisplay(`-${voucher}k Discount`);
      setGrandtotal(subtotal + randomFee - voucher * 1000);
    } else {
      setGrandtotal(subtotal + randomFee);
    }
  };

  const handleOrder = () => {
    if (!userAddress.length) {
      alert("Please add a Shipping address");
    } else if (!method) {
      alert("Please choose a payment method");
    } else alert("Successfully place the order");
  };
  useEffect(() => {
    handleTotal();
  }, [voucher, randomFee]);
  return (
    <div className="cartItem">
      <Row justify="space-between" style={{ textAlign: "center" }}>
        <Col
          lg={{ span: 8 }}
          md={{ span: 6 }}
          sm={{ span: 10 }}
          xs={{ span: 22 }}
        >
          <SelectVoucher handleVoucher={handleVoucher} subtotal={subtotal} />
          <p>
            <strong>{display}</strong>
          </p>
        </Col>

        <Col
          lg={{ span: 8 }}
          md={{ span: 10 }}
          sm={{ span: 12 }}
          xs={{ span: 22 }}
        >
          <PaymentMethod handleMethod={handleMethod} />
          <p>
            <strong>{method}</strong>
          </p>
        </Col>

        <Col
          lg={{ span: 6 }}
          md={{ span: 6 }}
          sm={{ span: 22 }}
          xs={{ span: 22 }}
        >
          <h2>ORDER SUMMARY</h2>
          <h4 className="flex">
            <p>Total:</p>
            <p>{subtotal} đ</p>
          </h4>
          <h4 className="flex">
            <p>Shipping fee:</p>
            <p>{randomFee} đ</p>
          </h4>
          <h4 className="flex">
            <p>Voucher:</p>
            <p>{display}</p>
          </h4>
          <h4 className="flex">
            <p>Grand Total:</p>
            <p>
              <strong>{grandTotal} đ</strong>
            </p>
          </h4>
          <Button
            type="primary"
            danger
            style={{ width: "100%" }}
            onClick={handleOrder}
          >
            Place Order
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentSummary;
