import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          CareerTrack
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard"
                className="hover:text-blue-600 transition-colors"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to="/applications"
                className="hover:text-blue-600 transition-colors"
              >
                Applications
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-md border px-4 py-2 hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}