import Link from "next/link"
import { parseCookies } from "nookies";

const Navbar=()=>{
    const {token} = parseCookies();
    let user = false;
    if(token){
        user = true
    }else{
        user = false
    }
    return(
        <div className="text-xl text-gray-100 bg-gray-800 min-w-full min-h-full">
            <div className="flex justify-between">
                <h1 className="m-2 p-3"><Link href="/"><a>Logo</a></Link></h1>
                <ul className="flex justify-around  md:min-w-max xl:w-6/12 m-2">
                    <li className="p-3"><Link href="/logIn"><a>Existing User? login</a></Link></li>
                    <li className="p-3"><Link href="/signUp"><a>New User? Sign Up</a></Link></li>
                    <li className="p-3"><Link href="/cart">Cart</Link></li>
                    <li className="p-3"><Link href="/newProduct">Create Product</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar;