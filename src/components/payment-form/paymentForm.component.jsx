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
    console.log(1);
  };

  return (
    <div className={styles["payment-form-container"]}>
      <h2>信用卡支付: </h2>
      <CardElement />
      {/* <PaymentElement/> */}
      <Button buttonType={BUTTON_TYPE_CLASS.inverted} onClick={handlePayment}>
        Pay Now
      </Button>
    </div>
  );
};

export default PaymentForm;
