import { FiMessageSquare } from "react-icons/fi";
import { FaToggleOn } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import styles from "./Header.module.css";
import ToggleButton from "./ToggleButton";
const Header = ({ selectedTab, setSelectedTab }) => {
  const handleOnClick = (tabname) => {
    setSelectedTab(tabname);
  };

  return (
    <>
      <header className={`p-3 ${styles.header}`}>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto">
            <li>
              <img
                className={styles.kitty_img}
                src="/KittyMedia.png"
                alt="kitty"
              />
            </li>

            <li>
              <form
                class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  class={`form-control form-control-dark ${styles.find_friend}`}
                  placeholder="Find friends..."
                  aria-label="Search"
                />
              </form>
            </li>
            <FiMessageSquare className={styles.nav_icons} />
            <div className={`d-flex ${styles.nav_menu}`}>
              <li
                className="nav-item"
                onClick={() => {
                  handleOnClick("Home");
                }}
              >
                <a
                  href="#"
                  className={`nav-link nav-links ${
                    selectedTab === "Home" && "active"
                  }`}
                >
                  Home
                </a>
              </li>
              <li
                onClick={() => {
                  handleOnClick("Create Post");
                }}
              >
                <a
                  href="#"
                  className={`nav-link nav-links ${
                    selectedTab === "Create Post" && "active"
                  }`}
                >
                  Create Post
                </a>
              </li>
            </div>
            <li className={styles.nav_icon_holder}>
              <ToggleButton></ToggleButton>
            </li>
            <li className={`float-end ${styles.dropdown}`}>
              <div className="flex-shrink-0 dropdown">
                <a
                  href="#"
                  class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img
                    src="/vini.jpg"
                    alt="mdo"
                    width="35"
                    height="35"
                    class="rounded-circle"
                  />
                </a>
                <ul class="dropdown-menu text-small shadow">
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
