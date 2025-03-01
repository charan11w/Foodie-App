import { useState } from "react";

 function Restaurants() {

    const [activeFood,setActiveFood] = useState(0)
    const showTypes=[{
      type:'all-btn',
      name:'All'
    },
    {
      type:'veg-btn',
      name:'Veg'
    },
    {
      type:'non-btn',
      name:'Non-Veg'
    }
  ];
    return (
     <div className="resPage">
      <div className="container mtl">
      <div className="resCont">
        <h3>Popular Restaurants</h3>
        <div className="store-type">
          {showTypes.map((type,index) => {
            return(
              <button 
              key={index}
              className={`${type.type} ${ activeFood ? 'activeFood':''}`}
              >{type.name}</button>
            )
          })}
        </div>
      </div>
      </div>
     </div>
    )
 }

 export default Restaurants;