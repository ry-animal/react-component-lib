import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const getMatches = (data: string): boolean =>
    // Prevents SSR issues
    window?.matchMedia(data).matches || false;
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    const handleChange = () => setMatches(getMatches(query));

    handleChange();

    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}

export default useMediaQuery;
