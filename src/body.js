import React from 'react';
import './App.css';

function Body(props) {
  function makeList(list) {    
    if(list=== null || list.length === 0)
    {
      return (
        <div>
            <span>데이터 없음</span>
        </div>       
      )
    }
    else
    {
      console.log("map :: ", props.items)
      return props.items.map((val,index) =>  { 
        return (
          <div id = {val.id}  name = {index} className = "facility-container" onClick = {props.rowClick}>
            <div className = "facility-id">
              <span>{val.id}</span>
            </div>
            <div className = "facility-name">
                <span>{val.name}</span>
            </div>      
          </div>
        )
      })
    }
  }
  
  return (
    <div className = "body">
      <div className = "facility">
        <div className = "facility-id">
            <span>id</span>
        </div>
        <div className = "facility-name">
            <span>시설이름</span>
        </div>
      </div>
      {makeList(props.items)}
    </div>          
  );
}

export default Body;
