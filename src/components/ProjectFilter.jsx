import { useContext, useState, useRef, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export default function ProjectFilter({ 
  selectedFilters, 
  onFilterChange, 
  availableFilters,
  filterCategories,
  allProjects = []
}) {
  const { language } = useContext(LanguageContext);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Count how many projects have each tag
  const getTagCount = (tag) => {
    return allProjects.filter(project =>
      project.tags && project.tags.includes(tag)
    ).length;
  };

  // Get tags that are still available given current filters
  const getAvailableTags = () => {
    if (selectedFilters.length === 0) {
      return availableFilters;
    }

    const projectsMatchingFilters = allProjects.filter(project =>
      selectedFilters.every(filter =>
        project.tags && project.tags.includes(filter)
      )
    );

    const tagsInMatchingProjects = new Set();
    projectsMatchingFilters.forEach(project => {
      if (project.tags) {
        project.tags.forEach(tag => tagsInMatchingProjects.add(tag));
      }
    });

    selectedFilters.forEach(tag => tagsInMatchingProjects.add(tag));

    return Array.from(tagsInMatchingProjects).sort();
  };

  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      onFilterChange(selectedFilters.filter(f => f !== filter));
    } else {
      onFilterChange([...selectedFilters, filter]);
    }
  };

  // Get selected filter count per category
  const getSelectedCountInCategory = (categoryKey, category) => {
    return category.tags.filter(tag => selectedFilters.includes(tag)).length;
  };

  const clearFilters = () => {
    onFilterChange([]);
    setOpenDropdown(null);
  };

  const availableTags = getAvailableTags();

  return (
    <div className="mb-8 pb-6 border-b border-(--bordercolor)">
      {/* Selected filters - erboven */}
      {selectedFilters.length > 0 && (
        <div style={{
          marginBottom: "12px",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
          alignItems: "center"
        }}>
          {selectedFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 10px",
                background: "rgba(0, 217, 255, 0.15)",
                border: "1px solid var(--accent)",
                borderRadius: "4px",
                color: "var(--accent)",
                fontSize: "12px",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 217, 255, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 217, 255, 0.15)";
              }}
            >
              <span>{filter}</span>
              <span style={{
                fontSize: "14px",
                fontWeight: "700",
                opacity: "0.7"
              }}>✕</span>
            </button>
          ))}
        </div>
      )}

      {/* Category buttons - altijd zichtbaar */}
      <div className="flex gap-2 flex-wrap" ref={dropdownRef}>
        {filterCategories && Object.entries(filterCategories).map(([categoryKey, category]) => (
          <div key={categoryKey} className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === categoryKey ? null : categoryKey)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "6px 10px",
                background: "var(--surface)",
                border: openDropdown === categoryKey ? "2px solid var(--accent)" : "2px solid var(--bordercolor)",
                borderRadius: "6px",
                color: openDropdown === categoryKey ? "var(--accent)" : "var(--text)",
                fontWeight: "600",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={(e) => {
                if (openDropdown !== categoryKey) {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }
              }}
              onMouseLeave={(e) => {
                if (openDropdown !== categoryKey) {
                  e.currentTarget.style.borderColor = "var(--bordercolor)";
                  e.currentTarget.style.color = "var(--text)";
                }
              }}
            >
              <span>{category.label}</span>
              {getSelectedCountInCategory(categoryKey, category) > 0 && (
                <span style={{
                  backgroundColor: "var(--accent)",
                  color: "#0a0e27",
                  borderRadius: "3px",
                  fontSize: "10px",
                  fontWeight: "700",
                  padding: "1px 4px",
                  minWidth: "18px",
                  textAlign: "center",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  {getSelectedCountInCategory(categoryKey, category)}
                </span>
              )}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform: openDropdown === categoryKey ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  fontSize: "9px"
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Dropdown */}
            {openDropdown === categoryKey && (
              <div 
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: "0",
                  background: "var(--surface)",
                  border: "2px solid var(--accent)",
                  borderRadius: "6px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  zIndex: "1000",
                  minWidth: "180px"
                }}
              >
                {category.tags.map((filter) => {
                  const isSelected = selectedFilters.includes(filter);
                  const isAvailable = availableTags.includes(filter);
                  const count = getTagCount(filter);

                  if (!isAvailable) {
                    return null;
                  }

                  return (
                    <button
                      key={filter}
                      onClick={() => toggleFilter(filter)}
                      style={{
                        display: "block",
                        width: "100%",
                        padding: "8px 12px",
                        background: isSelected ? "rgba(0, 217, 255, 0.1)" : "none",
                        border: "none",
                        color: isSelected ? "#00d9ff" : "var(--text)",
                        textAlign: "left",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: isSelected ? "600" : "500",
                        transition: "all 0.3s ease",
                        borderLeft: isSelected ? "2px solid #00d9ff" : "2px solid transparent"
                      }}
                      onMouseEnter={(e) => {
                        if (!isSelected) {
                          e.target.style.color = "#00d9ff";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSelected) {
                          e.target.style.color = "var(--text)";
                        }
                      }}
                    >
                      {filter} <span style={{ fontSize: "11px", opacity: "0.7" }}>({count})</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Clear button */}
      {selectedFilters.length > 0 && (
        <div className="flex justify-start gap-2 mt-4">
          <button
            onClick={() => {
              onFilterChange([]);
              setOpenDropdown(null);
            }}
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg bg-(--accent) hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {language === "nl" ? "Wissen" : "Clear"}
          </button>
          <span className="text-sm text-(--muted) flex items-center">
            {selectedFilters.length} {language === "nl" ? "filter" : "filter"}{selectedFilters.length !== 1 ? "s" : ""}
          </span>
        </div>
      )}
    </div>
  );
}
