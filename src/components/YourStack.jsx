export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-base-200 rounded-3xl p-6 sticky top-24 min-h-[400px] flex flex-col shadow-inner">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Your Stack</h3>
        {stack.length > 0 && (
          <span className="badge badge-primary">{stack.length} Selected</span>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-center text-gray-400 opacity-60">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p>Your stack is empty.</p>
          <p className="text-sm mt-2">Add technologies from the grid.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 flex-grow">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-base-100 p-3 rounded-xl shadow-sm border border-base-300">
              <img src={item.icon} alt={item.name} className="w-8 h-8" />
              <div className="flex-grow">
                <h4 className="font-bold text-sm">{item.name}</h4>
                <span className="text-xs text-gray-500">{item.category}</span>
              </div>
              <button 
                onClick={() => onRemove(item.id)}
                className="btn btn-sm btn-circle btn-ghost text-red-500 hover:bg-red-50"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button 
          onClick={onRemoveAll}
          className="btn btn-error btn-outline w-full mt-6 rounded-xl"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
