import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";
import "./App.css";
import LocationIcon from "./assets/search-location-icon.svg"
import HotFireGoldIcon from "./assets/hot-fire-gold.svg";
import HotFireWhite from "./assets/hot-fire-white.svg";
import InstaIcon from "./assets/instagram.svg";
import FacebookIcon from "./assets/facebook.svg";
import TwitterIcon from "./assets/twitter.svg";

function App() {
  return (
    <>
      <header>
        <div id="header-container">
          <a href="">Snack Attack</a>

          <div id="delivery-widget-container">
            <div id="delivery-widget-time">ASAP</div>
            <div id="delivery-widget-label">To</div>
            <div id="delivery-widget-address">
              <img src={LocationIcon} alt="Search" />
              <input type="text" value="123 Main St" />
            </div>
          </div>
          <GiHamburger className="profile-icon" />
        </div>
      </header>
      <main>
        <div id="main-container">
          <div id="store-search-container">
            <form action="">
              <IoSearch className="search-icon" />
              <input type="text" placeholder="Search for food..." />
            </form>
          </div>
          <div id="main-delivery-container">
            <div className="main-delivery-label">When</div>
            <div className="main-delivery-choice">ASAP</div>
            <div className="main-delivery-label">To</div>
            <div className="main-delivery-choice">123 Main St</div>
          </div>
          <section id="store-list-container">
            <h2>Food Delivery in Helsinki</h2>
            <ul>
              <li>
                <a href="#">
                  <article id="burgaz">
                    <header>
                      <div className="thumbnail-image"></div>
                      <h3>Burgaz</h3>
                    </header>
                    <p>
                      $ &middot; Fast Food &middot; BQQ &middot; Burger &middot;
                      Halal
                    </p>
                    <p>
                      <span>20-30min</span>
                    </p>
                  </article>
                </a>
              </li>
              <li>
                <a href="#">
                  <article id="super-sanga">
                    <header>
                      <div className="thumbnail-image"></div>
                      <h3>Super Sanga</h3>
                    </header>
                    <p>
                      $ &middot; Fast Food &middot; Sandwich &middot; Healthy
                    </p>
                    <p>
                      <span>15-30min</span>
                    </p>
                  </article>
                </a>
              </li>
              <li>
                <a href="#">
                  <article id="mctuckey">
                    <header>
                      <div class="thumbnail-image"></div>
                      <h3>McTuckey</h3>
                    </header>
                    <p>$ &middot; Chicken &middot; Healthy</p>
                    <p>
                      <span>10-20 min</span>
                      <span>
                        4.5
                        <img
                          src={HotFireGoldIcon}
                          alt="Hot Fire Gold"
                        />
                        (336)
                      </span>
                    </p>
                  </article>
                </a>
              </li>
              <li>
                <a href="#">
                  <article id="straya">
                    <header>
                      <div class="thumbnail-image"></div>
                      <h3>Straya</h3>
                    </header>
                    <p>$ &middot; Fast Food &middot; Pies</p>
                    <p>
                      <span>5-10 min</span>
                      <span>
                        4.9
                        <img
                          src={HotFireGoldIcon}
                          alt="Hot Fire Gold"
                        />
                        (5604)
                      </span>
                    </p>
                  </article>
                </a>
              </li>
              <li>
                <a href="#">
                  <article id="snags">
                    <header>
                      <div class="thumbnail-image"></div>
                      <h3>Snags</h3>
                    </header>
                    <p>$ &middot; Meat &middot; Barbeque &middot; Fast Food</p>
                    <p>
                      <span>15-25 min</span>
                      <span>
                        4.8
                        <img
                          src={HotFireGoldIcon}
                          alt="Hot Fire Gold"
                        />
                        (124)
                      </span>
                    </p>
                  </article>
                </a>
              </li>
              <li>
                <a href="#">
                  <article id="oi">
                    <header>
                      <div class="thumbnail-image"></div>
                      <h3>Oi!!</h3>
                    </header>
                    <p>$ &middot; Classic &middot; Salty &middot; Beautiful</p>
                    <p>
                      <span>10-20 min</span>
                      <span>
                        5.0
                        <img
                          src={HotFireGoldIcon}
                          alt="Hot Fire Gold"
                        />
                        (1535)
                      </span>
                    </p>
                  </article>
                </a>
              </li>
              <li>
                <a href="#">
                  <article id="chips-mate">
                    <header>
                      <div class="thumbnail-image"></div>
                      <h3>Chips Mate</h3>
                    </header>
                    <p>$ &middot; Fast Food &middot; Potatoes</p>
                    <p>
                      <span>10-15 min</span>
                      <span>
                        4.6
                        <img
                          src={HotFireGoldIcon}
                          alt="Hot Fire Gold"
                        />
                        (2044)
                      </span>
                    </p>
                  </article>
                </a>
              </li>
              <li>
                <a href="#">
                  <article id="fridee-nights">
                    <header>
                      <div class="thumbnail-image"></div>
                      <h3>Fridee Nights</h3>
                    </header>
                    <p>
                      $ &middot; Seafood &middot; Dinner Time &middot; Fast Food
                    </p>
                    <p>
                      <span>25-40 min</span>
                      <span>
                        4.9
                        <img
                          src={HotFireGoldIcon}
                          alt="Hot Fire Gold"
                        />
                        (1604)
                      </span>
                    </p>
                  </article>
                </a>
              </li>
              <li>
                <a href="#">
                  <article id="maccas">
                    <header>
                      <div class="thumbnail-image"></div>
                      <h3>Maccas</h3>
                    </header>
                    <p>
                      $ &middot; Fast Food &middot; Fries &middot; Nuggets
                      &middot; Burgers
                    </p>
                    <p>
                      <span>20-25 min</span>
                      <span>
                        3.8
                        <img
                          src={HotFireWhite}
                          alt="Hot Fire White"
                        />
                        (98)
                      </span>
                    </p>
                  </article>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer>
        <div id="footer-container">
          <p className="footer-logo">Snack Attack</p>
          <hr />
          <div id="footer-links">
            <ul id="social-media-links">
              <li>
                <a href="#">
                  <img src={FacebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={TwitterIcon}alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={InstaIcon} alt="Instagram" />
                </a>
              </li>
            </ul>
            <div id="other-links">
              <ul>
                <li>
                  <a href="#">About Snack Attack</a>
                </li>
                <li>
                  <a href="#">Become a Delivery Mate</a>
                </li>
                <li>
                  <a href="#">Become a Restaurant Mate</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div id="security-section">
            <small>&copy; 2025 Snack Attack Oy</small>
            <ul>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
