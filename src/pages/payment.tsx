import React from "react";
import { Steps } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  GiftOutlined,
  DollarOutlined,
} from "@ant-design/icons";

import {
  showAddressForm,
  addressFormState,
} from "../features/counter/formSlice";

import { useAppSelector, useAppDispatch } from "../app/hooks";

import PaymentAddress from "../components/paymentAddress";
import PaymentProducts from "../components/paymentProducts";
import PaymentSummary from "../components/paymentSummary";

const { Step } = Steps;

const Payment = () => {
  const dispatch = useAppDispatch();
  const showForm = useAppSelector(addressFormState);

  return (
    <div>
      <div className="info-container">
        <Steps>
          <Step status="finish" title="LOGIN" icon={<UserOutlined />} />
          <Step
            status="process"
            title="PAYMENT"
            icon={<ShoppingCartOutlined />}
          />
          <Step status="finish" title="VOUCHER" icon={<GiftOutlined />} />
          <Step status="finish" title="PLACE ORDER" icon={<DollarOutlined />} />
        </Steps>

        <h2>Select a shipping address</h2>
        <h4>
          Please enter a shipping address for this order. Please also indicate
          whether your billing address is the same as the shipping address
          entered. When finished, click the "Continue" button. Or, if you're
          sending items to more than one address, click the "Add new address"
          button to enter additional addresses.
        </h4>
      </div>
      <PaymentAddress />
      <PaymentProducts />
      <PaymentSummary />
    </div>
  );
};

export default Payment;
