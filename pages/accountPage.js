import { parseCookies } from "nookies";


const AccountPage = ()=>{
    return(
        <div>
            <h1>Account Page</h1>
        </div>
    )
}

export async function getServerSideProps(ctx){
    const {token} = parseCookies();
    if(!token){
        const {res} = ctx;
        res.writeHead(302,{Location:"/login"})
        res.end()
    }

    return{
        props:{}
    }
}

export default AccountPage;