import axios from "axios";

function Cart() {

  const callSai= async() => {
    const response=await axios.get('https://a2797b25-0398-4393-81a2-7a98acdd950b.mock.pstmn.io')
    console.log(response)
  }
  return (
    <div >
      <button onClick={callSai}>Click me</button>
    </div>
   );
}

export default Cart;
