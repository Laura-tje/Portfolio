import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ProjectBuilds({ project }) {
  if (!project.builds || project.mechanics.length === 0) {
    return null;
  }

  return (
    <div className="mx-4">
      <h2 className="text-xl font-semibold text-(--text) mb-4">
        Code Highlights
      </h2>

      {project.mechanics.map((m, i) => (
        <div
          key={i}
          className="flex flex-col gap-4 border-b border-(--bordercolor) pb-4 mb-4"
        >
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
          <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-4">
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
            <div className="w-full h-60 rounded-lg overflow-hidden">
              {m.youtube && (
                <iframe
                  src={m.youtube}
                  title={m.subtitle}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                />
              )}
            
              {!m.youtube && m.gif && (
                <img
                  src={`${import.meta.env.BASE_URL}${m.gif}`}
                  alt={m.subtitle}
                  className="w-full h-full object-cover"
                />
              )}
            
              {!m.youtube && !m.gif && m.image && (
                <img
                  src={`${import.meta.env.BASE_URL}${m.image}`}
                  alt={m.subtitle}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
