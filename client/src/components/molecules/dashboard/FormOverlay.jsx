import React from "react";
import { useForm } from "react-hook-form";

const FormOverlay = ({ onClose }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    // Save the form data to local storage
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    storedData.push(data);
    localStorage.setItem("formData", JSON.stringify(storedData));

    // Clear the form data
    e.target.reset();

    // Close the form
    // onClose();
  };

  return (
    // <div className="bg-[--black-bg] opacity-50 w-full h-full fixed top-0 left-0 z-10 ">
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10">
      <div className="max-w-md mx-auto mt-8 p-8 border rounded shadow-lg bg-white">
        <form onSubmit={(e) => handleSubmit(onSubmit)(e)}>
         
          {/* serial num */}
          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="serial_num"
            >
              Serial Num
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="serial_num"
              type="text"
              name="serial_num"
              placeholder="2"
              {...register("serial_num", {
                required: "this field is required ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.serial_num?.message}
            </p>
          </div>

          {/* policy number */}

          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="PolicyNo"
            >
              Policy Number
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="PolicyNo"
              type="text"
              name="PolicyNo"
              placeholder="ACE231"
              {...register("PolicyNo", {
                required: "this field is required ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.PolicyNo?.message}
            </p>
          </div>

          {/* duration */}

          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="duration"
            >
              Duration
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="duration"
              type="text"
              name="duration"
              placeholder="2 years"
              {...register("duration", {
                required: "this field is required ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.duration?.message}
            </p>
          </div>

          {/* Premium */}

          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="premium_amt"
            >
              Premium Amount
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="premium_amt"
              type="text"
              name="premium_amt"
              placeholder="2000"
              {...register("premium_amt", {
                required: "this field is required ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.premium_amt?.message}
            </p>
          </div>

          {/* name */}
          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="date"
              type="date"
              name="date"
              placeholder="1/2/3"
              {...register("date", {
                required: "this field cannot be empty ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.date?.message}
            </p>
          </div>

          {/* Product */}
          <div className="mb-4">
            <label
              className="block text-[--orange-bg] font-medium mb-2"
              htmlFor="address"
            >
              Product
            </label>
            <input
              className="appearance-none border border-[--form-border-bg] rounded w-full py-2 px-3 text-[--black-text] leading-tight focus:outline-none focus:border-[--orange-hover]"
              id="product"
              type="text"
              name="product"
              placeholder="Developer"
              {...register("product", {
                required: "this field cannot be empty ",
              })}
            />

            <p className="text-red-500 text-sm italic">
              {errors.product?.message}
            </p>
          </div>

          <div className="flex space-x-3">
            <input
              className="bg-[--orange-bg] hover:bg-[--orange-hover] text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="submit"
            />
            <input
              className="bg-[--orange-bg] hover:bg-[--orange-hover] text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="close"
              onClick={onClose}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormOverlay;
