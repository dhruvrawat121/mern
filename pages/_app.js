import '../styles/globals.css'
import Layout from './components/layout'

// store from Redux
import {wrapper} from "../redux/store";


function MyApp({ Component, pageProps }) {

return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  
  )
}



export default wrapper.withRedux(MyApp) ;
