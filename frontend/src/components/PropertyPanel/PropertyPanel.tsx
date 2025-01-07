import { useEffect } from "react";
import { Drawer } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../hooks/useInitStore";
import { selectedMarker } from "../../store/marker/markerSelector";
import { clearSelected } from "../../store/marker/markerReducer";
import { setSelectedProperty } from "../../store/urlQuery/urlQuery.reducer";
import { PropertyPanelContent } from "./PropertyPanelContent";
import { PropertyPanelHeader } from "./PropertyPanelHeader";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { AppDrawer } from "../Common/AppDrawer";
import { Grid } from "../Common/Layouts/Grid";

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
        <AppDrawer
          opened={true}
          close={onClose}
          position="left"
          header={<PropertyPanelHeader property={property} onClose={onClose} />}
          noPadding={true}>
          <Grid>
            <Grid.Col span={12}>
              <PropertyPanelContent property={property} />
            </Grid.Col>
          </Grid>
        </AppDrawer>
      }
    </>
  )
}