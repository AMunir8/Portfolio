import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { FaGithub, FaLinkedin, FaInstagram, FaRegFileAlt } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_sagd69n',
        'template_hppe27m',
        {
          from_name: form.name,
          to_name: "Abdullah Munir",
          from_email: form.email,
          to_email: "munir.abdullah@outlook.com",
          message: form.message,
        },
        'u2tJ5FQ-nFDD0U0AB'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your email. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden z-3`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <div className="flex flex-wrap justify-center space-x-10 pb-4">
  <div className="flex flex-col items-center">
    <a
      href="https://github.com/AMunir8"
      target="_blank"
      className="text-4xl text-gray-500 hover:text-gray-700 transition-colors duration-300"
    >
      <FaGithub />
    </a>
    
  </div>
  <div className="flex flex-col items-center">
    <a
      href="https://www.linkedin.com/in/abdullah-munir/"
      target="_blank"
      className="text-4xl text-blue-500 hover:text-blue-700 transition-colors duration-300"
    >
      <FaLinkedin />
    </a>
 
  </div>
  <div className="flex flex-col items-center">
    <a
      href="https://www.instagram.com/axmunir/"
      target="_blank"
      className="text-4xl text-pink-500 hover:text-pink-700 transition-colors duration-300"
    >
      <FaInstagram />
    </a>
   
  </div>
  <div className="flex flex-col items-center">
    <a
      href="https://drive.google.com/file/d/1kjCbVDEB6aDNy5N0rwJWlgCLORA3ZCy2/view?usp=sharing"
      target="_blank"
      className="text-4xl text-orange-400 hover:text-orange-600 transition-colors duration-300"
    >
      <FaRegFileAlt />
    </a>
  
  </div>
</div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");