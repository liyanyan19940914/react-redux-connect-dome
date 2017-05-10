import React,{Component} from 'react';

class Count extends Component{
    render(){
        const {value,onIncreaseCLick} = this.props;
        return <div>
            <span>{value}</span>
            <button onClick={onIncreaseCLick}>increase</button>
        </div>
    }
}

module.exports = Count;