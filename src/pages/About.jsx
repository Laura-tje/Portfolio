import { siteConfig } from "../siteConfig";
import { Download } from "../components/icons/icons.jsx";
import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function About() {
  const { language } = useContext(LanguageContext);
  const aboutText = siteConfig[language]?.aboutLong || siteConfig.nl.aboutLong;
  const paragraphs = aboutText
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-(--surface)" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-(--surface) rounded-full blur-3xl opacity-70" />
        
        <div className="w-full relative z-10 text-center px-4 md:px-8 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-bold text-(--text) mb-4">
            {language === "nl" ? "Over mij" : "About Me"}
          </h1>
          <div className="h-1 w-12 bg-(--accent) mx-auto" />
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-20">
        {/* Main Content Grid */}
        <div className="space-y-20">
          
          {/* Section 1: Image + Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-(--surface) rounded-lg opacity-60 group-hover:opacity-80 blur transition-opacity" />
              <img
                src={siteConfig.aboutImage}
                alt={siteConfig.name}
                className="relative w-full aspect-square object-cover rounded-lg border border-(--bordercolor) hover:border-(--accent) transition-colors"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Intro Text */}
            <div className="space-y-6" style={{ animation: 'fade-in-up 0.8s ease-out' }}>
              <div>
                <p className="text-sm text-(--accent) font-semibold uppercase tracking-widest mb-2">
                  {language === "nl" ? "XR Developer" : "XR Developer"}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-(--text)">
                  {siteConfig.name}
                </h2>
              </div>
              
              <p className="text-lg text-(--muted) leading-relaxed">
                {paragraphs[0]}
              </p>

              <a
                href={siteConfig.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-(--accent) text-white rounded-lg font-bold hover:shadow-lg hover:bg-(--accent-hover) transition-all"
              >
                <Download className="w-5 h-5" />
                {language === "nl" ? "Download CV" : "Download CV"}
              </a>
            </div>
          </div>

          {/* Section 2: Extended Bio */}
          <div className="bg-(--surface) border border-(--bordercolor) rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-(--text) mb-6">
              {language === "nl" ? "Mijn Verhaal" : "My Story"}
            </h3>
            <div className="space-y-4">
              {paragraphs.slice(1).map((text, i) => (
                <p key={i} className="text-(--muted) leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Section 3: Skills Grid */}
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-(--text) text-center">
              {language === "nl" ? "Vaardigheden & Expertise" : "Skills & Expertise"}
            </h3>

            {/* Hard Skills */}
            <div className="bg-(--surface) border border-(--bordercolor) rounded-lg p-8">
              <h4 className="text-xl font-semibold text-(--accent) mb-6">
                {language === "nl" ? "Technische Vaardigheden" : "Technical Skills"}
              </h4>
              <div className="flex flex-wrap gap-3">
                {(siteConfig[language]?.hardSkills || siteConfig.nl.hardSkills).map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-(--surface) border border-(--bordercolor) rounded-full text-(--text) hover:border-(--accent) hover:text-(--accent) transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="bg-(--surface) border border-(--bordercolor) rounded-lg p-8">
              <h4 className="text-xl font-semibold text-(--secondary) mb-6">
                {language === "nl" ? "Soft Skills" : "Soft Skills"}
              </h4>
              <div className="flex flex-wrap gap-3">
                {(siteConfig[language]?.softSkills || siteConfig.nl.softSkills).map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-(--surface) border border-(--bordercolor) rounded-full text-(--text) hover:border-(--secondary) hover:text-(--secondary) transition-all"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-12 border-t border-(--bordercolor)">
            <p className="text-(--muted) mb-6 text-lg">
              {language === "nl" ? "Klaar om samen aan je volgende XR-project te werken?" : "Ready to collaborate on your next XR project?"}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-(--accent) text-white rounded-lg font-bold hover:shadow-lg hover:bg-(--accent-hover) transition-all"
            >
              {language === "nl" ? "Laten we praten" : "Let's talk"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
