export default function TrustBadges() {
  const badges = [
    {
      icon: '✓',
      title: 'Licensed & Insured',
      description: 'Fully certified NC contractor'
    },
    {
      icon: '★',
      title: '20+ Years',
      description: 'Serving Western NC'
    },
    {
      icon: '♻',
      title: 'Eco-Friendly',
      description: 'Sustainable building practices'
    },
    {
      icon: '💯',
      title: '98% Satisfaction',
      description: 'Happy clients guaranteed'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg border-2 border-construction-primary/20 text-center hover:border-construction-primary hover:shadow-md transition-all"
        >
          <div className="text-3xl mb-2">{badge.icon}</div>
          <div className="font-bold text-construction-dark text-sm mb-1">
            {badge.title}
          </div>
          <div className="text-xs text-gray-700">
            {badge.description}
          </div>
        </div>
      ))}
    </div>
  );
}
