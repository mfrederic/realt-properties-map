import { useEffect, useState, useRef, useImperativeHandle, forwardRef } from "react";
import { Autocomplete } from "@mantine/core";
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { useProperties } from "../../hooks/useProperties";
import { Property } from "../../types/property";
import { setSelected } from "../../store/marker/markerReducer";
import { setSelectedProperty } from "../../store/urlQuery/urlQuery.reducer";
import { filterProperties } from "../../utils/properties";
import { selectFiltering } from "../../store/filtering/filteringSelector";
import { useSmallScreen } from "../../hooks/useSmallScreen";

// Create the base component
const SearchBarComponent = forwardRef<{ focus: () => void }, {}>((_props, ref) => {
  const isSmallScreen = useSmallScreen();
  const dispatch = useAppDispatch();
  const {
    displayAll,
    displayGnosis,
    displayRmm,
  } = useAppSelector(selectFiltering);
  const properties = useProperties();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setFilteredProperties(filterProperties(properties, displayAll, displayGnosis, displayRmm));
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

  const focus = () => {
    searchRef.current?.focus();
  };

  useImperativeHandle(ref, () => ({
    focus,
  }));

  return <Autocomplete
    ref={searchRef}
    leftSection={
      isSmallScreen && <SearchIcon />
    }
    value={searchValue}
    className="mb-0 mr-0 px-2 w-full md:mb-2 md:mr-2 md:px-auto md:w-auto"
    placeholder="Search"
    size="md"
    data={filteredProperties.map((p) => p.fullName)}
    limit={20}
    maxDropdownHeight={!isSmallScreen ? 250 : '50vh'}
    comboboxProps={{
      size: !isSmallScreen ? 'md' : 'lg',
      dropdownPadding: !isSmallScreen ? 4 : 0,
      width: !isSmallScreen ? 'max-content' : '90vw',
    }}
    radius={!isSmallScreen ? 'md' : 'xs'}
    variant={!isSmallScreen ? 'default' : 'unstyled'}
    onChange={onSearch} />
});

// Export the component
export const SearchBar = SearchBarComponent;