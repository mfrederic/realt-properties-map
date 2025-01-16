import { Kbd } from "@mantine/core";

export function Kbds(props: {
  hotkey: string;
}) {
  return (
    <div className="hidden md:flex flex-row gap-1 items-center justify-center opacity-50">
      {
        props.hotkey.split('+').map((key, index) => (
          <span key={index}>
            <Kbd>{key}</Kbd>
            {index < props.hotkey.split('+').length - 1 && <span> + </span>}
          </span>
        ))
      }
    </div>
  )
}