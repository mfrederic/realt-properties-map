import logo from "../../../public/RealT_Logo.png";

export function RealtLogo({
  className,
}: {
  className?: string;
}) {
  return (
    <img className={className} src={logo} alt="RealT" />
  )
}