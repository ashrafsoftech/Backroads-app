import logo from "../images/logo.svg";
import { navdata } from "./data";
import { socialLinks } from "./data";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {navdata.map((nav) => {
            return (
              <li key={nav.id}>
                <a href={nav.href} className="nav-link">
                  {nav.text}
                </a>
              </li>
            );
          })}
{/* instead of write the list belo like this, instead you can iterate it above like that */}
          {/* <li>
            <a href="#home" className="nav-link">
              {" "}
              home{" "}
            </a>
          </li>

          <li>
            <a href="#about" className="nav-link">
              {" "}
              about{" "}
            </a>
          </li>

          <li>
            <a href="#services" className="nav-link">
              {" "}
              services{" "}
            </a>
          </li>

          <li>
            <a href="#tours" className="nav-link">
              {" "}
              tours
            </a>
          </li> */}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((social)=>{
            <li>
              <a
              href={'social.href'}
              target={"social.target"}
              className="nav-icon"
              rel="noreferrer"
            >
              <i className={social.icon}></i>
            </a>
          </li>
          })}
          
        </ul>
      </div>
    </nav>
  );
};
export default navbar;
