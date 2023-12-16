import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

const Invoice = () => {
  const location = useLocation().search.replace("?", "");
  const amount = 50000;
  const navigate = useNavigate();

  const customer = location.split("=")[1];

  const description = "2-for-1 promo";
  // console.log(customer)
  const makePayment = async (form) => {
    form.preventDefault();
    try {
      let response = fetch(
        "https://api.paystack.co/paymentrequest",
        {
          customer,
          amount: amount * 100,
          description,
        },

        {
          headers: {
            Authorization:
              "Bearer " + "sk_test_b67c74ff0ca0c976a02d9689b30d5ecb7f04398f",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      if (response) {
        alert("Kindly Check your email for Invoice");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="text-center width-[80%] mx-auto">
        <div className="bg-black-400 flex flex-col justify-center w-[50%] my-[40px] mx-auto pt-5">
          <div style={{ lineHeight: "1px" }}>
            <h5 className="logo2">INSURE</h5>
          </div>
          <h3>Customer Invoice </h3>
          <div className="flex gap-3 items-center mx-5 border border-slate-400">
            <div className="width-[40%] text-left pl-1">
              <h3>Customer Code:</h3>
            </div>
            <p>{customer}</p>
          </div>

          <div className="flex gap-3 items-center mx-5 border border-slate-400">
            <div className="width-[40%] text-left pl-1">
              <h3>Amount</h3>
            </div>

            <p>{amount}</p>
          </div>

          <div className="flex gap-3 items-center mx-5 border border-slate-400">
            <div className="width-[40%] text-left pl-1">
              <h3>Description</h3>
            </div>

            <p>{description}</p>
          </div>

          <button className="w-max m-auto" onClick={makePayment}>
            Create Invoice
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice;
