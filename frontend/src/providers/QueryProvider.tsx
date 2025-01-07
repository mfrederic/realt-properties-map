import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../hooks/useInitStore";
import { selectedLatLng, selectedProperty, selectedZoom } from "../store/urlQuery/urlQuery.selector";
import { Maybe } from "../types/global";

function handleSearchParam(
  searchParams: URLSearchParams,
  key: string,
  value: Maybe<string>,
) {
  if (value) {
    searchParams.set(key, value);
  } else {
    searchParams.delete(key);
  }
  return searchParams;
}

export function QueryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  let [_, setSearchParams] = useSearchParams();
  const center = useAppSelector(selectedLatLng);
  const zoom = useAppSelector(selectedZoom);
  const selected = useAppSelector(selectedProperty);

  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    handleSearchParam(newSearchParams, "ll", center ? center.join('x') : null);
    handleSearchParam(newSearchParams, "z", zoom ? zoom.toString() : null);
    handleSearchParam(newSearchParams, "s", selected);
    setSearchParams(newSearchParams);
  }, [center, zoom, selected, setSearchParams]);

  return (
    <>{children}</>
  )
}