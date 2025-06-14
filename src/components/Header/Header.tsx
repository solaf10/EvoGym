import { useContext, useEffect } from "react";
import useOnScrollBgChange from "../../hooks/useOnScrollBgChange";
import "./Header.css";
import AnchorLink from "../AnchorLink/AnchorLink";
import { NavLinks } from "../../linksEnum";
import { CurrentPageContext } from "../../App";

const Header = () => {
  const isTop = useOnScrollBgChange();
  const links = ["Home", "Benefits", "Our Classes", "Contact Us"].map(
    (link, i) => <AnchorLink key={i} page={link} />
  );
  const currentPage = useContext(CurrentPageContext);
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: isTop ? "" : "var(--neutral-color)",
        boxShadow: isTop
          ? ""
          : `0 1px 2px rgba(0, 0, 0, 0.05),0 1px 1px rgba(0, 0, 0, 0.03)`,
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/imgs/logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{links}</ul>
          <div className="actions d-flex justify-content-center align-items-center ">
            <span>Sign In</span>
            <a
              href={`#${NavLinks.Contact}`}
              className="main-btn btn"
              onClick={() => currentPage?.setCurrentPage(NavLinks.Contact)}
            >
              Become a Member
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
