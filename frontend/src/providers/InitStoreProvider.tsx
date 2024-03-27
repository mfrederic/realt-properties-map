import useInitStore from '../hooks/useInitStore'

export default function InitStoreProvider({ children }: {
  children: React.ReactNode
}) {
  useInitStore();

  return (
    <>{children}</>
  )
}