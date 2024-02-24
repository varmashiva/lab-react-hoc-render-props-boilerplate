import { useState } from "react";
function Hoc(Component){
 return function Hoc() {
    const [count,setcount]=useState(0)
    const helper=()=>{
        setcount(count+1)
    }
    return <Component text={count} click={helper}/>
} 
}
export default Hoc;