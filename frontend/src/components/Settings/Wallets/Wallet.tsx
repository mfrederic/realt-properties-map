import { useState } from "react";
import { getUuid } from "../../../utils/crypto";
import DeleteIcon from '@mui/icons-material/Delete';
import { validate } from 'multicoin-address-validator';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { ActionIcon, Button, Grid, TextInput } from "@mantine/core";
import { useTranslation } from "react-i18next";

export function validateWallets(
  waletts: string[],
): string[] {
  const walletList: string[] = [];
  for (const wallet of waletts) {
    if (wallet.toLowerCase().startsWith('0x')) {
      walletList.push(wallet.toLowerCase());
    }
  }
  return walletList;
}

export function validateWallet(wallet: string): boolean {
  return validate(wallet, 'gno') || validate(wallet, 'eth');
}

export function Wallet({
  address = '',
  exists = false,
  className,
  onSave,
  onDelete,
}: {
  address?: string,
  exists?: boolean,
  className?: string,
  onSave: (address: string, oldAddress: string) => void,
  onDelete?: () => void,
  onVisibilityChange?: (visible: boolean) => void,
}) {
  const { t } = useTranslation('common');
  const [id, setId] = useState(`wallet-${getUuid()}`);
  const [valid, setValid] = useState(validateWallet(address));
  const [visible, setVisible] = useState(!exists);
  const [wallet, setWallet] = useState(address);
  const [hiddenWallet, setHiddenWallet] = useState(hideWalletAddress(address));
  const originalWallet = address;

  function hideWalletAddress(wallet: string) {
    if (!wallet || wallet.length < 8) {
      return wallet || '';
    }
    return `${wallet.slice(0, 4)}...${wallet.slice(-4)}`;
  }

  function validate(address: string): boolean {
    if (validateWallet(address)) {
      setValid(true);
      return true;
    }
    setValid(false);
    return false;
  }

  function onChange(address: string) {
    setWallet(address);
    setHiddenWallet(hideWalletAddress(address));
    validate(address);
  }

  function save() {
    validate(wallet);
    if (!valid) {
      return
    }
    onSave && onSave(wallet, originalWallet);
    if (!exists) {
      setValid(true);
      setWallet('');
      setHiddenWallet('');
      setId(`wallet-${getUuid()}`);
    }
  }

  function deleteWallet() {
    onDelete && onDelete();
  }

  return (
    <Grid className={className + "py-4"}>
      <Grid.Col span={12}>
        <TextInput
          id={id}
          label={exists ? t('wallet.wallet') : t('wallet.addWallet')}
          leftSection="xDai"
          leftSectionWidth={40}
          placeholder="0x"
          error={!valid && wallet.length > 0 ? t('wallet.invalidAddress') : false}
          onChange={(e) => onChange(e.currentTarget.value)}
          value={visible ? wallet : hiddenWallet}
          rightSection={
            exists && (
              <ActionIcon
                variant="subtle"
                onClick={() => setVisible(!visible)}>
                {visible ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
              </ActionIcon>
            )
          }
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <div className="flex gap-0.5 self-end">
          <Button
            fullWidth
            disabled={!valid}
            leftSection={
              exists
              ? <EditIcon fontSize="small" />
              : <AddIcon fontSize="small" />}
            onClick={save}>
            {exists
              ? t('actions.edit')
              : t('actions.add')}
          </Button>
          {
            exists && (
              <Button
                variant="outline"
                fullWidth
                color="red"
                leftSection={<DeleteIcon fontSize="small" />}
                onClick={deleteWallet}
                >
                {t('actions.delete')}
              </Button>
            )
          }
        </div>
      </Grid.Col>
    </Grid>
  )
}