import { SideNavLinks } from "./SideNavLinks";
import "./SideNav.css";
import UserImage from "../admin/UserImage";
import adminImg from "../../assets/image.png";
import { useState } from "react";

const SideNav = ({ onSelect }) => {
  const [selected, setSelected] = useState(null);
  const name = "Sushank";

  function handleClicked(component) {
    setSelected(component);
    onSelect(component);
  }

  return (
    <aside className="side-nav-container">
      <div className="side-top-nav">
        <h2 className="admin-nav-header">Admin Control Panel</h2>
        <nav className="side-nav">
          <ul className="side-nav-links">
            {SideNavLinks.map((item) => (
              <li className="side-nav-lists" key={item.title}>
                <button
                  className={`side-nav-buttons ${
                    selected === item.component ? "selected" : ""
                  }`}
                  onClick={() => handleClicked(item.component)}
                >
                  <div className="side-nav-item">
                    {item.title} {item.icon}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="side-bot-nav">
        <UserImage
          imageUrl={adminImg}
          description="admin profile picture"
          userName={name}
        />
      </div>
    </aside>
  );
};

export default SideNav;
