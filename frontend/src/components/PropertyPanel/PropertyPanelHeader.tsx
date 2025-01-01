import { Drawer, Flex, Divider } from '@mantine/core';
import { Grid } from "../Common/Layouts/Grid";
import { PropertyPanelActions } from './PropertyPanelActions';
import { Property } from '../../types/property';
import { PropertyCarousel } from './PropertyCarousel';

export function PropertyPanelHeader(props: {
  property: Property,
  onClose: () => void
}) {
  const { property, onClose } = props;

  return (
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
            address={property.caseSensitiveAddress}
            coordinates={property.coordinates}
            onClose={onClose} />
        </Drawer.Title>
      </Grid.Col>
      <Grid.Col span={12}>
        <Divider />
      </Grid.Col>
    </Grid>
  )
}