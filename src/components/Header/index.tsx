import Accordion from "../Accordion";
import { useState } from "react";
import Button from "../Button";
const Title = () => {
  return <h3 className="text-primary text-bold text-lg">GET START</h3>;
};
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const HandleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full h-16">
      <nav className="grid grid-cols-12 bg-transparent z-50 px-4 py-2 fixed">
        <Accordion
          header={<Title />}
          isExpand={isMenuOpen}
          id="nav"
          onClick={HandleMenuOpen}
          className="col-span-12 md:col-span-3 lg:col-span-2 xl:col-span-2"
        >
          <div className="navbar-item flex flex-col g-2 pb-2">
            <a
              href="/"
              className="text-primary w-full flex justify-center items-center"
            >
              <Button
                variant="text"
                themeColor="primary"
                btnType="button"
                className="w-full"
              >
                Home
              </Button>
            </a>
            <a
              href="/newPage/"
              className="text-primary w-full flex justify-center items-center"
            >
              <Button
                variant="text"
                themeColor="primary"
                btnType="button"
                className="w-full"
              >
                page
              </Button>
            </a>
          </div>
        </Accordion>
      </nav>
    </div>
  );
};

export default Header;
