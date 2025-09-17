"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "react-phone-input-2/lib/style.css";
import Navbar from "@/components/layouts/Navbar";
import PhoneInput from "react-phone-input-2";
import Link from "next/link";

const options = [
    "Less than 5k USD",
    "5K - 10K USD",
    "10K - 50K USD",
    "50K - 100K USD",
    "More than 100K USD",
    "Need Help",
];
const Page = () => {
const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      yourName: "",
      phoneNumber: "",
      companyName: "",
      email: "",
      budget: "",
      message: "",
      agree: false,
    },
    validationSchema: Yup.object({
      yourName: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
      phoneNumber: Yup.string()
        .required("Phone number is required")
        .matches(/^\d{10,15}$/, "Enter a valid phone number"),
      email: Yup.string()
        .required("Email is required")
        .email("Enter a valid email"),
      message: Yup.string()
        .required("Message is required")
        .min(5, "Message must be at least 5 characters"),
    }),
    onSubmit: (values) => {
      console.log("✅ Form submitted:", values);
      alert("Form submitted! (connect backend to process)");
    },
  });

  return (
    <div className="bg-gray-50">
      <Navbar />
      <div className="flex px-10 py-5">
       

        <div className="flex items-center justify-center w-[55%]">
          <h1 className="text-5xl font-bold text-left bg-gradient-to-r from-blue-800 via-black via-blue-600 to-blue-800 bg-clip-text text-transparent">
            Take The <br /> First Step <br />
            Towards <br /> Accomplishing <br /> Your <br />
            Business Goals
          </h1>
        </div>

        <div className="mx-auto pt-8 px-10 flex-1">
          <h1 className="text-3xl font-bold mb-8">Contact US</h1>

          <form
            onSubmit={formik.handleSubmit}
            className="rounded-2xl space-y-4"
          >
            <div className="flex gap-10">
              <div className="flex-1">
                <label className="block font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  name="yourName"
                  value={formik.values.yourName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full border-b p-2 focus:outline-none focus:ring-0 ${
                    formik.touched.yourName && formik.errors.yourName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.yourName && formik.errors.yourName && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.yourName}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <label className="block font-medium mb-1">Phone Number</label>
                <PhoneInput
                  country={"in"}
                  value={formik.values.phoneNumber}
                  onChange={(phone) =>
                    formik.setFieldValue("phoneNumber", phone)
                  }
                  inputProps={{ name: "phoneNumber" }}
                  containerClass="w-full relative"
                  inputClass="!w-full !p-2 !pl-14 !focus:outline-none !focus:ring-0 !border-0 border-b !shadow-none !bg-transparent"
                  buttonClass="!border-0 !bg-transparent !absolute !left-0 flex items-center justify-center"
                  dropdownClass="!bg-white !shadow-lg !border !rounded-md"
                />
                <hr
                  className={`mt-1 ${
                    formik.errors.phoneNumber
                      ? "bg-red-500 h-0.5"
                      : "bg-gray-300 h-0.5"
                  }`}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {formik.errors.phoneNumber}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-10">
              <div className="flex-1">
                <label className="block font-medium mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formik.values.companyName}
                  onChange={formik.handleChange}
                  className="w-full border-b p-2 focus:outline-none focus:ring-0"
                />
              </div>

              <div className="flex-1">
                <label className="block font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full border-b p-2 focus:outline-none focus:ring-0 ${
                    formik.touched.email && formik.errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
              </div>
            </div>

            {/* <div>
              <label className="block font-medium mb-1">Budget</label>
              <select
                name="budget"
                value={formik.values.budget}
                onChange={formik.handleChange}
                className="w-full border-b p-2 focus:outline-none focus:ring-0"
              >
                <option value="">Select Budget</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div> */}
            <div>
              {" "}
              <label className="block font-medium mb-1">Budget</label>{" "}
              <div className="relative w-full">
                {" "}
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="w-full border-b p-2 text-left focus:outline-none focus:ring-0"
                >
                  {" "}
                  {formik.values.budget || "Select Budget"}{" "}
                </button>{" "}
                {open && (
                  <div className="absolute mt-1 w-full bg-white shadow-lg rounded-lg p-3 z-10">
                    {" "}
                    <h3 className="font-semibold mb-2">Budgets</h3>{" "}
                    <div className="space-y-3">
                      {" "}
                      {options.map((option) => (
                        <label
                          key={option}
                          className="flex items-center gap-2 p-1 m-0 cursor-pointer text-gray-700 rounded-lg hover:bg-gray-100"
                        >
                          {" "}
                          <input
                            type="radio"
                            name="budget"
                            value={option}
                            checked={formik.values.budget === option}
                            onChange={formik.handleChange}
                            className="text-blue-600 focus:ring-0"
                          />{" "}
                          {option}{" "}
                        </label>
                      ))}{" "}
                    </div>{" "}
                  </div>
                )}{" "}
                <span className="absolute right-2 text-gray-700 top-1/2 -translate-y-1/2 pointer-events-none">
                  {" "}
                  ▼{" "}
                </span>{" "}
              </div>{" "}
            </div>

            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={1}
                className={`w-full border-b p-2 focus:outline-none focus:ring-0 ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm">{formik.errors.message}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formik.values.agree}
                onChange={formik.handleChange}
                className="mr-2 h-5 w-5 accent-blue-600"
              />
              <label>I agree to receive SMS and WhatsApp</label>
            </div>

            <div className="flex">
              <div
                className="g-recaptcha"
                data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              ></div>
            </div>

            <button
              type="submit"
              className="w-[100px] cursor-pointer bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
