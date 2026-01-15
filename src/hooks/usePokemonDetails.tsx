import { useEffect, useRef, useState } from "react";

export default function usePokemonDetails(name: string | null){

    const cache = useRef<Record<string, any>>({});
    const [details, setDetails] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!name) return;
    
            async function load() {
      // If cached, return instantly
      if (cache.current[name!]) {
        setDetails(cache.current[name!]);
        return;
      }

      setLoading(true);

      // Fetch gameplay data
      const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const pokeData = await pokeRes.json();

      // Fetch species data (for Pokédex entries)
      const speciesRes = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${name}`
      );
      const speciesData = await speciesRes.json();

      const info = {
        name,
        sprite: pokeData.sprites.other["official-artwork"].front_default,
        types: pokeData.types.map((t: any) => t.type.name),
        stats: pokeData.stats.map((s: any) => ({
          name: s.stat.name,
          value: s.base_stat,
        })),
        abilities: pokeData.abilities.map((a: any) => a.ability.name),
        pokedexEntry:
          speciesData.flavor_text_entries.find(
            (e: any) => e.language.name === "en"
          )?.flavor_text ?? "No entry available",
      };

      cache.current[name!] = info;
      setDetails(info);
      setLoading(false);
    }

    load();
  }, [name]);

    return { details, loading };
}