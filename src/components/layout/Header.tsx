import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import {
  ChevronDown,
  LayoutDashboard,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings2,
  Sun,
  User as UserIcon,
  Users,
  X,
} from "lucide-react";
import { useAuth } from "../../auth/context";
import { CATEGORIES, CATEGORY_LIST } from "../../lib/categories";
import { cn } from "../../lib/cn";
import { useTheme } from "../../lib/theme";
import { Avatar } from "../ui/Avatar";
import { Logo } from "./Logo";

const primaryNav = [
  { to: "/home", label: "For you" },
  { to: "/community", label: "Community" },
  { to: "/saved", label: "Saved" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
    isActive ? "bg-ink text-paper" : "text-muted hover:text-ink hover:bg-sunken",
  );

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-9 items-center justify-center rounded-full text-muted hover:bg-sunken hover:text-ink"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? (
        <Sun className="size-5" aria-hidden="true" />
      ) : (
        <Moon className="size-5" aria-hidden="true" />
      )}
    </button>
  );
}

function HeaderSearch({ onDone }: { onDone?: () => void }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setQ("");
    onDone?.();
  };
  return (
    <form role="search" onSubmit={submit} className="relative">
      <label htmlFor="header-search" className="sr-only">
        Search news
      </label>
      <Search
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted"
        aria-hidden="true"
      />
      <input
        id="header-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search news"
        className="h-9 w-full rounded-full border border-rule bg-sunken/60 pr-3 pl-9 text-sm placeholder:text-muted focus:border-crimson focus:bg-surface focus:outline-none lg:w-56"
      />
    </form>
  );
}

function UserMenu() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!user) return null;
  const item =
    "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm hover:bg-sunken";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Account menu"
        className="flex items-center gap-1 rounded-full p-0.5 pr-1.5 hover:bg-sunken"
      >
        <Avatar name={user.name} src={user.avatarUrl} size={32} />
        <ChevronDown className="size-4 text-muted" aria-hidden="true" />
      </button>
      {open && (
        <div role="menu" className="card absolute right-0 z-50 mt-2 w-60 p-1.5 shadow-xl">
          <div className="border-b border-rule px-3 pt-2 pb-3">
            <p className="truncate font-medium">{user.name}</p>
            <p className="truncate text-xs text-muted">{user.email}</p>
          </div>
          <div className="pt-1.5">
            {[
              { to: "/profile", label: "Profile", Icon: UserIcon },
              { to: "/connections", label: "Connections", Icon: Users },
              { to: "/preferences", label: "Interests", Icon: Settings2 },
              ...(user.role === "admin"
                ? [{ to: "/admin", label: "Admin dashboard", Icon: LayoutDashboard }]
                : []),
            ].map(({ to, label, Icon }) => (
              <Link
                key={to}
                role="menuitem"
                to={to}
                className={item}
                onClick={() => setOpen(false)}
              >
                <Icon className="size-4" aria-hidden="true" /> {label}
              </Link>
            ))}
            <button
              role="menuitem"
              type="button"
              className={cn(item, "text-bad")}
              onClick={() => {
                signOut();
                navigate("/");
              }}
            >
              <LogOut className="size-4" aria-hidden="true" /> Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const { user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close the mobile drawer whenever the route changes (state adjusted during render,
  // as recommended by the React docs, instead of a setState-in-effect).
  const routeKey = location.pathname + location.search;
  const [lastRoute, setLastRoute] = useState(routeKey);
  if (routeKey !== lastRoute) {
    setLastRoute(routeKey);
    setMobileOpen(false);
  }

  const topics = user?.interests.length
    ? user.interests.map((id) => CATEGORIES[id])
    : CATEGORY_LIST;

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center gap-4">
        <Link to={user ? "/home" : "/"} className="text-2xl">
          <Logo />
        </Link>

        {user && (
          <nav aria-label="Primary" className="ml-4 hidden items-center gap-1 md:flex">
            {primaryNav.map((n) => (
              <NavLink key={n.to} to={n.to} className={navLinkClass}>
                {n.label}
              </NavLink>
            ))}
          </nav>
        )}

        <div className="ml-auto flex items-center gap-1.5">
          {user && (
            <div className="hidden md:block">
              <HeaderSearch />
            </div>
          )}
          <ThemeToggle />
          {user ? (
            <>
              <div className="hidden md:block">
                <UserMenu />
              </div>
              <button
                type="button"
                className="inline-flex size-9 items-center justify-center rounded-full hover:bg-sunken md:hidden"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((o) => !o)}
              >
                {mobileOpen ? (
                  <X className="size-5" aria-hidden="true" />
                ) : (
                  <Menu className="size-5" aria-hidden="true" />
                )}
              </button>
            </>
          ) : (
            <Link to="/about" className="px-3 text-sm font-medium text-muted hover:text-ink">
              About
            </Link>
          )}
        </div>
      </div>

      {user && (
        <nav
          aria-label="Your topics"
          className="container-page -mt-1 flex gap-1 overflow-x-auto pb-2.5 [scrollbar-width:none]"
        >
          {topics.map((c) => (
            <NavLink
              key={c.id}
              to={`/topic/${c.id}`}
              className={({ isActive }) =>
                cn(
                  "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                  isActive
                    ? "border-crimson bg-crimson-soft text-crimson"
                    : "border-rule text-muted hover:text-ink",
                )
              }
            >
              {c.label}
            </NavLink>
          ))}
        </nav>
      )}

      {user && mobileOpen && (
        <div id="mobile-nav" className="border-t border-rule bg-paper md:hidden">
          <div className="container-page space-y-4 py-4">
            <HeaderSearch onDone={() => setMobileOpen(false)} />
            <nav aria-label="Mobile" className="grid gap-1">
              {[
                ...primaryNav,
                { to: "/profile", label: "Profile" },
                { to: "/connections", label: "Connections" },
                { to: "/preferences", label: "Interests" },
                ...(user.role === "admin" ? [{ to: "/admin", label: "Admin dashboard" }] : []),
              ].map((n) => (
                <NavLink key={n.to} to={n.to} className={navLinkClass}>
                  {n.label}
                </NavLink>
              ))}
            </nav>
            <MobileSignOut />
          </div>
        </div>
      )}
    </header>
  );
}

function MobileSignOut() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => {
        signOut();
        navigate("/");
      }}
      className="flex items-center gap-2 px-3 text-sm font-medium text-bad"
    >
      <LogOut className="size-4" aria-hidden="true" /> Sign out
    </button>
  );
}
