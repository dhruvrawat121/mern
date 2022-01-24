import '../styles/globals.css'
import Layout from './components/layout'
import {SessionProvider} from "next-auth/react"

// store from Redux
import {wrapper} from "../redux/store";


function MyApp({ Component, pageProps:{session,...pageProps}}) {

return (
     <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
   

  
  )
}



export default wrapper.withRedux(MyApp) ;
