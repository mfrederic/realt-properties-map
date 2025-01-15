import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Space, Text } from "@mantine/core";
import WalletIcon from '@mui/icons-material/Wallet';
import { SettingsPanelSection } from "../SettingsPanelSection";
import { useAppDispatch, useAppSelector } from "../../../hooks/useInitStore";
import { Maybe } from "../../../types/global";
import { selectWalletAddresses } from "../../../store/settings/settingsSelector";
import { addAddress, removeAddress, updateAddress } from "../../../store/settings/settingsReducer";
import { Wallet, validateWallet } from "./Wallet";
import { analyticsEvent } from "../../../services/analytics";
import { setDisplayAll } from "../../../store/filtering/filteringReducer";
import { Button } from "../../Common/Inputs/Button";
import { Grid } from "../../Common/Layouts/Grid";

export function Wallets() {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const wallets = useAppSelector(selectWalletAddresses);
  const [deleteState, setDeleteState] = useState<Maybe<string>>(null);

  const onSave = useCallback((address: string, oldAddress?: string) => {
    analyticsEvent({
      category: 'Wallets',
      action: 'Save Wallet',
    });
    if (!validateWallet(address)) {
      return;
    }
    if (oldAddress) {
      dispatch(updateAddress({
        oldAddress,
        newAddress: address,
      }));
      return;
    }
    dispatch(addAddress(address));
    if (wallets.length === 0) {
      dispatch(setDisplayAll(false));
    }
  }, [dispatch]);

  const onDelete = useCallback((address: string) => {
    setDeleteState(address);
  }, [setDeleteState]);

  const onRemoveWallet = useCallback(() => {
    if (!deleteState) {
      return;
    }
    analyticsEvent({
      category: 'Wallets',
      action: 'Delete Wallet',
    });
    setDeleteState(null);
    dispatch(removeAddress(deleteState!));
    if (wallets.length === 1) {
      dispatch(setDisplayAll(true));
    }
  }, [dispatch, deleteState]);


  const onDeleteStateChange = useCallback((wallet?: string) => {
    setDeleteState(wallet ?? null);
  }, [setDeleteState]);

  return (
    <SettingsPanelSection icon={<WalletIcon className="inline-block mr-2" />} label={t('wallet.wallets')}>
      <Grid>

        {
          wallets.length !== 0 &&
          <>
            {
              wallets.map((wallet) => (
                <Grid.Col span={12} key={wallet}>
                  <Wallet
                    address={wallet}
                    exists
                    onSave={onSave}
                    onDelete={onDelete} />
                  <Space h="lg" />
                </Grid.Col>
              ))
            }
          </>
        }
        <Grid.Col span={12}>
          <Wallet
            onSave={onSave} />
          <Space h="lg" />
        </Grid.Col>
      </Grid>
      <Modal.Root
        opened={!!deleteState}
        onClose={onDeleteStateChange}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>
              <strong>{t('wallet.deleteDialog.title')}</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Text>{t('wallet.deleteDialog.message')}</Text>
            <Grid>
              <Grid.Col span={6}>
                <Button
                  fullWidth
                  color="gray"
                  onClick={onDeleteStateChange}>
                  {t('actions.cancel')}
                </Button>
              </Grid.Col>
              <Grid.Col span={6}>
                <Button
                  fullWidth
                  color="red"
                  onClick={onRemoveWallet}>
                  {t('actions.delete')}
                </Button>
              </Grid.Col>
            </Grid>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </SettingsPanelSection>
  )
}