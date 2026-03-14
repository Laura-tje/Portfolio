import { siteConfig } from "../siteConfig";
import { GitHub, LinkedIn, Itch, Envelope, ArrowRight } from "../components/icons/icons.jsx";
import { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { usePageTranslations } from "../hooks/useTranslations";

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const { t } = usePageTranslations("contact");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { 
      name: "GitHub", 
      url: siteConfig.socials.github, 
      description: language === "nl" ? "Code & Projecten" : "Code & Projects",
      icon: <GitHub className="w-6 h-6" />
    },
    { 
      name: "LinkedIn", 
      url: siteConfig.socials.linkedin, 
      description: language === "nl" ? "Professioneel Netwerk" : "Professional Network",
      icon: <LinkedIn className="w-6 h-6" />
    },
    { 
      name: "Itch.io", 
      url: siteConfig.socials.itch, 
      description: language === "nl" ? "Mijn Games" : "My Games",
      icon: <Itch className="w-6 h-6" />
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center space-y-6 mb-20">
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="text-(--text)">
                {language === "nl" ? "Laten we" : "Let's"}
              </span>
              {" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {language === "nl" ? "samenwerken" : "Work Together"}
              </span>
            </h1>
            <p className="text-lg text-(--muted) max-w-2xl mx-auto">
              {language === "nl" 
                ? "Ik sta open voor nieuwe projecten, samenwerking en interessante gesprekken over XR-technologie."
                : "I'm open to new projects, collaborations, and interesting conversations about XR technology."}
            </p>
          </div>

          {/* Main Contact Card */}
          <div className="bg-(--surface) border border-(--bordercolor) rounded-lg p-8 lg:p-12 hover:border-(--accent) transition-all">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Email Section */}
              <div className="flex-1 space-y-6">
                <div>
                  <p className="text-sm text-(--accent) font-semibold uppercase tracking-widest mb-2">
                    {language === "nl" ? "Primair Contact" : "Primary Contact"}
                  </p>
                  <h2 className="text-3xl font-bold text-(--text)">
                    {language === "nl" ? "Stuur mij een E-mail" : "Send me an Email"}
                  </h2>
                </div>

                <p className="text-(--muted) leading-relaxed">
                  {language === "nl"
                    ? "Ik reageer meestal binnen 24 uur. Laat me weten waar je aan werkt of als je vragen hebt!"
                    : "I usually respond within 24 hours. Let me know what you're working on or if you have any questions!"}
                </p>

                <a
                  href={`mailto:${siteConfig.socials.email}`}
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white rounded-lg font-bold text-lg hover:shadow-lg hover:from-cyan-300 hover:to-cyan-400 transition-all group"
                >
                  <Envelope className="w-5 h-5" />
                  <span className="break-all">{siteConfig.socials.email}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {copied && (
                  <p className="text-(--accent) text-sm">
                    {language === "nl" ? "E-Mail kopiert!" : "Email copied!"}
                  </p>
                )}
              </div>

              {/* Decorative Element */}
              <div className="hidden lg:block relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full opacity-20 blur" />
                <div className="relative w-32 h-32 rounded-full bg-(--surface-alt) border-2 border-(--bordercolor) flex items-center justify-center">
                  <Envelope className="w-12 h-12 text-(--accent)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 px-4 bg-(--surface-alt)">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-(--text) mb-4">
              {language === "nl" ? "Vind mij online" : "Find Me Online"}
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-(--surface) border border-(--bordercolor) rounded-lg hover:border-(--accent) transition-all hover:shadow-md"
                style={{ animation: `fade-in-up 0.8s ease-out ${0.2 + idx * 0.1}s both` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-(--surface-alt) border border-(--bordercolor) flex items-center justify-center text-(--muted) group-hover:text-(--accent) group-hover:border-(--accent) transition-all">
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-(--text) group-hover:text-(--accent) transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-sm text-(--muted)">
                      {social.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="space-y-6 p-8 bg-(--surface) border border-(--bordercolor) rounded-lg">
            <p className="text-(--muted) italic">
              "{language === "nl"
                ? "Het mooiste van samenwerken is wanneer we samen het onmogelijke mogelijk maken."
                : "The best part of collaboration is when we make the impossible possible together."}"
            </p>
            <div className="text-sm text-(--accent)">
              {language === "nl" ? "— Laat me je helpen creëren" : "— Let me help you create"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}