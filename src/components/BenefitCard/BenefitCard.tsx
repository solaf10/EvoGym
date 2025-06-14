import type { ReactNode } from "react";
import "./BenefitCard.css";
import { motion } from "framer-motion";
import { NavLinks } from "../../linksEnum";

interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
}

const BenefitCard = ({ icon, title, desc }: Feature) => {
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div variants={childVariant} className="card">
      <div className="icon-holder">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a className="link" href={`#${NavLinks.Contact}`}>
        Learn More
      </a>
    </motion.div>
  );
};

export default BenefitCard;
