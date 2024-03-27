export function SettingsPanelSection({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="px-2 mb-1 py-2 -ml-2">
        <h3 className="text-base font-semibold leading-7">
          {icon}
          {label}
        </h3>
      </div>
      <div className="py-2">
        {children}
      </div>
    </>
  )
}
