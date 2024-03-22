import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export function Toast({
  visible,
  color,
  children,
  timeout,
  closable = true,
  onClose = () => { },
}: {
  visible: boolean;
  color: string;
  children: React.ReactNode;
  timeout?: number;
  closable?: boolean;
  onClose?: () => void;
}) {

  useEffect(() => {
    if (!timeout) {
      return;
    }
    setTimeout(() => {
      onClose();
    }, timeout);
  }, [timeout]);

  return (
    <>
      {
        visible &&
        <div>
          <div className={"text-white p-4 flex text-xl min-h-16 " + color}>
            <div className="flex-1 flex items-center">
              {children}
            </div>
            {
              closable &&
              <button className="px-6 sm:px-0 border sm:border-none rounded sm:rounded-none" onClick={onClose} >
                <XMarkIcon className="h-6 w-6 m-auto" />
              </button>
            }
          </div>
        </div>
      }
    </>
  );
}