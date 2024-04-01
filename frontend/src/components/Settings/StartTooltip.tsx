import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/useInitStore";
import { selectWalletAddresses, selectedStartTooltip } from "../../store/settings/settingsSelector";

export function StartTooltip() {
  const { t } = useTranslation('common', { keyPrefix: 'extra' });
  const wallets = useAppSelector(selectWalletAddresses);
  const showStartTooltip = useAppSelector(selectedStartTooltip);
  
  return (
    wallets && wallets.length <= 0 && showStartTooltip ? (
      <div className="text-black bg-white p-4 rounded-lg min-h-14 text-center drop-shadow-md mr-6">
        <div className="absolute bottom-[8px] right-[8px] -mr-4 bg-white rotate-45 h-10 w-10 " />
        <h3 className="animate-pulse font-semibold">{t('startTooltip')}</h3>
      </div>
    ) : null
  )
}