import '../styles/globals.css'
import Layout from './components/layout'
import axios from "axios";
import BaseURL from '../lib/baseUrl';

// store from Redux
import {wrapper} from "../redux/store";
import {parseCookies} from "nookies";
import {redirectUser} from "../utils/auth"
import { loadGetInitialProps } from 'next/dist/shared/lib/utils';


function MyApp({ Component, pageProps }) {

return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  
  )
}



export default wrapper.withRedux(MyApp) ;
