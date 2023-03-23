import React, { useState } from 'react'

export default function AddDinoForm(props){
    const initInputs = {Name: "", Diet: "", Temperament: "", Tameable: "", Rideable: "", Image: ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const { name, value} = e.target 
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addDino(inputs)
        setInputs(initInputs)
    }

    console.log(inputs)
    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="Name"
            value={inputs.Name}
            onChange={handleChange}
            placeholder="Name"/>

            <input
            type="text"
            name="Diet"
            value={inputs.Diet}
            onChange={handleChange}
            placeholder="Diet"/>

            <input
            type="text"
            name="Temperament"
            value={inputs.Temperament}
            onChange={handleChange}
            placeholder="Temperament"/>

            <select
              name="Rideable"
              value={inputs.Rideable}
              onChange={handleChange}
              placeholder="Rideable">
              <option value="">Rideable?</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
              </select>
              
    
           

            <select
            name="Tameable"
            value={inputs.Tameable}
            onChange={handleChange}
            placeholder="Tameable">
            <option value="">Tameable?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
            </select>

            <input
            name="Image"
            value={inputs.Image}
            onChange={handleChange}
            placeholder="Image"/>
            <button>Add Dino</button>
        </form>
    )
}