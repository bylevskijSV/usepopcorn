import { useState } from "react";
import { MovieList } from "./MovieList";

export function ListBox({ movies }) {
  const [isOpen, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && <MovieList movies={movies} />}
    </div>
  );
}
