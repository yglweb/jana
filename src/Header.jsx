import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faInstagram, faMailchimp } from "@fortawesome/free-brands-svg-icons"

export function Header() {
  return (
    <>
      <nav className="top-nav">
        <a href="/" className="logo">
          jana ruby faye
        </a>
        <a
          className="social-media"
          href="http://www.instagram.com/naturallyextra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} color="black" />
        </a>
        <a
          className="social-media"
          href="mailto:janarfdeguzman@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#CBC3E3" />
        </a>
      </nav>
      <div className="title">brand tiktoks + reels</div>
    </>
  )
}
