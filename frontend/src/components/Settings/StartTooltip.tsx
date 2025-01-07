import { useTranslation } from "react-i18next";
import { Title } from "@mantine/core";
import { useAppSelector } from "../../hooks/useInitStore";
import { selectWalletAddresses, selectedStartTooltip } from "../../store/settings/settingsSelector";

export function StartTooltip(props?: React.HTMLAttributes<HTMLDivElement> & {
  onClick?: () => void;
}) {
  const { t } = useTranslation('common', { keyPrefix: 'extra' });
  
  const wallets = useAppSelector(selectWalletAddresses);
  const showStartTooltip = useAppSelector(selectedStartTooltip);
  
  return (
    wallets && wallets.length <= 0 && showStartTooltip ? (
      <div
        title={t('startTooltip')}
        className={`cursor-pointer w-full md:w-auto text-black bg-white p-2 max-h-11 md:rounded-lg text-center drop-shadow-xs md:drop-shadow-md mr-0 md:mr-6 ${props?.className}`} onClick={props?.onClick}>
        <div className="hidden md:block absolute top-[8px] right-[8px] -mr-4 bg-white rotate-45 h-7 w-7" />
        <Title order={5} className="animate-pulse font-semibold">{t('startTooltip')}</Title>
      </div>
    ) : null
  )
}