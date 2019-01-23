import * as React from 'react';
import {getRandomInt, padZero} from './Util';
// 120 / 10

class Addition extends React.Component {
    public state:any;
    public textInput: any;
    constructor(props:any){
        super(props);
	this.textInput = "";
        this.state = {is: [0,0,0,0], op1: 129, op2: 239, ix: 4, counter: 0, len: 4}
        this.render = this.render.bind(this)
        this.updateIs = this.updateIs.bind(this)
        this.updateI = this.updateI.bind(this)
        this.focus = this.focus.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
    }

    updateIs(i:any, v:any){
        var nis:any = this.state.is;
        nis[i] = v;
        this.setState({is: nis});
    }

    updateI(v:any){
        let counter:any = this.state.counter;
        let value = v.target.value,
	    ix = this.state.ix,
	    result = padZero(this.state.len-1, this.state.op1 + this.state.op2, "0");
	if(value[ix-1] == result[ix-1]){
          this.setState((prevState:any) => ({
              is: value.split(""), 
              counter: (counter+1),
              ix: (prevState.ix -1)
          }))
	} else {
          this.setState((prevState:any) => ({
          }))
	}
	
    }
    componentDidMount(){
    
    }
    componentDidUpdate(prevProps:any, prevState:any){
        var ix = this.state.ix;
        var selection = this.textInput.selectionStart;
	this.textInput.focus();
        this.textInput.setSelectionRange(ix-1,ix);
    }
    focus(e:any){
        // var len = this.state.len;
        // this.setState({ix: len})
        // this.textInput.setSelectionRange(len-1, len);
    }
    nextQuestion(){
        let op1 = getRandomInt(0,200),
            op2 = getRandomInt(0,200);
        this.setState({op1: op1, op2: op2, is: [0, 0, 0, 0], ix: 4})
    }
    render() {
        var props = this.props,
            state = this.state,
            setState = this.setState,
            decimal_divs = [1,2],
            op1 = this.state.op1,
            op2 = this.state.op2,
            is = this.state.is,
            result = op1 + op2,
            input_value = parseInt(this.state.is.join("")),
            len = result.toString().length,
            op1Str = padZero(len,op1,'0'),
            op2Str = padZero(len,op2,'0'),
            active = 3,
            ix = this.state.ix < 1 ? 1 : this.state.ix,

	    op1done = parseInt(op1Str.slice(ix)) || 0,
	    op2done = parseInt(op2Str.slice(ix)) || 0,
	    overflow = [];
	    for(var i = 0; i<=len; i++){
	      let op1i = parseInt(op1Str[i]),
	          op2i = parseInt(op2Str[i]),
		  s = op1i + op2i;
	      overflow.push(Math.trunc(s / 10).toString());
	    }
	    let overflow2 = overflow.slice(ix);
	    overflow2.push("0");
            overflow = padZero(len, overflow2.join(""), '0');
            
        var inputs = <input 
            className={["add", input_value === result ? "correct" : "incorrect"].join(" ")} 
            ref={(input) => { this.textInput = input; }} 
            value={this.state.is.join("")} onInput={this.updateI} onFocus={this.focus}/>

        var op1Input = 
            <td>
                <div className="digits">{op1Str.slice(0,ix-1)}</div>
                <div className="active-digit">{op1Str.slice(ix-1,ix)}</div>
                <div className="digits">{op1Str.slice(ix)}</div>
            </td>
        var op2Input =            
            <td>
                <div className="digits">{op2Str.slice(0,ix-1)}</div>
                <div className="active-digit">{op2Str.slice(ix-1,ix)}</div>
                <div className="digits">{op2Str.slice(ix)}</div>
            </td>
        return (
        <div className="addition" >
            <div><button onClick={this.nextQuestion}>Next</button></div>
            <div>{this.state.counter}</div>
            <table>
                <tr></tr>
                <tr>{op1Input}</tr>
                <tr>{op2Input}</tr>
                <tr><td>{overflow}</td></tr>
                <tr><td>-------</td></tr>
                <tr><td>{inputs}</td></tr>
            </table>
        </div>)
    }
}

export default Addition;