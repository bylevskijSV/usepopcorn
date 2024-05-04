import { useState } from "react";
import { tempWatchedData } from "./App";
import { WatchedSummary } from "./WatchedSummary";
import { WatchedMovieList } from "./WatchedMovieList";

export function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
}
