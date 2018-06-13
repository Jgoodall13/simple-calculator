import React, { Component } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {onClear, onSubmit, onNumberPress} from './actions'

class Calculator extends Component {


    onNumberPress = (num) => {
        this.setState({count: this.state.count.concat(num)})
    }

    render(){
        return (
            <div>
                <h1>Calculator</h1>
                <div style={style.display}>
                    {this.props.count}
                </div>
                <button onClick={() => this.props.onNumberPress('+')}>+</button>
                <button onClick={() => this.props.onNumberPress('-')}>-</button>
                <button onClick={() => this.props.onNumberPress('/')}>/</button>
                <button onClick={() => this.props.onNumberPress('*')}>*</button>
                <br />
                <button onClick={() => this.props.onNumberPress(9)}>9</button>
                <button onClick={() => this.props.onNumberPress(8)}>8</button>
                <button onClick={() => this.props.onNumberPress(7)}>7</button>
                <br />
                <button onClick={() => this.props.onNumberPress(6)}>6</button>
                <button onClick={() => this.props.onNumberPress(5)}>5</button>
                <button onClick={() => this.props.onNumberPress(4)}>4</button>
                <br />
                <button onClick={() => this.props.onNumberPress(3)}>3</button>
                <button onClick={() => this.props.onNumberPress(2)}>2</button>
                <button onClick={() => this.props.onNumberPress(1)}>1</button>
                <br />
                <button onClick={() => this.props.onNumberPress(0)}>0</button>
                <button onClick={this.props.onSubmit}>=</button>
                <button onClick={this.props.onClear}>CLEAR</button>
            </div>
        )
    }
}

const style = {
    display : {
        backgroundColor: 'gray',
        height: '15px',
        width: '10%',
        marginLeft: '45%'
    }
}

const mapStateToProps = state => ({
    count: state.count
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({onClear, onSubmit, onNumberPress: onNumberPress}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)