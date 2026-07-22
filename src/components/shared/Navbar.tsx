import { Link } from "react-router";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import useAuth from "@/hooks/useAuth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-red-200 bg-white text-red-600 transition-all duration-300 hover:bg-red-600 hover:text-white hover:shadow-lg"
                  >
                    Log Out
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent className="rounded-2xl border-0 bg-gradient-to-br from-white via-slate-50 to-red-50 shadow-2xl">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-bold text-red-600">
                      🚪 Log Out
                    </AlertDialogTitle>

                    <AlertDialogDescription className="text-base text-gray-600">
                      Are you sure you want to log out?
                      <br />
                      You'll need to sign in again to access your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel className="rounded-lg border border-gray-300 bg-white hover:bg-gray-100">
                      Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                      onClick={handleLogout}
                      className="rounded-lg bg-red-600 text-white transition-all duration-300 hover:bg-red-700"
                    >
                      Yes, Log Out
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
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