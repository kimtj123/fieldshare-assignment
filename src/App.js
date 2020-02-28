import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'

import { firebaseConfig } from './config/config.js'
import Body from "./body"
import Footer from "./footer"

class App extends Component {
  constructor() {
    super()
    this.state = {
      facilities : [],
      targetName : "",
      targetID : "",
      inputValue : ""
    }
    // DB 관련
    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref().child('facilities')
    this.writeData = this.writeData.bind(this);    
    this.removeData = this.removeData.bind(this);
    // input, click 이벤트 관련
    this.rowClick = this.rowClick.bind(this);
    this.clearTarget = this.clearTarget.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  writeData(id, name) {

    function generateRandom(min, max) {
      var ranNum = Math.floor(Math.random()*(max-min+1)) + min ;    
      return ranNum;
    }

    firebase.database().ref('facilities/'+id).set({
      id: generateRandom(10000,99999),
      name : name
    })
    .then(() => console.log("write!"))
    .catch((err)=> console.log(err))
  }
  removeData(index){
    
    firebase.database().ref('facilities/'+index).remove()
    .then(() => console.log("remove!"))
    .catch((err)=> console.log(err))
  }

  rowClick(e){
    let id = e.currentTarget.getAttribute('name');
    let name = e.currentTarget.children[1].children[0].innerHTML;
    this.setState({
      targetID : id,
      targetName: name
    })    
    console.log("rowClick :: ", name)
  }

  clearTarget(){
    this.setState({
      targetName: ""
    })
  }

  changeInput(e){    
    console.log(e.target.value)
    this.setState({
      inputValue : e.target.value
    })
  }

  componentDidMount(){ // Hooks 에선 useEffect로 대체 가능하다.
    this.database.on('value', snap => {
      console.log("snap.val :: ", snap.val())
      this.setState({
        facilities: snap.val()
      })
    })
  }
  
  render(){    
    console.log("this.database :: ",this.database)
    return(
      <div className= "App">
        <header className= "header">   
          <p className = "header-title">FieldShare</p>
        </header>
        {/*DB 항목과 내용 */}
        <Body items = {this.state.facilities} rowClick = {this.rowClick}/>
        {/*컨트롤러 */}
        <Footer 
          writeData = {this.writeData}
          removeData = {this.removeData}

          clearTarget = {this.clearTarget}
          changeInput = {this.changeInput}

          items = {this.state.facilities}
          inputValue = {this.state.inputValue}
          targetName = {this.state.targetName} 
          targetID = {this.state.targetID}          
          />   
    </div>  
    )
  }

}

export default App;
