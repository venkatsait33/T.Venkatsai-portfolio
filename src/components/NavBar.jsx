import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "VS",
    type: "name",
    path: "",
  },
  {
    label: "Contact Me",
    path: "/contactForm",
  },
];
const NavBar = () => {
  const [theme, setTheme] = useState("light");
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="flex justify-between space-x-6 mx-auto  max-[560px]:p-5 text-center place-items-center fixed inset-x-0 top-0 z-50  backdrop-blur-sm p-4 ">
      <h1 className="text-2xl font-semibold text-start max-[560px]:text-base bg-[linear-gradient(90deg,#fffb22,#ff11ea,#0eff)] bg-clip-text text-transparent">Venkata sai</h1>
      <div className="flex space-x-10 max-[560px]:space-x-2 max-[560px]:text-base text-xl place-items-center  ">
        {links.map((link, i) => (
          <div key={i} className={activeLink === link.path ? "active" : ""}>
            <Link
              to={link.path}
              activeClassName="active"
              onClick={() => handleClick(link.path)}
            >
              <li>
                {!link.type && (
                  <p style={{ padding: "0.5rem 0" }} className="font-semibold max-sm:text-sm">
                    {link.label}
                  </p>
                )}
              </li>

              <li>
                {link.type && (
                  <h1 className="text-2xl font-bold max-sm:text-sm">
                    {link.label}
                  </h1>
                )}
              </li>
            </Link>
          </div>
        ))}
      </div>
      <li>
        <label className="text-xl swap swap-rotate" onClick={toggleTheme}>
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="dark" />
          {/* sun icon */}
          <IoSunnyOutline className="fill-current swap-on" />
          {/* moon icon */}
          <FaRegMoon className="fill-current swap-off" />
        </label>
      </li>
    </div>
  );
};

export default NavBar;
