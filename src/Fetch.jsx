import axios from "axios"
import React from "react"
import { useEffect } from "react"

function Fetcher(){
   const [data, setData] = React.useState([])
   const [isLoading, setisLoading] = React.useState(true)
   
   useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
         // console.log(response.data)
         setData(response.data)
         setisLoading(false);
      })
      .catch(error => {
         console.error(error);
         setisLoading(false)
      })
   },[])

   if(isLoading){
      return <div>Loading...</div>
   }

   return(
      <div className="container">
         {data.map((item) => (
            <div key={item.id} className="card">
               <h2>{item.title}</h2>
               <p>{item.body}</p>
            </div>
         ))}
           
      </div>
   )
   }


export default Fetcher