import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.select";

import { selectCurrentUser } from "../../store/user/user.select";
import Button, { BUTTON_TYPE_CLASS } from "../button/Button.component";

import styles from "./paymentForm.module.scss";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser); // 当前用户
  const amount = useSelector(selectCartTotal); // 当前购物车总价

  const [isPaying, setIsPaying] = useState(false);

  // 
  const handlePayment = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsPaying(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
        billing_details: {
          name: currentUser?.displayName ?? "text",
        },
      },
    });
    if (paymentResult.error) {
      console.log(paymentResult.error);
      alert(`支付失败: ${paymentResult.error.message}`);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("支付成功");
      } else {
        alert("支付失败");
      }
    }
    setIsPaying(false);
  };

  return (
    <div className={styles["payment-form-container"]}>
      <div className={styles["form-container"]}>
        <h2>信用卡支付: </h2>
        <CardElement />
        <Button
          buttonType={BUTTON_TYPE_CLASS.inverted}
          onClick={handlePayment}
          isLoading={isPaying}
          className={styles["payment-button"]}
        >
          {isPaying ? "Paying..." : "Pay Now"}
        </Button>
      </div>
    </div>
  );
};

export default PaymentForm;
