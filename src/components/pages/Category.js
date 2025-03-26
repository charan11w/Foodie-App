import axios from "axios";
import { useState } from "react";

function Category() {
  const [name,setName] =useState({id:"1"})

  console.log("before ...",name)
  const callSai= async() => {
    const response=await axios.get('https://a2797b25-0398-4393-81a2-7a98acdd950b.mock.pstmn.io')
    setName(pre => ({
      ...pre,
      name:response.data.name
    }))
    console.log("after ...",name)
  }
  return (
    <div >
      <button onClick={callSai}>Click me</button>
      <div>{name.id}</div>
    </div>
   );
}


export default Category;