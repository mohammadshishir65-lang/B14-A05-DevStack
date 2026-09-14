export default function Navbar() {
  const brandGradient = "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-transparent bg-clip-text";

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className={`btn btn-ghost normal-case text-2xl font-black ${brandGradient}`}>
          DevStack
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li><a>Home</a></li>
          <li><a>Technologies</a></li>
          <li><a>Projects</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <a className="btn btn-ghost hidden sm:flex">Sign In</a>
        <a className="btn bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white border-none rounded-full px-6">
          Sign Up
        </a>
      </div>
    </div>
  );
}
