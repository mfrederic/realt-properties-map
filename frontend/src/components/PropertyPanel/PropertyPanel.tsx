import { useEffect } from "react";
import { Drawer } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { selectedMarker } from "../../store/marker/markerSelector";
import { clearSelected } from "../../store/marker/markerReducer";
import { setSelectedProperty } from "../../store/urlQuery/urlQuery.reducer";
import { PropertyPanelContent } from "./PropertyPanelContent";
import { PropertyPanelHeader } from "./PropertyPanelHeader";
import { useSmallScreen } from "../../hooks/useSmallScreen";

export function PropertyPanel() {
  const isSmallScreen = useSmallScreen();
  const dispatch = useAppDispatch();
  const property = useAppSelector(selectedMarker);

  useEffect(() => {
    if (property) {
      return;
    }
    document
      .querySelectorAll('.marker-svg.selected')
      .forEach((el) => el.classList.remove('selected'));
  }, [property]);

  function onClose() {
    dispatch(setSelectedProperty(null));
    dispatch(clearSelected());
  }

  return (
    <>
      {
  property &&
  <Drawer.Root opened={true} onClose={onClose} position="left" size={isSmallScreen ? '100%' : 'md'}>
    <Drawer.Content>
      {
        !isSmallScreen && <Drawer.Header className="!p-0 !mb-4">
          <PropertyPanelHeader property={property} onClose={onClose} />
        </Drawer.Header>
      }
      <Drawer.Body className="!p-0 mb-20 sm:mb-0">
        {
          isSmallScreen && <PropertyPanelHeader property={property} onClose={onClose} />
        }
        <PropertyPanelContent property={property} />
      </Drawer.Body>
    </Drawer.Content>
  </Drawer.Root>
      }
    </>
  )
}