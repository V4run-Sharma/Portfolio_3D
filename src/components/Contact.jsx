import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// JP6D9Pe3u39df1YVk
// template_i716ove
// service_lbggtng

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_lbggtng",
        "template_i716ove",
        {
          from_name: form.name,
          to_name: "Varun Sharma",
          from_email: form.email,
          to_email: "sharmavarun.1912@gmail.com",
          message: form.message,
        },
        "JP6D9Pe3u39df1YVk"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I'll get back to you as soon as possible!");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div className="-mt-6 xl:flex-row flex-col-reverse flex gap-8 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 sm:p-8 p-4 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="sm:mt-2 mt-4 flex flex-col sm:gap-4 gap-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-3 px-4 placeholder:sm:text-[16px] placeholder:text-[14px] placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium sm:font-small"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-3 px-4 placeholder:sm:text-[16px] placeholder:text-[14px] placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium sm:font-small"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What are your thoughts?"
              className="bg-tertiary py-3 px-4 placeholder:sm:text-[16px] placeholder:text-[14px] placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium sm:font-small"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
