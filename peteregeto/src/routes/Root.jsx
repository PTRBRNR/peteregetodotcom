import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Container } from "react-bootstrap/";

import "../routes/Root.css";

function Root() {
  return (
    <>
      <nav className="navbar">
        <h1 href={`/`} className="peteregeto">
          PETER<br></br>EGETO
        </h1>
        <div className="links">
          <a href={`/`} className="icon">
            Home
          </a>
          <a href={`/projects`} className="icon">
            Projects
          </a>
          <a
            className="icon"
            href={"https://www.instagram.com/pietro_brnr"}
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a
            className="icon"
            href={"https://www.facebook.com/peter.egeto"}
            target="_blank"
          >
            <FacebookIcon />
          </a>
          <a
            className="icon"
            href={"https://www.github.com/PTRBRNR"}
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a
            className="icon"
            href={"https://www.linkedin.com/in/ptrbrnr/"}
            target="_blank"
          >
            <LinkedInIcon />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Root;
