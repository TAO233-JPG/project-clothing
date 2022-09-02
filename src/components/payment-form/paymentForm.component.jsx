import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASS } from "../button/Button.component";

import styles from "./paymentForm.module.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    fetch("/")
  };

  return (
    <div className={styles["payment-form-container"]}>
      <div className={styles["form-container"]}>
        <h2>信用卡支付: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={handlePayment}>
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
