import { useEffect, useState } from "react";

export default function useGenCount() {
    const [genCount, setGenCount] = useState<number>(0);
    const [loadingGen, setGenLoading] = useState(true);
    useEffect(() => {
        async function load(){
            const res = await fetch("https://pokeapi.co/api/v2/generation/");
            const data = await res.json();
            setGenCount(data.count)
            setGenLoading(false);

        }
        load();
    }, []);
    return { genCount, loadingGen };
}