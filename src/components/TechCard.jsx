export default function TechCard({ tech, onAdd, isAdded }) {
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
          <div className="badge badge-secondary badge-outline text-xs font-bold">{tech.badge}</div>
        </div>
        <h2 className="card-title mt-4">{tech.name}</h2>
        <p className="text-sm text-gray-500 flex-grow">{tech.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4 mb-4">
          <div className="badge badge-accent badge-sm">{tech.category}</div>
          <div className="badge badge-ghost badge-sm">{tech.difficulty}</div>
          <div className="badge badge-ghost badge-sm flex gap-1 items-center">
            ⭐ {tech.rating}
          </div>
        </div>

        <div className="card-actions justify-end mt-auto">
          <button 
            onClick={() => onAdd(tech)} 
            disabled={isAdded}
            className={`btn w-full rounded-xl ${isAdded ? 'btn-disabled bg-gray-200 text-gray-500' : 'btn-primary bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white border-none'}`}
          >
            {isAdded ? "✓ Added to Stack" : "Add to Stack"}
          </button>
        </div>
      </div>
    </div>
  );
}
