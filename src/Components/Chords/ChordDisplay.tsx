import { useEffect, useState } from "react";
import {
  DiatonicChordFunctions,
  getRandomProgressionElement,
} from "./Progressions";

const MINUTE_IN_MILLISECONDS = 60 * 1000;

function ChordDisplay() {
  const [tempo, setTempo] = useState(60);
  const [progressionElement, setProgressionElement] = useState(
    DiatonicChordFunctions[0]
  );

  useEffect(() => {
    const interval = setInterval(
      () => setProgressionElement(getRandomProgressionElement().toString()),
      MINUTE_IN_MILLISECONDS / tempo
    );
    return () => {
      clearInterval(interval);
    };
  }, [tempo]);

  return (
    <div className="flex flex-col">
      <h2 className="text-9xl"> {progressionElement} </h2>
      <div className="mt-10">
        <p>{tempo} bpm</p>
        <button onClick={(e) => setTempo(tempo + 1)}>&#9652;</button>
        <button onClick={(e) => setTempo(tempo - 1)}>&#9662;</button>
      </div>
    </div>
  );
}

export default ChordDisplay;
