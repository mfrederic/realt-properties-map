import { useRef } from "react";
import { useSmallScreen } from "../../../hooks/useSmallScreen";
import { SearchBar } from "./SearchBar";

export function SearchBarWrapper(props: {
  isSearchOpen: boolean;
}) {
  const isSmallScreen = useSmallScreen();
  const searchBarRef = useRef<{ focus: () => void }>(null);

  if (props.isSearchOpen) {
    setTimeout(() => searchBarRef.current?.focus(), 0);
  }

  return (
    isSmallScreen
    ? props.isSearchOpen && <SearchBar ref={searchBarRef} />
    : <SearchBar ref={searchBarRef} />
  )
}