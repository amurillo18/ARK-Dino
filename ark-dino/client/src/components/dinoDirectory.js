import React,{useState, useEffect} from 'react'
import Dino from './Dino.js'
import AddDinoForm from "./AddDinoForm"
import axios from 'axios'

function DinoDirectory (){
  const [dino, setDino] = useState([])
  

  function getDino(){
    axios.get("/dinos")
    .then(res => setDino(res.data))
    .catch(err => console.log(err))
  }
  
  function addDino(newDino){
    axios.post('/dinos', newDino)
    .then(res => {
      setDino(prevDino => [...prevDino, res.data])
    })
    .catch(err => console.log(err))
    getDino()
  }

  useEffect(() => {
    getDino()
  }, [])

  function deleteDino(dinoId){
    axios.delete(`/dinos/${dinoId}`)
    .then(res => {setDino(prevDino => prevDino.filter(dino => dino._id !== dinoId))})
    .catch(err => console.log(err))
    getDino()
  }

  function updateDino(updates, dinoId){
    axios.put(`/dinos/${dinoId}`, updates)
    .then(res => {setDino(prevDino => prevDino.map(dino => dino._id !== dinoId ? dino : res.data))
    }).catch(err => console.log(err))
  }

return(
    
<div>
    <div className='dino-container'>
      <AddDinoForm addDino={addDino}
      />
    {dino.map(dino => 
    <Dino 
    {...dino} 
    key={dino._id} 
    deleteDino={deleteDino}
    updateDino={updateDino}
    />)}
    </div>
  </div>
)
}

export default DinoDirectory