import { SlGhost } from "react-icons/sl";
import { GiHeartInside } from "react-icons/gi";
import { RiCake2Fill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { MdHeight } from "react-icons/md";
import { useEffect, useState } from "react";



export default function CharacterPopUp(props){

  const[edit, setEdit] = useState(false)
  const[editName, setEditName] = useState("") 
  const[editHeight, setEditHeight] = useState(null)

async function destroyCharacter(id) {
  console.log("destroy has been called");
  console.log(id);
  await fetch(`https://imaginerium-qpii.onrender.com/characters/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  })
};

async function editCharacter(id,key,value) {
  console.log("edit has been called");
  console.log(id);
  let body = {}
  body.user_id = 1
  body[key] = value
  await fetch(`https://imaginerium-qpii.onrender.com/characters/${id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  })
}



return (
  
  <div className="pop-up">
  {console.log(props.char_name)}
  {console.log(props.character_id)}
        <div className="pop-up-left">
        <img className="pop-up-image" src="https://deepgrouplondon.com/wp-content/uploads/2019/06/person-placeholder-5.png" />
        {edit?(<div><input onChange={(e)=>setEditName(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id,'char_name',editName)} className="edit-button">Done</button></div>):(<div><h3>{props.char_name}</h3><button onClick={()=>setEdit(!edit)} className="edit-button">edit</button></div>)}
          <button className="delete-button" onClick={()=> destroyCharacter(props.character_id)}>delete {props.char_name}</button>
        </div>
        <div className="pop-up-right">
            <h1>{props.char_name}</h1>
            <p className="category">Height in feet: {props.char_height}<button className="edit-button">edit</button></p>
            {/* {edit?(<div><input onChange={(e)=>setEditName(e.target.value)}></input><button onClick={()=>editCharacter(props.character_id, editName)} className="edit-button">Done</button></div>):(<div><h3>{props.char_name}</h3><button onClick={()=>setEdit(!edit)} className="edit-button">edit</button></div>)} */}
            <p className="category">Age in years: {props.char_age}<button className="edit-button">edit</button></p>
            {props.char_alive ? (
              <p className="category">
                Status: <GiHeartInside /> Alive!
              </p>
            ) : (
              <p className="category">
                Status: <SlGhost /> Dead
              </p>
            )}<button className="edit-button">edit</button>
           </div>
          </div>
         
)



}