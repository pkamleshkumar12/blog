import '../styles/globals.css'
import Header from '../components/Header'
import Navigationbar from '../components/NavigationBar'
function MyApp({ Component, pageProps }) {
  return (
    <>

      <Navigationbar />
      <Header/>

      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  
  )
}

export default MyApp
