import React,{useState} from 'react'
import AddDinoForm from './AddDinoForm'

export default function Dino(props){
    const {Name, Image, Diet, Tameable, Rideable, Temperament} = props

    const [editToggle, setEditToggle] = useState(false)

    function toggle(){
        setEditToggle(false)
    }
    return(
    <div>
        {!editToggle &&
        <>
        <h1>Name: {Name}</h1>
        <img src={Image} alt="dinoPic" width="50px" height="50px"/>
        <p> Diet: {Diet}</p>
        <p> Tameable: {Tameable ? "yes" : "no" }</p>
         <p> Rideable: {Rideable ? "yes" : "no"}</p>
        <p> Temperament: {Temperament}</p> 
        <button className='deleteBtn' onClick={() => props.deleteDino(props._id)}>Delete</button>
        <button onClick={() => setEditToggle(true)}>Edit</button>
        </>}
        {editToggle &&
        <>
        <AddDinoForm
        Name={Name}
        Image={Image}
        Diet={Diet}
        Tameable={Tameable}
        Rideable={Rideable}
        Temperament={Temperament}
        _id={props._id}
        btnTxt="Submit Edit"
        submit={props.updateDino}
        toggle={toggle}
        />
        <button onClick={() => setEditToggle(false)}>Close</button>
        </>
        }
    </div>
    )
}