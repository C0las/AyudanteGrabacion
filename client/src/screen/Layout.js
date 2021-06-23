import NavBar from '../components/layout/NavBar'
import Header from '../components/layout/Header'

function Layout({ children }) {
  return (
    <div className='flex flex-row h-screen'>
      <NavBar />

      <main className='flex flex-col bg-primary-light w-full'>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default Layout
