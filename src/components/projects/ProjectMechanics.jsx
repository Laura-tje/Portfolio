import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { ChevronLeft, ChevronRight } from "../icons/icons.jsx";

export default function ProjectMechanics({ project, hasMoreContent = false }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mediaIndices, setMediaIndices] = useState({}); // Track current media index for each mechanic
  const { language } = useContext(LanguageContext);

  if (!project.mechanics || project.mechanics.length === 0) {
    return null;
  }

  // Helper function to check if a mechanic has media
  const hasMedia = (m) => m.youtube || m.images?.length > 0 || m.gifs?.length > 0;

  // Combine images and gifs into a single media array
  const getMediaArray = (m) => {
    const media = [];
    if (m.images?.length > 0) {
      media.push(...m.images.map(img => ({ type: 'image', src: img })));
    }
    if (m.gifs?.length > 0) {
      media.push(...m.gifs.map(gif => ({ type: 'gif', src: gif })));
    }
    return media;
  };

  // Navigate to next media item for a mechanic
  const goToNextMedia = (mechanicIndex, totalItems) => {
    setMediaIndices(prev => ({
      ...prev,
      [mechanicIndex]: ((prev[mechanicIndex] || 0) + 1) % totalItems
    }));
  };

  // Navigate to previous media item for a mechanic
  const goToPrevMedia = (mechanicIndex, totalItems) => {
    setMediaIndices(prev => ({
      ...prev,
      [mechanicIndex]: ((prev[mechanicIndex] || 0) - 1 + totalItems) % totalItems
    }));
  };

  return (
    <div className={`mx-4 mt-12 ${!hasMoreContent ? 'mb-4' : ''}`}>
      {project.mechanics.map((m, i, arr) => (
        <div
          key={i}
          className={`flex flex-col gap-4 pb-8 ${i === 0 ? 'pt-0' : 'pt-2'} ${i !== arr.length - 1 ? 'border-b border-(--bordercolor)' : ''}`}
        >
          {m.code ? (
            // With code
            hasMedia(m) ? (
              // With code AND media: title/description on top, code+media below
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

                {/* Media + Code */}
                <div className="grid gap-4 grid-cols-1 md:grid-cols-[35%_65%]">
                  {/* Media Carousel */}
                  <div 
                    className="w-full h-60 rounded-lg overflow-hidden relative group"
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
                  
                    {!m.youtube && getMediaArray(m).length > 0 && (
                      <>
                        <img
                          src={`${import.meta.env.BASE_URL}${getMediaArray(m)[mediaIndices[i] || 0].src}`}
                          alt={m.subtitle}
                          className="w-full h-full object-contain"
                          style={{ borderRadius: "0.5rem" }}
                        />
                        
                        {/* Navigation arrows */}
                        {getMediaArray(m).length > 1 && (
                          <>
                            <button
                              onClick={() => goToPrevMedia(i, getMediaArray(m).length)}
                              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                                       bg-black/50 text-white hover:bg-black/70 transition-colors 
                                       opacity-0 group-hover:opacity-100"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            
                            <button
                              onClick={() => goToNextMedia(i, getMediaArray(m).length)}
                              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                                       bg-black/50 text-white hover:bg-black/70 transition-colors 
                                       opacity-0 group-hover:opacity-100"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>

                            {/* Media counter */}
                            <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
                              {(mediaIndices[i] || 0) + 1} / {getMediaArray(m).length}
                            </div>
                          </>
                        )}
                      </>
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
              // With code but NO media: full-width code
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

                {/* Only Code */}
                <div className="overflow-auto rounded-lg">
                  <SyntaxHighlighter
                    language="csharp"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      borderRadius: "0.5rem",
                      fontSize: "0.95rem",
                    }}
                    showLineNumbers
                  >
                    {m.code}
                  </SyntaxHighlighter>
                </div>
              </>
            )
          ) : hasMedia(m) ? (
            // Without code but WITH media: media left, title/description right
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {/* Media Carousel */}
              <div 
                className="w-full h-60 rounded-lg overflow-hidden relative group"
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
              
                {!m.youtube && getMediaArray(m).length > 0 && (
                  <>
                    <img
                      src={`${import.meta.env.BASE_URL}${getMediaArray(m)[mediaIndices[i] || 0].src}`}
                      alt={m.subtitle}
                      className="w-full h-full object-contain"
                      style={{ borderRadius: "0.5rem" }}
                    />
                    
                    {/* Navigation arrows */}
                    {getMediaArray(m).length > 1 && (
                      <>
                        <button
                          onClick={() => goToPrevMedia(i, getMediaArray(m).length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                                   bg-black/50 text-white hover:bg-black/70 transition-colors 
                                   opacity-0 group-hover:opacity-100"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        
                        <button
                          onClick={() => goToNextMedia(i, getMediaArray(m).length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full 
                                   bg-black/50 text-white hover:bg-black/70 transition-colors 
                                   opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Media counter */}
                        <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 text-white text-xs rounded">
                          {(mediaIndices[i] || 0) + 1} / {getMediaArray(m).length}
                        </div>
                      </>
                    )}
                  </>
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
          ) : (
            // Without code and WITHOUT media: just title and description
            <div>
              <h3 className="text-lg font-semibold mb-2 text-(--text)">
                {m.subtitle}
              </h3>
              <p className="leading-relaxed text-(--muted)">
                {m.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
