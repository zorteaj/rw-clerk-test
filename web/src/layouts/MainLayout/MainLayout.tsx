import { useSession } from '@clerk/clerk-react'

type MainLayoutProps = {
  children?: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { session } = useSession()

  const signOut = () => {
    session.end()
  }

  return (
    <>
      <button onClick={signOut}>Sign Out</button>
      {children}
    </>
  )
}

export default MainLayout
