import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100%] flex-col bg-[#111827]">
      <h1 className="text-[1000%] font-bold blue">404</h1>
      <p className="text-3xl yellow">Oops! Something is wrong.</p>
      <Link to={"/"} class="yellow-btn mt-5">
        <FontAwesomeIcon icon={faHouse} /> Go Home page.
      </Link>
    </div>
  );
};

export default Error404;
