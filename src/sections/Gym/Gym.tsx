import { useContext } from "react";
import GymCard from "../../components/GymCard/GymCard";
import { NavLinks } from "../../linksEnum";
import "./Gym.css";
import { motion } from "framer-motion";
import { CurrentPageContext } from "../../App";

const Gym = () => {
  const gym = [
    {
      id: 1,
      img: "/assets/imgs/gym1.jpg",
      title: "Yoga & Flexibility",
      desc: "A calm and open space designed for yoga, stretching, and relaxation exercises, promoting balance, mindfulness, and flexibility.",
    },
    {
      id: 2,
      img: "/assets/imgs/gym2.jpg",
      title: "Strength Training Area",
      desc: "Equipped with free weights, squat racks, and benches—ideal for building muscle, improving posture, and increasing core strength.",
    },
    {
      id: 3,
      img: "/assets/imgs/gym3.jpg",
      title: "Cardio & Endurance",
      desc: "Packed with treadmills, ellipticals, and stationary bikes to help you boost stamina, burn calories, and keep your heart healthy.",
    },
    {
      id: 4,
      img: "/assets/imgs/gym4.jpg",
      title: "Functional Training Zone",
      desc: "A dynamic area with kettlebells, ropes, and plyometric boxes—perfect for high-intensity interval training and functional workouts.",
    },
    {
      id: 5,
      img: "/assets/imgs/gym5.jpg",
      title: "Personal Training Studio",
      desc: "A private and focused environment for one-on-one sessions with certified trainers to tailor your fitness journey.",
    },
    {
      id: 6,
      img: "/assets/imgs/gym6.jpg",
      title: "Group Classes Room",
      desc: "A high-energy space for group classes like Zumba, pilates, or boot camps—where motivation meets fun in every session.",
    },
  ];
  const gymCards = gym.map((card) => (
    <GymCard
      key={card.id}
      img={card.img}
      title={card.title}
      desc={card?.desc}
    />
  ));
  const currentPage = useContext(CurrentPageContext);
  return (
    <section id={NavLinks.Classes} className="gym">
      <motion.div
        className="container"
        onViewportEnter={() => currentPage?.setCurrentPage(NavLinks.Classes)}
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
          <h2 className="title-font">Our Classes</h2>
          <p>
            Diverse classes led by passionate instructors to fit every fitness
            level. From high-energy HIIT to calming yoga, there's something for
            everyone. Stay motivated, challenge yourself, and enjoy the power of
            group training. Experience fitness that’s fun, social, and
            effective.
          </p>
        </motion.div>
      </motion.div>
      <ul className="images">{gymCards}</ul>
    </section>
  );
};

export default Gym;
