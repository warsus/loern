import * as React from "react";

//import logo from './logo.svg';
import './App.css';
// import Table from './Table.tsx';
// import Question from './Question';
import Addition from './Addition';

import {Tab, Tabs
} from 'react-bootstrap';


class App extends React.Component {
  constructor(props:any) {
        super(props);
        this.state = {
          "operator": "plus",
          "op1": 2,
          "op2": 3,
        };
  }
  render() {
    return (
      <div className="App">
        <Adder/>
      </div>
    );
  }
}

class Adder extends React.Component<any,any> {
  operators: { "+": (a: any, b: any) => any; "-": (a: any, b: any) => number; "*": (a: any, b: any) => number; };
  constructor(){
    super({}, null);
    this.operators = {
      "+": function(a,b){return a+b},
      "-": function(a,b){return a-b},
      "*": function(a,b){return a*b}
    }
    this.changeOp = this.changeOp.bind(this)
    this.changeOp1 = this.changeOp1.bind(this);
    this.changeOp2 = this.changeOp2.bind(this);
    this.toggleEnterState = this.toggleEnterState.bind(this);

    this.state = {"op1": "0","op2": "0", "op": "+", "in": false}  
  }
  changeOp1 (e:any) {
    this.setState({"op1": (e.target.value || "")})
  }
  changeOp2 (e:any) {
    this.setState({"op2": (e.target.value || "")})
  }
  changeOp(e:any){
    this.setState({"op": (e.target.value)})
  }

  toggleEnterState = () => {
    this.setState(({in: inProp}:{in:boolean}) => ({ in : !inProp }));
  }

  render () {
  
  var op1 = parseInt(this.state.op1,10),
      op2 = parseInt(this.state.op2,10),
      itemsOp1 = [],
      itemsOp2 = [],
      itemsRes = []

  for(var i=0;i<op1;i++){
    itemsOp1.push("red")
    itemsRes.push("red")
  }
  for(var i=0;i<op2;i++){
    itemsOp2.push("black")
    itemsRes.push("black")
  }

  var memoryTab = <div>
    <h1>Memory</h1>
  </div>

  // var questionTab = <div>
  //   <h1>Question</h1>
  //   // <Question/>
  // </div>
  var miniMapTab = <div></div>
  var additionTab = <Addition/>

  var tabs = <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
    <Tab eventKey={1} title="Addition">{additionTab}</Tab>
  </Tabs>

  return (
    <div> 
      {tabs}
    </div>)}
}

export default App;
