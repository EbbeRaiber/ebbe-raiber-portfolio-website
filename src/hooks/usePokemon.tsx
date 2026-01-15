import { useEffect, useState, useRef } from "react";

export default function usePokemon(gens: number[]) {
    const [pokemonList, setPokemonList] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const allSpecies = useRef<string[]>([]);
    const genMap = useRef<Record<number, string[]>>({});
    const initialized = useRef(false);


    useEffect(() => {
    async function loadAll() {
      if (!initialized.current) {
        setLoading(true);

        // 1. Load ALL species once
        const speciesRes = await fetch(
          "https://pokeapi.co/api/v2/pokemon-species?limit=20000"
        );
        const speciesData = await speciesRes.json();
        allSpecies.current = speciesData.results.map((s: any) => s.name);

        // 2. Load generation lists once
        const genRes = await fetch("https://pokeapi.co/api/v2/generation/");
        const genData = await genRes.json();

        for (let i = 1; i <= genData.count; i++) {
          const gRes = await fetch(`https://pokeapi.co/api/v2/generation/${i}`);
          const gData = await gRes.json();
          genMap.current[i] = gData.pokemon_species.map((p: any) => p.name);
        }

        initialized.current = true;
      }

      // 3. Filter Pokémon by selected gens
      const merged = gens.flatMap((g) => genMap.current[g] || []);
      setPokemonList(merged);
      setLoading(false);
    }

    loadAll();
  }, [gens]);

 

    

    return { pokemonList, loading };
}