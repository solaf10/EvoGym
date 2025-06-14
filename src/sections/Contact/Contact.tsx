import { useContext, useState, type FormEvent } from "react";
import { NavLinks } from "../../linksEnum";
import "./Contact.css";
import { motion } from "framer-motion";
import { CurrentPageContext } from "../../App";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const currentPage = useContext(CurrentPageContext);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const notify = (status: string) => toast(status);
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        "https://formsubmit.co/ajax/d9b9fa2dfbb9f142fd73e69a6647720a",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then(() => {
        setIsLoading(false);
        notify("Message Sent Successfully!!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setIsLoading(false);
        notify(err.message);
      });
  }
  return (
    <section id={NavLinks.Contact} className="contact">
      <ToastContainer />
      <motion.div
        className="container"
        onViewportEnter={() => currentPage?.setCurrentPage(NavLinks.Contact)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="main-title"
        >
          <h2 className="title-font">
            <span>JOIN NOW</span> TO GET IN SHAPE
          </h2>
          <p>
            Take the first step toward a healthier, stronger you. Reach out
            today to ask questions, book a tour, or start your membership. Our
            team is here to support your fitness journey from day one.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="content "
        >
          <form id="contact-form" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="NAME"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
              required
            />
            <input
              type="email"
              placeholder="EMAIL"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              required
            />
            <textarea
              placeholder="MESSAGE"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
              required
            ></textarea>
            <input
              type="submit"
              className={isLoading ? "disabled main-btn btn" : "main-btn btn"}
              value={isLoading ? "SENDING..." : "SUBMIT"}
              disabled={isLoading}
            />
          </form>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="image"
          >
            <img className="img-fluid" src="/assets/imgs/contact.jpg" alt="" />
            <img className="logo-bg" src="/assets/imgs/EvolveText.png" alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
