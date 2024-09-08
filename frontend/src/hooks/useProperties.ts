import { useEffect, useState } from "react";
import { Property } from "../types/property";
import { getOwnedProperties } from "../services/tokens";
import { useAppSelector } from "./useInitStore";
import { selectRealtokensList } from "../store/realtokens/realtokensSelector";
import { selectWalletsList } from "../store/wallet/walletSelector";

export function useProperties() {
  const realToken = useAppSelector(selectRealtokensList);
  const wallets = useAppSelector(selectWalletsList);
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    setProperties(getOwnedProperties(realToken, wallets));
  }, [realToken, wallets]);

  return properties;
}