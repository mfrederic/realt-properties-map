import { Autocomplete } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { useEffect, useState } from "react";
import { useProperties } from "../../hooks/useProperties";
import { Property } from "../../types/property";
import { setSelected } from "../../store/marker/markerReducer";
import { setSelectedProperty } from "../../store/urlQuery/urlQuery.reducer";
import { filterProperties } from "../../utils/properties";
import { useViewportSize } from "@mantine/hooks";
import { selectFiltering } from "../../store/filtering/filteringSelector";

export function SearchBar() {
  const dispatch = useAppDispatch();
  const { width } = useViewportSize();
  const {
    displayAll,
    displayGnosis,
    displayRmm,
  } = useAppSelector(selectFiltering);
  const properties = useProperties();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    setFilteredProperties(filterProperties(properties, displayAll, displayGnosis, displayRmm, null));
  }, [properties, displayAll, displayGnosis, displayRmm]);

  let timeout: NodeJS.Timeout;
  function onSearch(value: string) {
    clearTimeout(timeout);
    setSearchValue(value);
    timeout = setTimeout(() => {
      const property = filteredProperties.find((p) => p.fullName === value);
      if (property) {
        dispatch(setSelected({
          property: property,
          latlng: {
            lat: property.coordinate.lat,
            lng: property.coordinate.lng,
          },
        }));
        dispatch(setSelectedProperty(property.address));
        setSearchValue('');
      }
    }, 300);
  };

  return <Autocomplete
    value={searchValue}
    className="mb-2 mr-2"
    placeholder="Search"
    size="md"
    data={filteredProperties.map((p) => p.fullName)}
    limit={20}
    maxDropdownHeight={width > 768 ? 250 : '50vh'}
    comboboxProps={{
      size: width > 768 ? 'md' : 'lg',
      dropdownPadding: width > 768 ? 4 : 0,
      width: width > 768 ? 'max-content' : '90vw',
    }}
    onChange={onSearch} />
}