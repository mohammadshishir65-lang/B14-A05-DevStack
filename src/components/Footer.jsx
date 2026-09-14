export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content mt-20 py-12 px-4 md:px-12 rounded-t-[3rem]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-black bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-transparent bg-clip-text mb-4">
            DevStack
          </h2>
          <p className="text-gray-400 mb-6">
            Empowering developers to curate and manage their ideal technology architecture with ease and precision.
          </p>
          <div className="flex gap-4">
            <a className="btn btn-circle btn-ghost btn-sm bg-base-300">GH</a>
            <a className="btn btn-circle btn-ghost btn-sm bg-base-300">TW</a>
            <a className="btn btn-circle btn-ghost btn-sm bg-base-300">IN</a>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="footer-title text-white">Product</span>
          <a className="link link-hover text-gray-400">Features</a>
          <a className="link link-hover text-gray-400">Integrations</a>
          <a className="link link-hover text-gray-400">Pricing</a>
          <a className="link link-hover text-gray-400">FAQ</a>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="footer-title text-white">Company</span>
          <a className="link link-hover text-gray-400">About Us</a>
          <a className="link link-hover text-gray-400">Careers</a>
          <a className="link link-hover text-gray-400">Blog</a>
          <a className="link link-hover text-gray-400">Contact</a>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="footer-title text-white">Legal</span>
          <a className="link link-hover text-gray-400">Terms of Service</a>
          <a className="link link-hover text-gray-400">Privacy Policy</a>
          <a className="link link-hover text-gray-400">Cookie Policy</a>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 DevStack Builder. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a className="link link-hover">Privacy</a>
          <a className="link link-hover">Terms</a>
        </div>
      </div>
    </footer>
  );
}
