import { NumResults } from "./NumResults";
import { Search } from "./Search";
import { Logo } from "./Logo";

export function NavBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
}
