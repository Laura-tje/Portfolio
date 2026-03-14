export default function ProjectHeader({ project }) {
  // Use banner if available, fallback to thumbnail
  const bannerImage = project.banner || project.thumbnail;
  
  return (
    <div>
      <div className="relative w-full mb-4 overflow-hidden">
        {/* Banner Image */}
        <img 
          src={`${import.meta.env.BASE_URL}${bannerImage}`}
          alt={project.title} 
          className="w-full h-48 sm:h-120 object-cover" 
        />

        {/* Gradient overlay voor leesbaarheid */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

        {/* Text overlay */}
        <div className="absolute bottom-4 left-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-1">{project.title}</h1>
          <p className="text-base text-gray-300 max-w-xl drop-shadow-sm font-medium">{project.tagline}</p>
        </div>
      </div>

      {/* Over dit project section */}
      <div className="mx-4 ml-4 mr-4 pb-8">
        <h2 className="text-xl font-semibold text-(--text) mb-4">Over dit project</h2>
        <div className="space-y-3">
          {project.description && project.description.split("\n\n").map((text, i) => (
            <p key={i} className="leading-relaxed text-(--muted)">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}