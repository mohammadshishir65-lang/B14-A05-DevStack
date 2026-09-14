export default function Banner() {
  return (
    <div className="hero bg-base-200 rounded-3xl overflow-hidden py-12 px-4 md:px-12 mt-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 w-full justify-between">
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
          className="max-w-sm md:max-w-md rounded-2xl shadow-2xl object-cover" 
          alt="Coding setup"
        />
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight">
            Build Your Ultimate <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-transparent bg-clip-text">
              Development Stack
            </span>
          </h1>
          <p className="py-6 text-gray-500 text-lg">
            Curate, organize, and plan the perfect technologies for your next big project. Explore modern tools, languages, and frameworks all in one place.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="btn bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white border-none px-8 rounded-full">
              Explore Technologies
            </button>
            <button className="btn btn-outline rounded-full px-8">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
