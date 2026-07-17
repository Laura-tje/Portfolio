import { ArrowLeft, ArrowRight } from "../icons/icons.jsx";
import { usePageTranslations } from "../../hooks/useTranslations";

export default function ProjectPrevNext({ previous, next, onNavigateProject }) {
  const { t } = usePageTranslations("projects");
  
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* FOOTER NAVIGATION - at the bottom */}
      {(previous || next) && (
        <nav className="mt-16 pt-8 border-t border-(--bordercolor) mx-4">
        <div className="flex items-center justify-between gap-4">
          
          {/* PREVIOUS */}
          {previous ? (
            <button
              type="button"
              onClick={() => {
                scrollToTop();
                onNavigateProject?.(previous.id);
              }}
              className="group flex items-center gap-3 hover:text-(--accent) transition-colors max-w-[45%]"
            >
              <ArrowLeft className="w-5 h-5 shrink-0 text-(--muted) group-hover:text-(--accent) group-hover:-translate-x-1 transition-transform" aria-hidden />
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-(--muted) uppercase tracking-wider">{t("previous")}</span>
                <span className="font-semibold truncate">{previous.title}</span>
              </div>
            </button>
          ) : (
            <div />
          )}

          {/* NEXT */}
          {next ? (
            <button
              type="button"
              onClick={() => {
                scrollToTop();
                onNavigateProject?.(next.id);
              }}
              className="group flex items-center gap-3 hover:text-(--accent) transition-colors max-w-[45%] ml-auto"
            >
              <div className="flex flex-col min-w-0 text-right">
                <span className="text-xs text-(--muted) uppercase tracking-wider">{t("next")}</span>
                <span className="font-semibold truncate">{next.title}</span>
              </div>
              <ArrowRight className="w-5 h-5 shrink-0 text-(--muted) group-hover:text-(--accent) group-hover:translate-x-1 transition-transform" aria-hidden />
            </button>
          ) : (
            <div />
          )}
        </div>
      </nav>
      )}
    </>
  );
}