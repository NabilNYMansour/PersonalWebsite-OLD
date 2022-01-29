import GitHub from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import "./App.css";

function App() {
  const [openContact, setOpenContact] = useState<boolean>(false);
  return (
    <div className="main-body">
      {openContact && (
        <div className="popup">
          <div className="close">
            <button
              onClick={() => setOpenContact(!openContact)}
              className="close-button"
            >
              <CloseIcon fontSize="small" />
            </button>
          <div style={{ fontSize: "2.5em" }}>Contact Information</div>
          </div>
          <div className="popup-desc">
            <div className="contact-item">
              <EmailIcon fontSize="small" className="contact-icon" />{" "}
              <a href="mailto:n1mansour@ryerson.ca">n1mansour@ryerson.ca</a>
            </div>
            <div className="contact-item">
              <LinkedInIcon fontSize="small" className="contact-icon" />
              <a href="https://linkedin.com/in/nnym">linkedin.com/in/nnym</a>
            </div>
            <div className="contact-item">
              <GitHub fontSize="small" className="contact-icon" />
              <a href="https://github.com/NabilNYMansour">
                github.com/NabilNYMansour
              </a>
            </div>
          </div>
        </div>
      )}
      <div className="topnav">
        <div>
          <button onClick={() => setOpenContact(!openContact)}>Contact</button>
        </div>
        <div>
          <a
            href="NNYM_Resume_2022.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Resume</button>
          </a>
        </div>
      </div>
      <div className="name-plate">
        <div className="name">Nabil Mansour</div>
        <div className="title">Software Developer</div>
      </div>
      <div className="projects">
        <div className="project-item">
          <img src={"lin-alg-calc.PNG"}></img>
          <div className="projects-desc">
            <div>
              A react app that allows for the calculation of linear algebra
              operations applied to two matrices that the user places.
            </div>
            <div className="project-buttons">
              <form
                method="get"
                action="https://nabilmansour.com/LinAlgCalculator/"
                target="_blank"
              >
                <a href="https://nabilmansour.com/LinAlgCalculator/">
                  <button type="submit">
                    <OpenInBrowserIcon fontSize="large" />
                  </button>
                </a>
              </form>
              <form
                method="get"
                action="https://github.com/NabilNYMansour/LinAlgCalculator"
                target="_blank"
              >
                <a href="https://github.com/NabilNYMansour/LinAlgCalculator">
                  <button type="submit">
                    <GitHub fontSize="large" />
                  </button>
                </a>
              </form>
            </div>
          </div>
        </div>
        <div className="project-item">
          <img src={"poly-plotter.PNG"}></img>
          <div className="projects-desc">
            <div>
              A react app that allows for the rendering of polynomials on a
              graph using canvas HTML.
            </div>
            <div className="project-buttons">
              <form
                method="get"
                action="https://nabilmansour.com/PolyPlotter/"
                target="_blank"
              >
                <a href="https://nabilmansour.com/PolyPlotter/">
                  <button type="submit">
                    <OpenInBrowserIcon fontSize="large" />
                  </button>
                </a>
              </form>
              <form
                method="get"
                action="https://github.com/NabilNYMansour/PolyPlotter"
                target="_blank"
              >
                <a href="https://github.com/NabilNYMansour/PolyPlotter">
                  <button type="submit">
                    <GitHub fontSize="large" />
                  </button>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
