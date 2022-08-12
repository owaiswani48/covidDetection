import axios from 'axios'
import React, { useEffect, useState} from 'react'

function BedPage() {
    const [bed ,setbed] = useState([])
    const [sea ,setSearch] = useState('')
    const [loading , setLoading] = useState(true)
    const [fil , setFil] = useState(false)
    const [ff , setff] = useState([])

useEffect(()=>{
    axios.get('https://con-45207-default-rtdb.firebaseio.com/contactForm.json')
    .then((response) => {
        
        const data= response.data
        // console.log(data.data,'data')
          let arr =[]
    if (data) {for (const key of Object.values(data)) {
           arr.push(key)
         console.log(key,"vakk");
        }}
        console.log(arr,'arr')
        setbed(arr)
    })
    .finally(() => {
        setLoading(false);
    });
    
},[]);
const filteredVisited= bed.filter((i)=>i.visited==="FALSE");
console.log("fi", filteredVisited)
 let bedFilter  = filteredVisited.filter((i)=>i.cat==="bed")
   console.log("ox",bedFilter)
   const search=(e)=>{
    setSearch(e.target.value)
   }
const submit =(e)=>{
    const val =e.target.value
e.preventDefault()

const ab =bedFilter.filter((i)=>i.location === sea)
console.log(ab,'jk')
setff(ab)
setFil(true)
}
    return (
        <div className="oxygen">
        <div>
       { <form onSubmit={submit}>

            <input placeholder='search by location name '  value ={sea} onChange={search}/>
            <input type='submit' className='btn'/>
        </form>}
        <button onClick={()=>setFil(!fil)}>clear filter</button>
        </div>
        {loading && <h1>loading.....</h1>}
            {bedFilter.length>0 ? 
                <>
                {!fil ? bedFilter.map((item)=>
                    <div  key={item.row_id} className="data-card__card">
                    <div className="data-card__header">
                    <h1>{item.catagories}</h1>
                    </div>
                    <div className="data-card__body">
                    <div className="data-card__detail">
                        <div className="data-card__text"><span className="data-card__desc">Name : <h4>{item.name}</h4></span></div>
                        <div className="data-card__text"><span className="data-card__desc">location : <h4>{item.location}</h4></span></div>
                        <div className="data-card__text"><span className="data-card__desc">contact:<h4> {item.contact}</h4></span></div>
                        <div className="data-card__text"><span className="data-card__desc">date of submission: <h4>{item.dos}</h4></span></div>

                    <div className="data-card__message-box">
                        <p className="data-card__msg">
                        {item.msg}
                        </p>
                    </div>
                    </div>
                    </div>
                    </div>
                    ):
                    (ff.map((item)=>
                    <div  key={item.row_id} className="data-card__card">
                    <div className="data-card__header">
                    <h1>{item.catagories}</h1>
                    </div>
                    <div className="data-card__body">
                    <div className="data-card__detail">
                        <div className="data-card__text"><span className="data-card__desc">Name : <h4>{item.name}</h4></span></div>
                        <div className="data-card__text"><span className="data-card__desc">location : <h4>{item.location}</h4></span></div>
                        <div className="data-card__text"><span className="data-card__desc">contact:<h4> {item.contact}</h4></span></div>
                        <div className="data-card__text"><span className="data-card__desc">date of submission: <h4>{item.dos}</h4></span></div>

                    <div className="data-card__message-box">
                        <p className="data-card__msg">
                        {item.msg}
                        </p>
                    </div>
                    </div>
                    </div>
                    </div>))
                    }
                   </>
                 : <div>no data</div>}
        </div>
    ) 
}

export default BedPage
