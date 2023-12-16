import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Customer = () => {
  const [email, setEmail] = useState("");
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    // creation of customers
    console.log("customer base");
    try {
      let response = await axios.post(
        "https://api.paystack.co/customer",
        {
          email,
          first_name,
          last_name,
          phone,
        },

        {
          headers: {
            Authorization:
              "Bearer " + "sk_test_b67c74ff0ca0c976a02d9689b30d5ecb7f04398f",
            "Content-Type": "application/json",
          },
        }
      );
      // store in local storage;
      let res = response.data.data;
      console.log(res.email);

      //   notifySuccess();
      alert("Customer Successfully Created");
      navigate(`../Invoice?customer=${res.customer_code}`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div style={{ height: "100vh" }}>
        <div className="text-center width-[80%] mx-auto">
          <div className="flex my-[5%] mx-auto w-[50%] bg-white shadow-md" style={{ backgroundColor: "black" }}>
            <div className="item">
              <p className="text-2xl pt-[4%]"> INSURE </p>
            </div>

            <div className="p-5">
              <div className="flex flex-col mb-[20px]">
                <label> First Name</label>
                <input className="border border-slate-700 focus:outline-none"
                  type="text"
                  id="name"
                  onChange={(e) => setFirst_Name(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-[20px]">
                <label>Last Name</label>
                <input className="border border-slate-700 rounded text-black focus:outline-none"
                  type="text"
                  id="name"
                  onChange={(e) => setLast_Name(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-[20px]">
                <label>Email</label>
                <input className="border border-slate-500 rounded text-black focus:outline-none"
                  type="text"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col mb-[20px]">
                <label>Phone</label>
                <input className="border border-slate-500 rounded text-black focus:outline-none"
                  type="text"
                  id="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <button
                  onClick={() => {
                    submit();
                  }}
                >
                  {" "}
                  Submit
                </button>
              </div>
              {/* <PaystackButton className="paystack-button" {...componentProps} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
