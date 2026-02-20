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
  const MAX_GUESSES = 5;


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

    if (guessCount === MAX_GUESSES) {
      return;
    }

    if (guess.trim().toLowerCase() === currentPokemon.toLowerCase()) {
      setResult("correct");
      setRevealed(true);
    } else {
      setResult("incorrect");
      setGuessCount(prev => {
        const newCount = prev + 1;
        if (newCount >= MAX_GUESSES) {
          setRevealed(true);
          setResult("incorrect");
        }
        return newCount;
      });
    }
  }



  return (
    <div className="bg-secondarybackground flex flex-col text-lightshade h-[100vh]">
      <h1 className="flex text-3xl font-bold justify-center pt-3">Pokémon Guessing Game</h1>
      {!loadingGen && (
        <div className="py-4">
          <div className="grid grid-cols-3 p-4 rounded-md w-full flex-wrap">
            {Array.from({ length: numOfGen }, (_, i) => {
              const gen = i + 1;
              const isSelected = selectedGens.includes(gen);

              return (
                <button
                  key={gen}
                  onClick={() => toggleGen(gen)}
                  className={`flex justify-center cursor-pointer text-md md:text-lg 
            text-left text-wrap max-w-lg m-2 p-2 rounded-md transition
            ${isSelected ? "bg-lightaccent text-darkshade" : "bg-lightaccent/25 hover:bg-lightaccent/40"}
          `}
                >
                  Gen {gen}
                </button>

              );
            })}
          </div>
        </div>

      )}



      {detailsLoading && <p>Loading Pokémon details...</p>}
      <div className="flex-1 flex flex-col items-center justify-center mt-4">

        {details && (
          <div className="flex flex-col items-center justify-center mb-8">
            <img
              src={details.sprite}
              alt={details.name}
              className="w-[35vw] max-w-[75vw] max-h-[50vh] object-contain"
              style={{
                filter: revealed ? "none" : "brightness(0) saturate(100%)",
                transition: revealed ? "filter 0.5s ease-in-out" : "none"
              }}
            />
          </div>
        )}
      </div>


      <div className="flex flex-row justify-self-end gap-4 mb-6">
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
          className="flex-1 w-{60vw} p-2 rounded-md bg-mainbackground border border-lightshade/30 focus:outline-none focus:ring-2 focus:ring-lightshade"
        />

        <button
          onClick={() => {
            submitGuess();
            setGuess("");
          }}
          className="px-4 py-2 bg-lightshade w-[20vw] text-mainbackground font-semibold rounded-md hover:bg-lightshade/80 transition"
        >
          Submit
        </button>

        <button
          onClick={() => {
            setCurrentPokemon(getRandomPokemon());
            setGuess("");
            setResult(null);
            setGuessCount(0);
            setRevealed(false);
          }}
          className="px-4 py-2 bg-secondarybackground text-lightshade border border-lightshade/30 rounded-md hover:bg-secondarybackground/80 transition"
        >
          Next Pokémon
        </button>
      </div>

      {result === "correct" && (
        <p
          className={`text-green-400 font-semibold mb-2 ${
            revealed ? "opacity-100" : "opacity-0"
          }`}
        >
          Correct! It's {details?.name}!
        </p>
      )}

      {result === "incorrect" && (
        <p
          className={`text-red-400 font-semibold mb-2 ${
            result === "incorrect" ? "opacity-100" : "opacity-0"
          }`}
        >
          Incorrect!{revealed && details?.name ? ` It was ${details.name}!` : ""}
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
