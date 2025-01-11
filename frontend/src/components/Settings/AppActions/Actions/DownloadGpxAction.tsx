import { useTranslation } from "react-i18next";
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import { AppActionsButton } from "../AppActionsButton";
import { downloadGpxFile } from "../../../../services/gpx";
import { useProperties } from '../../../../hooks/useProperties';
import { filterProperties } from '../../../../utils/properties';
import { Property } from '../../../../types/property';
import { PropertyOccupations, PropertyYields, RentStart } from '../../../../store/filtering/filteringReducer';
import { selectFiltering, selectPropertyOccupations, selectPropertyTypes, selectPropertyYields, selectRentStart } from '../../../../store/filtering/filteringSelector';
import { useAppSelector } from '../../../../hooks/useInitStore';
import { selectedProperty } from '../../../../store/urlQuery/urlQuery.selector';
import { Maybe } from '../../../../types/global';
import { Button } from "../../../Common/Inputs/Button";

function getFilteredProperties(
  properties: Property[],
  displayAll: boolean,
  displayGnosis: boolean,
  displayRmm: boolean,
  selectedUrlParam: Maybe<string>,
  propertyTypes: string[],
  propertyOccupations: PropertyOccupations,
  propertyYields: PropertyYields,
  rentStart: RentStart | undefined,
) {
  const filtered = filterProperties(
    properties,
    displayAll,
    displayGnosis, 
    displayRmm,
    selectedUrlParam,
    propertyTypes,
    propertyOccupations,
    propertyYields,
    rentStart,
  );
  return filtered;
}

export function DownloadGpxAction() {
  const { t } = useTranslation('common');
  const properties = useProperties();
  
  const {
    displayAll,
    displayGnosis,
    displayRmm,
  } = useAppSelector(selectFiltering);
  const selectedUrlParam = useAppSelector(selectedProperty);
  const propertyTypes = useAppSelector(selectPropertyTypes);
  const propertyOccupations = useAppSelector(selectPropertyOccupations);
  const propertyYields = useAppSelector(selectPropertyYields);
  const rentStart = useAppSelector(selectRentStart);

  function downloadGpx() {
    const filtered = getFilteredProperties(properties, displayAll, displayGnosis, displayRmm, selectedUrlParam, propertyTypes, propertyOccupations, propertyYields, rentStart);
    downloadGpxFile(filtered);
  }

  return (
    <Button
      className="mt-8"
      fullWidth
      variant="default"
      onClick={downloadGpx}
      color="gray"
      leftSection={<ShareLocationIcon fontSize="medium" />}
    >
      {t('settings.downloadGpx')}
    </Button>
  )
}