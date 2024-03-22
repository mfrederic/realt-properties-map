import { useState } from "react";
import { Toast } from "../components/Toast";

export function Toasts({
  tokens,
  properties,
  success,
  error,
}: {
  tokens: boolean;
  properties: boolean;
  success: boolean;
  error: boolean;
}) {
  const [successVisible, setSuccessVisible] = useState<boolean>(success);
  const [errorVisible, setErrorVisible] = useState<boolean>(error);

  return (
    <>
      {
        (tokens || properties || successVisible || errorVisible) &&
        <div className="fixed shadow-lg bottom-0 right-0 left-0 z-[1001] divide-y divide-white overflow-y-scroll max-h-96 sm:w-1/2 m-auto sm:rounded-t-md border-t-8 border-slate-700">
          <Toast visible={tokens || properties} color="bg-sky-400" closable={false}>
            Loading wallets and properties...
          </Toast>
          <Toast visible={success} color="bg-green-500" timeout={5000} onClose={() => setSuccessVisible(false)}>
            Wallets and properties loaded successfully.
          </Toast>
          <Toast visible={error} color="bg-red-500" onClose={() => setErrorVisible(false)}>
            Error while loading properties. Service could be unavailable.<br />
            The application will not be usable.<br />
            Please try again later.
          </Toast>
        </div>
      }
    </>
  )
}