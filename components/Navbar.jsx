export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold text-lg">YourName.dev</h1>
        <div className="space-x-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a className="relative hover:text-white after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:w-0 after:bg-blue-400 hover:after:w-full after:transition-all">About</a>

        </div>
      </div>
    </nav>
  );
}
