import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./CommitCalendar.css";

const GITHUB_USERNAME = "laura-tje";

export default function CommitCalendar() {
  const { language } = useContext(LanguageContext);

  return (
    <div className="commit-calendar-wrapper" style={{ animation: 'fade-in-up 1.4s ease-out 0.5s both' }}>
      <div className="commit-calendar-content">
        <p className="commit-calendar-label">
          {language === "nl" ? "Mijn Activiteit" : "My Activity"}
        </p>
        <div className="commit-calendar-chart-container">
          <a 
            href={`https://github.com/${GITHUB_USERNAME}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="commit-calendar-link"
          >
            <img 
              className="commit-calendar-chart" 
              src={`https://ghchart.rshah.org/${GITHUB_USERNAME}?v=1`} 
              alt="GitHub Contribution Graph" 
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
