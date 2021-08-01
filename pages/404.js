import { useEffect } from "react"
import { useRouter } from "next/router"

const Notfound = () => {
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        }, 3000)
    },[])
    return(
        <div>
            <h1 className="not">hey you have been lost?</h1>
        </div>
    )
}
export default Notfound