import { useEffect, useState } from "react";

function useParts(){
    const [parts, setParts] = useState([]);
    useEffect(()=>{
        fetch('https://rocky-reef-55202.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    return [parts,setParts]
}
export default useParts;