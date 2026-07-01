import { useState } from "react";


function BMIForm(){
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[height,setHeight]=useState("");
    const[weight,setWeight]=useState("");

    return(<div> 
       <form onSubmit={handleSubmit}>
        <label htmlFor="name" >Name</label>
        <input type="text" name="name" id="name" 
        value={name}        
        onChange={(event)=>{
            setName(event.target.value)
        }}/>
        
        <label htmlFor="age">Age</label>
        <input type="number" name="age" id="age" 
        value={age}
        onChange={
            (event)=>{
                setAge(event.target.value)
            }
        }
        />
        <label htmlFor="height">Height</label>
        <input type="number" name="height" id="height" 
        value={height}
        onChange={(event)=>{
            setHeight(event.target.value)
        }}
        />
        <label htmlFor="weight">Weight</label>
        <input type="number" name="weight" id="weight" 
        value={weight}
        onChange={(event)=>{
            setWeight(event.target.value)
        }}
        />
        <button type="submit">Get BMI </button>
       </form>
    </div>)
}
export default BMIForm;