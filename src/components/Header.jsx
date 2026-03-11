import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { usePageTranslations } from "../hooks/useTranslations";

export default function Header() {
  const location = useLocation();
  const { t } = usePageTranslations("navigation");

  //Helper functie om te checken of een link actief is
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname.startsWith("/projects");
    }
    return location.pathname.startsWith(path);
  };

  //Scroll naar boven bij navigatie
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-(--surface) border-b border-(--bordercolor)">
      <nav className="container mx-auto px-4 py-3 md:py-0 md:h-16 flex items-center justify-between gap-2 md:gap-6">
        {/* Logo / Site naam */}
        <Link 
          to="/" 
          onClick={scrollToTop}
          className="text-lg md:text-xl font-bold text-(--accent) hover:opacity-80 transition-opacity shrink-0"
        >
          Portfolio
        </Link>

        {/* Navigatie links */}
        <div className="flex gap-2 md:gap-6 items-center flex-1 md:flex-none justify-end md:justify-start">
          <Link
            to="/"
            onClick={scrollToTop}
            className={`text-sm md:text-lg transition-colors ${
              isActive("/") 
                ? "text-(--accent) font-semibold" 
                : "text-(--muted) hover:text-(--text)"
            }`}
          >
            {t("projects")}
          </Link>

          <Link
            to="/about"
            onClick={scrollToTop}
            className={`text-sm md:text-lg transition-colors whitespace-nowrap ${
              isActive("/about") 
                ? "text-(--accent) font-semibold" 
                : "text-(--muted) hover:text-(--text)"
            }`}
          >
            {t("about")}
          </Link>

          <Link
            to="/contact"
            onClick={scrollToTop}
            className={`text-sm md:text-lg transition-colors ${
              isActive("/contact") 
                ? "text-(--accent) font-semibold" 
                : "text-(--muted) hover:text-(--text)"
            }`}
          >
            {t("contact")}
          </Link>

          <div className="hidden md:block border-l border-(--bordercolor) h-6" />
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}