import Navbar from './NavBar'
import Meta from './Meta'
import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
     <div className="flex h-screen bg-blue-400">
     <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
      <Meta />
      <Navbar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
      </div>
      </div>
    </>
  )
}

export default Layout
