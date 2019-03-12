//import React, {Component} from 'react';
import React from 'react';
//class Display extends Component {
//  render(){
    //console.log(this.props);
    //const{name, age, birthMonth}=this.props;
    const Display  = (props)=>{

    const { displayInfos, deleteInfo } = props;

    console.log('Inside Display Component --', displayInfos);
    const displayList = displayInfos.map( info =>{

      //if(info.age>25){                This is conditional rendering

      return (
        <div key={info.id}>
              <h3>This is {info.id}'s content </h3>
              <div>Name: { info.name }</div>
              <div>Age: { info.age }</div>
              <div>Birthmonth: { info.birthMonth }</div>
              <button onClick={ () => {deleteInfo(info.id)} }> Delete </button>
        </div>

      )
    }
     //else{
      //return null;
   //}
);


    return(
      <div>
        {displayList}
      </div>
    );
  }



export default Display;
