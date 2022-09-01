import React, { useEffect, useState } from 'react'
import axios from 'axios';
const option= [
    {id:1, name: 'bed'},
    {id:2, name: 'oxygen'},
    {id:3, name: 'plasma'},
    {id:4, name: 'medicine'},]
function ProvideData() {

    const [error, setErr] = useState(false);
    const [submit, setsubmit] = useState(false);
    const [id, setId] = useState(0)
    const [cheked,setc]=useState([])
    const [data, setData] = useState({
        name: "",
        time: "",
        contact: "",
        location: "",
        cat:[],
        vrAt: "",
        msg: "",
    });
    const [cords , setCords]= useState([])
    useEffect(() => {
        navigator.geolocation.getCurrentPosition( function(position) {
          setCords([position.coords.longitude,position.coords.latitude])
          console.log(position.coords.longitude,position.coords.latitude,"pos")
          },function(error) {
            alert("KINDLY TURN ON LOCTAION  Error Code = " + error.code + " - " + error.message)
            console.error("Error Code = " + error.code + " - " + error.message);
          })
    },[])
    
    const { name, contact, location, cat, msg } = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] })
        // console.log(id, data, "wdhus")
    }
    const handleSubmit = async (e) => {
        let lat , long;
        e.preventDefault();
            //   navigator.geolocation.getCurrentPosition( function(position) {
            //     console.log("Latitude is :", position.coords.latitude);
            //     console.log("Longitude is :", position.coords.longitude);
            //     lat =position.coords.latitude;
            //     long=position.coords.longitude;
            //   },function(error) {
            //     alert("Error Code = " + error.code + " - " + error.message)
            //     console.error("Error Code = " + error.code + " - " + error.message);
            //   })
        console.log(cords,'anderqwals')
        for(let i=0; i<=cheked.length; i++){
            console.log(cheked[i])
        const datas ={
            name:data.name.toString(),
        // time: data.time,
        contact:data.contact.toString(),
        location: data.location.toString().toLowerCase(),
        cat: cheked[i],
        vrAt:data.vrAt,
        msg: data.msg.toString(),
       dos: new Date().toLocaleDateString(),
       coords:cords? cords :"no location",
           visited: "FALSE",


        }
        console.log(datas, "ff data")
        axios.post('https://con-45207-default-rtdb.firebaseio.com/contactForm.json',datas)
            .then(response => {
                console.log(response, "res");
                setData({ ...data, name: "",  contact: "", location: "", cat: "", msg: "", })
                setsubmit(true)
            })
            .catch(error => {
                console.log(error)
                setErr(true)
            })}
    }

    const handleSubmitBtn = (e) => {
        console.log("clicke")
        setId(id + 1);
        
    }
    const check = (e)=> {
        const value = e.target.value
    // console.log(e.target.value,"dsh")
    if(e.target.checked){
        let ar =[...cheked]
        ar.push(e.target.value)
        setc(ar)
    }
    else{let ar =[...cheked]
     const ab=   ar.filter((i)=>i!== value)
        setc(ab)

    }
    // console.log(cheked,"dsh")
    }

const onchange =(e)=>{
const {value , name} = e.target

}
    return (
        <div className="submit-details">
            <div className="submit-details__title">
                <span className="submit-details__heading"> You Can Also Help</span><br />
                <span className="submit-details__desc">By Providing Any Details of Bed,Oxygen, Medicine or Plasma In The Form  and our backend team will verify it  and the people in need can later use the resource.  </span>
            </div>
            <div className="submit-details__form">
                <div style={{width:'100%', padding:'0.7rem'}}> 
                    <h4> please allow <span style={{color:"white", background:'red', padding:"0.6rem"}}> Location </span>on browser so that the location of resource can be located at realtime on Map </h4>
                </div>
                <form className="submit-details__form-sec" onSubmit={handleSubmit} >
                    <div className="submit-details__row">
                        <div className="submit-details__input-sec">
                            <span className="submit-details__label">Full Name</span>
                            <input type="text" className="submit-details__input-field" placeholder="Your Full Name" name="name" value={name} onChange={handleChange} />
                        </div>
                        <div className="submit-details__input-sec">
                        <span className="submit-details__label">Catagories</span>
                            {/* <select name="catagories" id="catagories" className="submit-details__input-field" onChange={handleChange} >
                                <option disabled={true} defaultValue="select" >select</option>
                                <option value="oxygen">Oxygen</option>
                                <option value="bed">Bed</option>
                                <option value="plasma">Plasma</option>
                                <option value="medicine">medicine</option>
                            </select> */}
                            <div style={{display:"flex",border:"solid",color:"white",justifyContent:"space-evenly"}}>
                            {option.map(({id, name,},index) => {
                                return <div key={index}>
                                    <input name={name} type="checkbox" value={name} id={id} onChange={check}/>
                                    <label htmlFor={id}>{name}</label>
                                </div>;
                            })}
                            </div>
                            
                        </div>
                    </div>
                    <div className="submit-details__row">
                        <div className="submit-details__input-sec">
                        <span className="submit-details__label">Contact Number</span>
                            <input type="number" className="submit-details__input-field" required maxLength="10" placeholder="Enter Contact Number" name="contact" value={contact} onChange={handleChange} />
                        </div>
                        <div className="submit-details__input-sec">
                        <span className="submit-details__label">Location</span>
                            <input type="text" className="submit-details__input-field" required placeholder="Location" name="location" value={location} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="submit-details__row">
                    <span className="submit-details__label">Message</span>
                        <textarea className="submit-details__input-field" placeholder="Enter Additional Information Here In this Text Area" id="textAreaForm" name="msg" rows="10" cols="50" value={msg} onChange={handleChange}>          
                    </textarea>

                    </div>
                    <div className="submit-details__submit-sec">
                        <button type="submit" className="submit-details__submit-btn" onClick={handleSubmitBtn} style={{display:'flex',justifyContent:'center'}}>Submit</button>
                    </div>
                </form>
                {error ? <h1 className="toast">could not be submited try agin later  or call on 7780988972</h1> : null}
                {submit ? <h1 className="toast"> submitted successfully</h1> : ""}
            </div>
        </div>
    )
}

export default ProvideData
