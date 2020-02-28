import React from 'react';
import { useState } from 'react';
import * as firebase from 'firebase'

import './App.css';

function Footer(props) {  
  const [ update, updateClick ] = useState(false);
  
  let index = props.items === null ?  0 : props.items.length
  let inputValue = props.inputValue


  function divToInput(index, content)
  {    
    if(update === true)
    {
      updateContent(index, content)
    }
    updateClick(!update)      
  }

  function updateContent(index, content)
  {
    console.log("updateContent :: ", content);
    console.log("dd :: ",  firebase.database().ref('facilities/' + index))
    firebase.database().ref('facilities/' + index).update({
      name : content
    }).then(res => {
      props.changeInput(content);
    })
  } 

  console.log("Footer :: ", props.targetID)
  return (
      <div className = "footer">
        <div className = "input-container">
          {
            props.targetName === ""
            ? <input className = "input-write" onChange = {props.changeInput} onFocus={(e) =>{e.target.value = ""}}/>   
            : (
                update === false 
                ? <div className = "input-update" >             
                  {"선택시설 : " + props.targetName}
                </div> 
                : <input className = "input-update" onChange = {props.changeInput}/>
              )
          }
        </div>
        <div className = "control">
          {
            props.targetName === "" 
          ? <button className = "button" onClick = {()=>{props.writeData(index,inputValue)}}>저 장</button> 
          : 
            <div>
              <button className = "button" onClick = {props.clearTarget}>취 소</button>
              <button className = "button" onClick = {()=>{props.removeData(props.targetID)}}>삭 제</button>
              <button className = "button" onClick = {() => {divToInput(props.targetID, props.inputValue)}}>
                수 정
              </button>
            </div>
            }
                        
        </div>
      </div>      
  );
}

export default Footer;
