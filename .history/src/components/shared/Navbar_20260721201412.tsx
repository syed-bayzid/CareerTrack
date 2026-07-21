import { Link } from 'react-router';
import { Button } from '../ui/button';

export default function Navbar() {
  // const { isAuthenticated, user, logout } = useAuth();

  const isAuthenticated = true;
const user = {
  name: "Syed Bayzid",
  email: "syedbayzid@example.com",
};
  return (
    <header className="border-b border-mist bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-ink">
          CareerTrack <span className="text-signal">Lite</span>
        </Link>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          {isAuthenticated ? (
            <>
            <Button claad> <Link to="/dashboard" className="text-ink/80 hover:text-ink">
                Dashboard
              </Link></Button>
             
              {/* <Link to="/applications" className="text-ink/80 hover:text-ink">
                Applications
              </Link> */}
              <span className="hidden text-ink/50 sm:inline">Hi, {user?.name?.split(' ')[0]}</span>
              <button
                type="button"
                className="rounded-md border border-ink/15 px-3 py-1.5 font-medium text-ink transition hover:border-rust hover:text-rust"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-ink/80 hover:text-ink">
                Log in
              </Link>
              <Link
                to="/register"
                className="rounded-md bg-ink px-3 py-1.5 font-medium text-paper transition hover:bg-signal"
              >
                Get started
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
