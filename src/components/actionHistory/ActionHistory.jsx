import React, { Component } from "react";
import HistoryCard from "../historyCard/historyCard";
import { connect } from 'react-redux';
import { updateMemory, updateStepLimit, updateSteps } from '../../store/actions/actions';
import { classicMethod, fastMethod } from '../../classes/SpaceState';
import './actionList.css';

const MODES = {
    classic: 0,
    optimized: 1,
};

class ActionHistory extends Component {
    state = {
        actionList: this.props.actionList,
        selectedCard: 0,
        mode: MODES.classic,
    };

    childs = {};
    memStates = {};

    applyToArray(arr, a, b, k, mode) {
        switch (mode) {
            case MODES.classic:
                classicMethod(arr, a, b, k);
                break;
            case MODES.optimized:
                fastMethod(arr, a, b, k);
                break;
            default:
                break;
        }
        return arr;
    }

    changeSelected = (i) => {

        if (!Object.keys(this.memStates).length) this.memStates[-1] = new Array(this.props.memory.length).fill(0);

        for (const key in this.childs) {
            this.childs[key](parseInt(key) === i);
        }

        if (!this.memStates[i]) {
            let mem,
            li = i-1;

            // Find the last calculated index
            while (!this.memStates[li]) {
                li--;
            }

            mem = [...this.memStates[li]];

            // calculate all from the last index to the required index
            li+=1;
            while (li < i) {
                let [a, b, k] = this.state.actionList[li];
                this.applyToArray(mem, a, b, k, this.state.mode);
                this.memStates[li] = [...mem];
                li++;
            }
        }

        // get the steps
        let steps = new Array(this.props.stepsLimit > (this.state.actionList.length-i) ? this.state.actionList.length-i : this.props.stepsLimit)
            .fill(new Array(this.props.memory.length).fill(0))
            .map((s, ii) => {
                const [aa, bb, kk] = this.state.actionList[i+ii];
                return this.applyToArray([...s], aa, bb, kk, this.state.mode);
            }).reverse();
        
        this.props.updateMemory(this.memStates[i-1]);
        this.props.updateSteps(steps);
        this.setState({selectedCard: i});
    };


    render() {
        return <div className="actionHistory">
            <h1>Timeline</h1>
            {this.state.actionList.map((_a, i) => {
                let [a, b, k] = _a;
                const isSelected = this.state.selectedCard === i;

                return <HistoryCard 
                    onClick={()=>this.changeSelected(i, a, b, k)} 
                    key={i} 
                    selected={isSelected} 
                    a={a} 
                    b={b} 
                    k={k} 
                    index={i}
                    upd={(updFn => this.childs[i] = updFn)} />
            })}
        </div>;
    }
}

const mapStateToProps = (state) => {
    return {
        memory: state.memory,
        stepsLimit: state.stepsLimit,
        // steps: state.steps,
    }
};

export default connect(mapStateToProps, { 
    updateMemory, 
    updateStepLimit,
    updateSteps,
})(ActionHistory);