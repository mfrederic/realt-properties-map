import { useEffect } from "react";
import { Divider, Drawer, Flex, Grid } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { selectedMarker } from "../../store/marker/markerSelector";
import { clearSelected } from "../../store/marker/markerReducer";
import { setSelectedProperty } from "../../store/urlQuery/urlQuery.reducer";
import { PropertyPanelActions } from "./PropertyPanelActions";
import { PropertyCarousel } from "./PropertyCarousel";
import { PropertyPanelContent } from "./PropertyPanelContent";

export function PropertyPanel() {
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
        <Drawer.Root opened={true} onClose={onClose} position="left">
          <Drawer.Content>
      <Drawer.Header className="!p-0 !mb-4">
        <Grid>
          <PropertyCarousel imageLink={property.imageLink} fullName={property.fullName} />
          <Grid.Col span={12}>
            <Drawer.Title className="!mb-4">
              <Flex align="start" direction="column" className="px-4">
                <strong>{property.fullName}</strong>
                {property.neighborhood && <small>{property.neighborhood}</small>}
              </Flex>
            </Drawer.Title>
            <Drawer.Title>
              <PropertyPanelActions
                marketplaceLink={property.marketplaceLink}
                address={property.address}
                onClose={onClose} />
            </Drawer.Title>
          </Grid.Col>
          <Grid.Col span={12}>
            <Divider />
          </Grid.Col>
        </Grid>
      </Drawer.Header>
      <Drawer.Body className="!p-0 mb-20 sm:mb-0">
        <PropertyPanelContent property={property} />
      </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      }
    </>
  )
}