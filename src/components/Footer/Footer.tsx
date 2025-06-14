import { MdAccessTime } from "react-icons/md";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="info gym-info">
          <img src="/public/assets/imgs/logo.png" alt="logo" />
          <p className="desc">
            State-of-the-art equipment, expert trainers, and an inspiring
            environment — all designed to help you reach your goals at your own
            pace. Clean, spacious, and fully equipped for strength and cardio.
            Join a community that’s committed to health, performance, and
            progress.
          </p>
          <p className="copyright">&copy; Evogym All Rights Reserved.</p>
        </div>

        <div className="info links">
          <h3>Links</h3>
          <ul>
            <li>Training Programs</li>
            <li>Nutrition & Wellness</li>
            <li>Gym Facilities Tour</li>
          </ul>
        </div>
        <div className="info contact-info">
          <div className="title">
            <h3>Contact</h3>
            <p className="desc">
              Dedicated support to help with memberships, schedules, and your
              fitness goals.
            </p>
          </div>
          <ul>
            <li className="phone">
              <FaPhoneAlt className="icon" />
              <span>(333) 425-6825</span>
            </li>
            <li className="worktime">
              <MdAccessTime className="icon" />
              <span>Open daily – your fitness journey starts here!</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
