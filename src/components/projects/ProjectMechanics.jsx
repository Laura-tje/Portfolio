import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function ProjectMechanics({ project, hasMoreContent = false }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { language } = useContext(LanguageContext);

  if (!project.mechanics || project.mechanics.length === 0) {
    return null;
  }

  return (
    <div className={`mx-4 mt-12 ${!hasMoreContent ? 'mb-4' : ''}`}>
      {/* <h2 className="text-xl font-semibold text-(--text) mb-4">
        Code Highlights
      </h2> */}

      {project.mechanics.map((m, i, arr) => (
        <div
          key={i}
          className={`flex flex-col gap-4 pb-8 ${i === 0 ? 'pt-0' : 'pt-2'} ${i !== arr.length - 1 ? 'border-b border-(--bordercolor)' : ''}`}
        >
          {m.code ? (
            // With code: title/description on top, code+media below
            <>
              {/* Title + Description */}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-(--text)">
                  {m.subtitle}
                </h3>
                <p className="leading-relaxed text-(--muted)">
                  {m.description}
                </p>
              </div>

              {/* Code + Media */}
              <div className="grid gap-4 grid-cols-1 md:grid-cols-[65%_35%]">
                {/* Code */}
                <div className="h-60 overflow-auto rounded-lg">
                  <SyntaxHighlighter
                    language="csharp"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      borderRadius: "0.5rem",
                      fontSize: "0.95rem",
                      height: "100%",
                    }}
                    showLineNumbers
                  >
                    {m.code}
                  </SyntaxHighlighter>
                </div>

                {/* Media */}
                <div 
                  className="w-full h-60 rounded-lg overflow-hidden relative"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {m.youtube && (
                    <iframe
                      src={m.youtube}
                      title={m.subtitle}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                    />
                  )}
                
                  {!m.youtube && m.gif && m.image && (
                    <>
                      <img
                        src={`${import.meta.env.BASE_URL}${m.image}`}
                        alt={m.subtitle}
                        className="absolute w-full h-full object-contain rounded-lg transition-opacity"
                        style={{ opacity: hoveredIndex === i ? 0 : 1 }}
                      />
                      <img
                        src={`${import.meta.env.BASE_URL}${m.gif}`}
                        alt={m.subtitle}
                        className="w-full h-full object-contain rounded-lg transition-opacity"
                        style={{ opacity: hoveredIndex === i ? 1 : 0 }}
                      />
                    </>
                  )}
                
                  {!m.youtube && m.gif && !m.image && (
                    <img
                      src={`${import.meta.env.BASE_URL}${m.gif}`}
                      alt={m.subtitle}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  )}
                
                  {!m.youtube && !m.gif && m.image && (
                    <img
                      src={`${import.meta.env.BASE_URL}${m.image}`}
                      alt={m.subtitle}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  )}
                </div>
              </div>
            </>
          ) : (
            // Without code: title/description left, media right
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-(--text)">
                  {m.subtitle}
                </h3>
                <p className="leading-relaxed text-(--muted)">
                  {m.description}
                </p>
              </div>

              {/* Media */}
              <div 
                className="w-full h-60 rounded-lg overflow-hidden relative"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {m.youtube && (
                  <iframe
                    src={m.youtube}
                    title={m.subtitle}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  />
                )}
              
                {!m.youtube && m.gif && m.image && (
                  <>
                    <img
                      src={`${import.meta.env.BASE_URL}${m.image}`}
                      alt={m.subtitle}
                      className="absolute w-full h-full object-contain rounded-lg transition-opacity"
                      style={{ opacity: hoveredIndex === i ? 0 : 1 }}
                    />
                    <img
                      src={`${import.meta.env.BASE_URL}${m.gif}`}
                      alt={m.subtitle}
                      className="w-full h-full object-contain rounded-lg transition-opacity"
                      style={{ opacity: hoveredIndex === i ? 1 : 0 }}
                    />
                  </>
                )}
              
                {!m.youtube && m.gif && !m.image && (
                  <img
                    src={`${import.meta.env.BASE_URL}${m.gif}`}
                    alt={m.subtitle}
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
              
                {!m.youtube && !m.gif && m.image && (
                  <img
                    src={`${import.meta.env.BASE_URL}${m.image}`}
                    alt={m.subtitle}
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
