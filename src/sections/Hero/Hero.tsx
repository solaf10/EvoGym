import { useContext } from "react";
import { NavLinks } from "../../linksEnum";
import "./Hero.css";
import { motion } from "framer-motion";
import { CurrentPageContext } from "../../App";

const Hero = () => {
  const currentPage = useContext(CurrentPageContext);
  return (
    <section id={NavLinks.Home} className="hero">
      <motion.div
        className="container d-flex"
        onViewportEnter={() => currentPage?.setCurrentPage(NavLinks.Home)}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }} // مخفي بالبداية وتحته شوي
          whileInView={{ opacity: 1, x: 0 }} // يظهر بحركة لما يدخل الشاشة
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }} // يعيد الحركة إذا خرج ورجع للشاشة
          className="text"
        >
          <div className="title">
            <h1>EVOGYM</h1>
            <p>evolutionary fitness</p>
          </div>
          <div className="content">
            <p>
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="actions d-flex"
          >
            <a
              href={`#${NavLinks.Contact}`}
              className="main-btn btn"
              onClick={() => currentPage?.setCurrentPage(NavLinks.Contact)}
            >
              Join Now
            </a>
            <a className="link" href={`#${NavLinks.Contact}`}>
              Learn More
            </a>
          </motion.div>
        </motion.div>
        <div className="image">
          <img
            className="img-fluid"
            src="/assets/imgs/undraw_bike-ride_ba0o.svg"
            alt=""
          />
        </div>
      </motion.div>
      <div className="sponsors">
        <div className="container">
          <img src="/assets/imgs/SponsorRedBull.png" alt="" />
          <img src="/assets/imgs/SponsorForbes.png" alt="" />
          <img src="/assets/imgs/SponsorFortune.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
