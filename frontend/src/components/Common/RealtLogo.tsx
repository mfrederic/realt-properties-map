import Env from "../../utils/env";

export function RealtLogo({
  className,
}: {
  className?: string;
}) {
  return (
    <img className={className} src={Env.PUBLIC_URL + "/RealT_Logo.png"} alt="RealT" />
  )
}