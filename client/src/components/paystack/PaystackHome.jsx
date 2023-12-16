import React, { useState } from "react";
import { PaystackButton } from "react-paystack";

import { useNavigate } from "react-router";

const PaystackHome = () => {
  const publicKey = "pk_test_50026f4b6d90461f96d53c9067cd64375d23c861";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const amount = 50000;
  const navigate = useNavigate();
  const componentProps = {
    email,
    amount: amount * 100,

    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
   
  
  };

  // const createInvoice= ()=>{

  // }

  const checkCustomerExists = async (email_or_code) => {
    try {
      const result = await fetch(
        `https://api.paystack.co/customer/${email_or_code}`,

        {
          headers: {
            Authorization:
              "Bearer sk_test_b67c74ff0ca0c976a02d9689b30d5ecb7f04398f",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(result);
      const customer = result.data.data.customer_code;
      console.log(customer);
      if (customer) {
        navigate(`../Invoice?customer=${customer}`);
      }

      console.log("worked");
    } catch (error) {
      console.log(error);
      navigate("./Customer");
    }
  };

  return (
    <>
      <div className="text-center width-[90%] mx-auto">
        <div className="heading">
          <h3 className="text-2xl my-3">INSURE</h3>
        </div>

        <div className="flex my-[5%] mx-auto w-[60%] bg-white shadow-md">
          <div className="w-[60%] relative bg-slate-500">
            <img
              className="h-[400px] w-full object-cover"
              src="https://tinyurl.com/48ffmsy8"
              alt=""
            />
          </div>

          <div className="bg-black-500 flex flex-col justify-center h-[450px] w-[50%]">
            <div className="p-5">
              <div className="flex flex-col mb-4">
               
                <input 
                placeholder="Enter your name"
                className="border border-slate-500 p-2 rounded-lg w-full"
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-4">
               
                <input 
                placeholder="Enter your email"
                className="border border-slate-500 p-2 rounded-lg w-full"
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-4">
              
                <input 
                placeholder="Enter your phone number"
                className="border border-slate-500 p-2 rounded-lg w-full"
                  type="text"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="flex flex-col mb-4">
             <span>AMOUNT:</span>
                <p
                  style={{
                    border: "1px solid white",
                    borderRadius: "5px",
                    padding: "7px",
                    textAlign: "center",
                    marginTop: "2px",
                    // backgroundColor: "green",
                    color:"#333"
                  }}
                >
                  {amount}
                </p>
              </div>
              <PaystackButton
                className="paystack-button bg-[--orange-bg] text-white py-2 px-4 rounded-md"
                style={{  backgroundColor:"#000", color:"#fff" }}
                {...componentProps}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaystackHome;
