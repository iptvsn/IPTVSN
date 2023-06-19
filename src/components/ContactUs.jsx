import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import contactImage from "../assets/contact.svg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const form = useRef();
  const [send, setSend] = useState(false);

  const notify = () => toast("Thank you your message was sended");

  const sendEmail = (e) => {
    if (!send) {
      e.preventDefault();
      setSend(true);
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then(
          (result) => {
            if (result.status === 200) {
              notify.call();
              setSend(false);
            }
          },
          (error) => {
            alert(error);
            setSend(false);
          }
        );
    }
  };
  return (
    <div id="Conatct us" className="w-full pt-4">
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -1080, opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col justify-center items-center"
      >
        <h1 className="text-center font-bold md:text-[1.5rem]">Contact-Us</h1>
        <div className="w-[60px] h-[5px] bg-[#FFCC00] rounded-lg md:w-[120px] md:h-[5px]"></div>
      </motion.div>
      <div className="mt-1 flex flex-col md:flex-row justify-center items-center">
        <form
          className="flex flex-col items-center w-full md:w-[30%]"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col items-center my-2 justify-center w-full">
            <label className="mr-2">Name :</label>
            <input
              required
              className="border-yellow-500 border-[2px] outline-none text-black md:w-full w-[80%]"
              type="text"
              name="user_name"
              maxLength={50}
            />
          </div>
          <div className="flex flex-col my-2 justify-center items-center w-full">
            <label className="mr-2">Email :</label>
            <input
              required
              className="border-yellow-500 border-[2px] outline-none text-black md:w-full w-[80%]"
              type="email"
              name="user_email"
            />
          </div>
          <div className="flex flex-col items-center w-full justify-center my-2">
            <label>Message :</label>
            <textarea
              required
              rows={5}
              className="border-yellow-500 border-[2px] outline-none text-black md:w-full w-[80%]"
              type="text"
              name="message"
            />
          </div>

          <div className="flex flex-row items-center">
            <input
              className="w-[100px] h-[30px] text-black bg-[#FFCC00] rounded-l cursor-pointer"
              type="submit"
              value="Send"
            />
            {send ? <p className="ml-2">Please wait ....</p> : <div></div>}
          </div>
        </form>
        <div>
          <img
            className=" object-contain w-[400px] h-[250px]"
            src={contactImage}
            alt=""
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
