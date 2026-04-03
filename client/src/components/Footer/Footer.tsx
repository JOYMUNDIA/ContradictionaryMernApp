import { FaGlobe, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Contra-dictionary. All rights reserved.</p>

        <div className="footer-links">
          {/* Portfolio */}
          <a
            href="https://joymundia.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="portfolioWebsite"
          >
            <button className="button">
              <div className="blob1"></div>
              <div className="blob2"></div>
              <div className="inner">
                <FaGlobe style={{ marginRight: "10px" }} />
                Portfolio Website
              </div>
            </button>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/joy-mundia/"
            target="_blank"
            rel="noopener noreferrer"
            id="linkedIn"
          >
            <button className="button">
              <div className="blob1"></div>
              <div className="blob2"></div>
              <div className="inner">
                <FaLinkedin style={{ marginRight: "10px" }} />
                LinkedIn
              </div>
            </button>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer