import { Drawer, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { RealtLogo } from "../Common/RealtLogo";
import { AffixBtn } from "../Common/AffixBtn/AffixBtn";
import { Button } from "../Common/Inputs/Button";
import { Grid } from "../Common/Layouts/Grid";

export function SettingsPanelHeader({
  children,
  close,
}: {
  children: React.ReactNode;
  close: () => void;
}) {
  const { t } = useTranslation('common');

  return (
    <Grid align="center">
      <Grid.Col span={12} className="mb-4 flex text-center items-center justify-center">
        <RealtLogo className="w-1/5" />
        <div className="inline-block flex flex-col">
          <Title order={3} className="font-bold text-[1.375rem]">RealT Properties Map</Title>
          <p className="text-xs">
            {t('extra.disclaimer')}
          </p>
        </div>
      </Grid.Col>
      <Grid.Col span={8} className="text-base font-semibold leading-6">
        <Drawer.Title className="col-span-6 items-center flex">
          { children }
        </Drawer.Title>
      </Grid.Col>
      <Grid.Col span={4} className="text-right">
        <AffixBtn defaultToPlain>
          <Button
            onClick={close}
            rightSection={
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            }>
            {t('actions.closePanel')}
          </Button>
        </AffixBtn>
      </Grid.Col>
    </Grid>
  )
}