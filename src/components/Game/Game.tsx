import { useState } from "react";
import usePokemon from "../../hooks/usePokemon";
import useGenCount from "../../hooks/useGenCount";
import usePokemonDetails from "../../hooks/usePokemonDetails";


export default function Game() {

  const [selectedGens, setSelectedGens] = useState<number[]>([1]);
  const { pokemonList } = usePokemon(selectedGens);
  const { genCount: numOfGen, loadingGen } = useGenCount();
  const [currentPokemon, setCurrentPokemon] = useState<string | null>(null);
  const { details, loading: detailsLoading } = usePokemonDetails(currentPokemon);
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [guessCount, setGuessCount] = useState(0);



  function toggleGen(gen: number) {
    setSelectedGens(prev =>
      prev.includes(gen)
        ? prev.filter(g => g !== gen)
        : [...prev, gen]
    );
  }

  function getRandomPokemon() {
    if (!pokemonList.length) return null;
    const index = Math.floor(Math.random() * pokemonList.length);
    setRevealed(false);
    return pokemonList[index];
  }





  function submitGuess() {
    if (!currentPokemon) return;
    if (guess.trim().toLowerCase() === currentPokemon.toLowerCase()) {
      setResult("correct");
      setRevealed(true);
    } else {
      setResult("incorrect");
      setGuessCount(prev => prev + 1);
    }
  }



  return (
    <div className="bg-secondarybackground flex flex-col text-lightshade min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Pokémon Guessing Game</h1>

      {!loadingGen && (
        <div className="flex flex-wrap gap-4 mb-6">
          {Array.from({ length: numOfGen }, (_, i) => {
            const gen = i + 1;
            return (
              <label key={gen} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedGens.includes(gen)}
                  onChange={() => toggleGen(gen)}
                />
                Gen {gen}
              </label>
            );
          })}
        </div>
      )}

      {detailsLoading && <p>Loading Pokémon details...</p>}

      {details && (
        <div style={{ marginTop: "20px" }}>
          <h2>{details.name}</h2>
          <img
            src={details.sprite}
            alt={details.name}
            style={{
              width: "200px",
              filter: result === "correct" ? "none" : "brightness(0) saturate(100%)",
              transition: revealed ? "filter 0.5s ease-in-out" : "none"
            }} />
        </div>
      )}

  

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter Pokémon name..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitGuess();
              setGuess("");
            }
          }}
          className="flex-1 p-2 rounded-md bg-mainbackground border border-lightshade/30 focus:outline-none focus:ring-2 focus:ring-lightshade"
        />

        <button
          onClick={() => {
            submitGuess();
            setGuess("");
          }}
          className="px-4 py-2 bg-lightshade text-mainbackground font-semibold rounded-md hover:bg-lightshade/80 transition"
        >
          Submit
        </button>

        <button
          onClick={() => {
            setCurrentPokemon(getRandomPokemon());
            setGuess("");
            setResult(null);
            setGuessCount(0);
          }}
          className="px-4 py-2 bg-secondarybackground text-lightshade border border-lightshade/30 rounded-md hover:bg-secondarybackground/80 transition"
        >
          Next Pokémon
        </button>
      </div>

      {result === "correct" && (
        <p className="text-green-400 font-semibold mb-2">Correct!</p>
      )}

      {result === "incorrect" && (
        <p className="text-red-400 font-semibold mb-2">
          Incorrect! The correct answer was <span className="capitalize">{currentPokemon}</span>.
        </p>
      )}

      {guessCount > 0 && (
        <p className="opacity-80">
          Number of guesses: {guessCount} {guessCount === 1 ? "guess" : "guesses"}
        </p>
      )}
    </div>

  );
}
