import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router";
const Payments = () => {
  const publicKey = "pk_test_50026f4b6d90461f96d53c9067cd64375d23c861";
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Thank you for your patronage"),
   
  };

  const back = () => {
    navigate("/");
  };
  return (
    <>
     <div className="text-center width-[80%] mx-auto">
        <div className="flex my-[5%] mx-auto w-[50%] bg-white shadow-md">
          <div className="item">
            <img
              className="h-[400px] w-full object-cover"
              src="https://tinyurl.com/48ffmsy8"
              alt=""
            />
          </div>

          <div className="bg-black-500 flex flex-col justify-center h-[450px] w-[50%]">
            <div className="p-5">
              <div className="flex flex-col mb-[20px]">
        
                <input 
                 className="border border-slate-500 p-2 rounded-lg w-full"
                 placeholder="Enter your name"
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-[20px]">
               
                <input 
                 className="border border-slate-500 p-2 rounded-lg w-full"
                 placeholder="Enter your email"
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-[20px]">
               
                <input 
                placeholder="Enter phone number"
                  type="number"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="checkout-field">
                <label>Amount</label>

                <select
                  name=""
                  id=""
                  style={{ padding: "10px" }}
                  onChange={(e) => setAmount(e.target.value)}
                >
                  <option value="20000">20000</option>
                  <option value="40000">40000</option>
                  <option value="50000">50000</option>
                  <option value="60000">60000</option>
                </select>
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

export default Payments;
