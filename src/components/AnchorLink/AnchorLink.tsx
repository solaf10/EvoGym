import { useContext } from "react";
import "./AnchorLink.css";
import { CurrentPageContext } from "../../App";

const AnchorLink = ({ page }: { page: string }) => {
  const currentPage = useContext(CurrentPageContext);
  return (
    <li className="nav-item">
      <a
        className={
          currentPage?.currentPage == page.split(" ").join("")
            ? "nav-link active"
            : "nav-link"
        }
        aria-current="page"
        href={`#${page.split(" ").join("")}`}
        onClick={() => currentPage?.setCurrentPage(page)}
      >
        {page}
      </a>
    </li>
  );
};

export default AnchorLink;
