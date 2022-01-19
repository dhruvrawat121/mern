import '../styles/globals.css'
import Layout from './components/layout'
import axios from "axios";
import BaseURL from '../lib/baseUrl';

// store from Redux
import {wrapper} from "../redux/store";
import {parseCookies} from "nookies";


function MyApp({ Component, pageProps }) {

return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  
  )
}



export default wrapper.withRedux(MyApp) ;
