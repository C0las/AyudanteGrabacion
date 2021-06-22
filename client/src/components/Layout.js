import NavBar from './layout/NavBar'
import Header from './layout/Header'

function Layout({ children }) {
  return (
    <div className='flex flex-row h-screen'>
      <NavBar />

      <main className='flex flex-col bg-gray-700 w-full'>
        <Header />
        {children}
      </main>
    </div>
  )
}

export default Layout
