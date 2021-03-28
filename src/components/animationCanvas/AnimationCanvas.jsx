import React, { Component } from 'react';
import { connect } from 'react-redux';
import Row from '../row/Row';
import './animationCanvas.css';

class AnimationCanvas extends Component {
    state = { 
        memory: this.props.memory || [],
        max: this.props.max || 1,
        min: this.props.min || 0,
        modification: this.props.modification || [],
        modType: this.props.modType,
        upperValues: [],
        lowerValues: [],
    }

    render() {
        // let modifArray = []; 
        // if (this.state.modification && this.state.modification.length) {
        //     modifArray = new Array(this.state.memory.length);
        //     for (let i = 0; i < modifArray.length; i++) {
        //         modifArray[i] = this.state.modification[2];
        //     }
        // }

        return ( 
            <div className="space-container">
                {this.props.steps.map((st, i) => <Row cells={st} key={i} /> )}
                <Row cells={this.props.memory} primary={true}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        memory: state.memory,
        steps: state.steps,
    }
};

export default connect(mapStateToProps, undefined)(AnimationCanvas);