import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/useInitStore";
import { selectWalletAddresses, selectedStartTooltip } from "../../store/settings/settingsSelector";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { Title } from "@mantine/core";

export function StartTooltip(props?: React.HTMLAttributes<HTMLDivElement> & {
  onClick?: () => void;
}) {
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common', { keyPrefix: 'extra' });
  
  const wallets = useAppSelector(selectWalletAddresses);
  const showStartTooltip = useAppSelector(selectedStartTooltip);
  
  return (
    wallets && wallets.length <= 0 && showStartTooltip ? (
      <div
        title={t('startTooltip')}
        className={`cursor-pointer w-full md:w-auto text-black bg-white p-2 md:p-4 md:rounded-lg md:min-h-14 text-center drop-shadow-xs md:drop-shadow-md mr-0 md:mr-6 ${props?.className}`} onClick={props?.onClick}>
        { !isSmallScreen && <div className="absolute bottom-[8px] right-[8px] -mr-4 bg-white rotate-45 h-10 w-10" /> }
        <Title order={5} className="animate-pulse font-semibold">{t('startTooltip')}</Title>
      </div>
    ) : null
  )
}