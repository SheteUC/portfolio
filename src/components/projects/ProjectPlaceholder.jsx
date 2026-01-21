// Generate a deterministic color palette based on project name
const generateColors = (name) => {
  // Better hash function with more variation
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  
  // Use different parts of the hash for different hues
  const hue1 = (hash * 137) % 360; // Golden angle multiplier
  const hue2 = (hash * 223) % 360; // Prime number multiplier
  const hue3 = (hash * 317) % 360; // Another prime
  
  return {
    primary: `hsl(${hue1}, 70%, 55%)`,
    secondary: `hsl(${hue2}, 65%, 45%)`,
    accent: `hsl(${hue3}, 75%, 60%)`,
  };
};

// Generate geometric pattern based on project name
const generatePattern = (name) => {
  // Use a different hash calculation for pattern selection
  let hash = 5381;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) + hash) + name.charCodeAt(i); // hash * 33 + char
  }
  hash = Math.abs(hash);
  
  const patterns = [
    // Circles pattern
    (colors) => (
      <>
        <circle cx="20%" cy="30%" r="80" fill={colors.primary} opacity="0.6" />
        <circle cx="70%" cy="60%" r="100" fill={colors.secondary} opacity="0.5" />
        <circle cx="50%" cy="80%" r="60" fill={colors.accent} opacity="0.7" />
      </>
    ),
    // Diagonal lines pattern
    (colors) => (
      <>
        <rect x="0" y="0" width="100%" height="30%" fill={colors.primary} opacity="0.3" transform="rotate(15 200 100)" />
        <rect x="0" y="40%" width="100%" height="25%" fill={colors.secondary} opacity="0.4" transform="rotate(-10 200 150)" />
        <rect x="0" y="70%" width="100%" height="20%" fill={colors.accent} opacity="0.5" transform="rotate(8 200 200)" />
      </>
    ),
    // Triangles pattern
    (colors) => (
      <>
        <polygon points="100,50 200,200 0,200" fill={colors.primary} opacity="0.5" />
        <polygon points="300,100 400,250 250,250" fill={colors.secondary} opacity="0.4" />
        <polygon points="200,150 350,300 100,280" fill={colors.accent} opacity="0.6" />
      </>
    ),
    // Hexagons pattern
    (colors) => (
      <>
        <polygon points="150,50 200,80 200,140 150,170 100,140 100,80" fill={colors.primary} opacity="0.5" />
        <polygon points="280,120 330,150 330,210 280,240 230,210 230,150" fill={colors.secondary} opacity="0.4" />
        <polygon points="100,200 150,230 150,290 100,320 50,290 50,230" fill={colors.accent} opacity="0.6" />
      </>
    ),
  ];
  
  return patterns[Math.abs(hash) % patterns.length];
};

export const ProjectPlaceholder = ({ title, hovered }) => {
  const colors = generateColors(title);
  const PatternComponent = generatePattern(title);
  
  // Get initials from title
  const initials = title
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  
  // Create a safe ID for SVG patterns
  const safeId = title.replace(/\s+/g, '-').toLowerCase();
  
  return (
    <div
      style={{
        width: hovered ? "90%" : "85%",
        rotate: hovered ? "2deg" : "0deg",
      }}
      className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded overflow-hidden bg-zinc-800"
    >
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        style={{ background: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)' }}
        key={`placeholder-${safeId}`}
      >
        {/* Grid overlay for tech feel */}
        <defs>
          <pattern id={`grid-${safeId}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </pattern>
        </defs>
        
        {/* Background pattern */}
        <PatternComponent {...colors} />
        
        <rect width="100%" height="100%" fill={`url(#grid-${safeId})`} />
        
        {/* Project initials */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="80"
          fontWeight="bold"
          opacity="0.9"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          {initials}
        </text>
        
        {/* Subtle accent line */}
        <line
          x1="10%"
          y1="85%"
          x2="90%"
          y2="85%"
          stroke={colors.accent}
          strokeWidth="3"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};
