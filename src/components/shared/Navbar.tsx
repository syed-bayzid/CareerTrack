import { Link } from "react-router";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <header className="border-b border-mist bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-xl font-bold text-ink"
        >
          CareerTrack <span className="text-signal">Lite</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button>Dashboard</Button>
              </Link>

              <span className="hidden text-sm text-gray-600 md:block">
                Hi,{" "}
                {user.displayName
                  ? user.displayName.split(" ")[0]
                  : user.email}
              </span>

              <Button
                variant="outline"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-black"
              >
                Log In
              </Link>

              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}