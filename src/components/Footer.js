import { navdata } from "./data";
import { socialLinks } from "./data";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {navdata.map((foot) => {
          return (
            <li key={foot.id}>
              <a href={foot.href} className="footer-link">
                {foot.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ id, href, target, icon, rel }) => {
          return (
            <li key={id}>
              <a href={href} target={target} rel={rel} className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
