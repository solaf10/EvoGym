import { useContext } from "react";
import { NavLinks } from "../../linksEnum";
import "./Features.css";
import { motion } from "framer-motion";
import { CurrentPageContext } from "../../App";

const Features = () => {
  const currentPage = useContext(CurrentPageContext);
  return (
    <div className="features">
      <div className="holder">
        <div className="image">
          <img className="img-fluid" src="/assets/imgs/fit.jpg" alt="" />
        </div>
        <div className="text">
          <img
            className="decoration waves"
            src="/assets/imgs/AbstractWaves.png"
            alt=""
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }} // مخفي بالبداية وتحته شوي
            whileInView={{ opacity: 1, x: 0 }} // يظهر بحركة لما يدخل الشاشة
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }} // يعيد الحركة إذا خرج ورجع للشاشة
            className="content"
          >
            <h2 className="title-font">
              MILLIONS OF HAPPY MEMBERS GETTING <span>FIT</span>
            </h2>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="article"
            >
              <p>
                Strong bodies begin with small choices, made daily with energy
                and purpose. Together we build strength, confidence, and
                momentum. Through commitment and community, fitness becomes a
                joyful rhythm. Progress flows in motion, guided by purpose and
                shared motivation. Health is not a goal, but a lifestyle shaped
                by every movement, breath, and beat.
              </p>
              <p>
                Empowered by unity, millions lift each other toward success.
                Across distances and differences, one passion connects them.
                With every rep and every run, members grow stronger, more
                resilient, more alive. Here, wellness thrives on encouragement
                and consistency. This is more than fitness—it’s a celebration of
                progress, powered by people who never quit.
              </p>
            </motion.div>
          </motion.div>
          <a
            href={`#${NavLinks.Contact}`}
            className="main-btn btn"
            onClick={() => currentPage?.setCurrentPage(NavLinks.Contact)}
          >
            Join Now
          </a>
          <img
            className="decoration sparks"
            src="/assets/imgs/Sparkles.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
