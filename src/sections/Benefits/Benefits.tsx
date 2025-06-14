import "./Benefits.css";
import { HiHomeModern } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";
import BenefitCard from "../../components/BenefitCard/BenefitCard";
import { NavLinks } from "../../linksEnum";
import { useContext } from "react";
import { CurrentPageContext } from "../../App";
import Features from "../Features/Features";

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <HiHomeModern className="icon" />,
      title: "State of the Art Facilities",
      desc: "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      id: 2,
      icon: <FaUsers className="icon" />,
      title: "100's of Diverse Classes",
      desc: "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      id: 3,
      icon: <FaGraduationCap className="icon" />,
      title: "Expert and Pro Trainers",
      desc: "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];
  const benefitsCards = benefits.map((feature) => (
    <div className="holder col-lg-4 col-md-12" key={feature.id}>
      <BenefitCard
        icon={feature.icon}
        title={feature.title}
        desc={feature.desc}
      />
    </div>
  ));
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };
  const currentPage = useContext(CurrentPageContext);
  return (
    <section id={NavLinks.Benefits} className="benefits">
      <motion.div
        className="container"
        onViewportEnter={() => currentPage?.setCurrentPage(NavLinks.Benefits)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="main-title title"
        >
          <h2 className="title-font">MORE THAN JUST GYM.</h2>
          <p>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="cards row"
        >
          {benefitsCards}
        </motion.div>
        <Features />
      </motion.div>
    </section>
  );
};

export default Benefits;
