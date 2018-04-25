import React, {Component} from 'react';

class Counter extends Component {

    state = {
        value:0
    }

    componentDidMount() {
        setTimeout(() => this.setState({
                value:1
        }), 1000);
    }
    render() {
        return (
         <React.Fragment>
             <h1>{this.state.value}</h1>
             <p>

                 <button onClick={() => this.setState({value: this.state.value +1})}>
                     Increment</button>
             </p>
         </React.Fragment>

        )
    }
}

export default Counter