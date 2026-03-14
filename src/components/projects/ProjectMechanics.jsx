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
      {project.mechanics.map((m, i, arr) => (
        <div
          key={i}
          className={`flex flex-col gap-4 pb-8 ${i === 0 ? 'pt-0' : 'pt-6'} ${i !== arr.length - 1 ? 'border-b border-(--bordercolor)' : ''}`}
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
              <div className="grid gap-4 grid-cols-1 md:grid-cols-[35%_65%]">
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
              </div>
            </>
          ) : (
            // Without code: media left, title/description right
            <div className="grid gap-4 grid-cols-1 md:grid-cols-[35%_65%] items-start">
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

              <div>
                <h3 className="text-lg font-semibold mb-2 text-(--text)">
                  {m.subtitle}
                </h3>
                <p className="leading-relaxed text-(--muted)">
                  {m.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
