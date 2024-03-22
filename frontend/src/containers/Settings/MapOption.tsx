export function MapOption({
  id,
  label,
  checked,
  disabled = false,
  onChange,
}: {
  id: string,
  label: string,
  checked: boolean,
  disabled?: boolean,
  onChange: (event: boolean) => void,
}) {
  return (
    <div className="px-6 py-4 grid grid-cols-12">
      <dt className="text-base font-medium leading-6 text-gray-900 col-span-5">
        <label
          htmlFor={id}
          title={label}>{label}</label>
      </dt>
      <dd className="text-base mt-1 text-right leading-6 text-gray-700 col-span-7 mt-0">
        <input
          name={id}
          id={id}
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600"
          checked={checked}
          disabled={disabled}
          alt={label}
          title={`Toggle ${label}`}
          onChange={() => onChange(!checked)} />
      </dd>
    </div>
  )
}