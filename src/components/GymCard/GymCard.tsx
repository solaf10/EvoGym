import "./GymCard.css";

interface GymCardProps {
  img: string;
  title: string;
  desc?: string;
}

const GymCard = ({ img, title, desc }: GymCardProps) => {
  return (
    <li className="gym-card">
      <div className="overlay">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
      <img src={img} alt={title} />
    </li>
  );
};

export default GymCard;
