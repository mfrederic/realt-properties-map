export function Setting({
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
      <div className="px-6 mb-1 pt-1 -ml-2 border-t border-gray-100">
        <h3 className="text-base font-semibold leading-7 text-gray-900 ">
          {icon}
          {label}
        </h3>
      </div>
      <div className="border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          {children}
        </dl>
      </div>
    </>
  )
}
