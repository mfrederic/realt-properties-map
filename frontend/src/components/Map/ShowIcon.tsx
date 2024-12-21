import { useAppSelector } from "../../hooks/useInitStore";
import { selectShowIcon } from "../../store/mapOptions/mapOptionsSelector";

export function ShowIcon() {
  const showIcon = useAppSelector(selectShowIcon);

  if (showIcon) {
    return null;
  }

  return (
    <style>
      {`
        .pin-icon {
          display: none;
        }
      `}
    </style>
  )
}