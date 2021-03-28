import React, { Component } from "react";
import './historyCard.css';

class HistoryCard extends Component {
    state = {
        index: this.props.index,
        a: this.props.a,
        b: this.props.b,
        k: this.props.k,
        selected: this.props.selected,
        onClick: this.props.onClick,
    };

    componentDidMount() {
        const upd = (v) => this.setState({selected: v});
        this.props.upd((isSelected)=>upd(isSelected));
    }

    render() {
        return (
            <div onClick={this.state.onClick} className={`h-card ${this.state.selected ? 'selected' : ''}`}>
                {`${this.state.index} -> [${this.state.a}, ${this.state.b}] = ${this.state.k}`}
            </div>
        );
    }
}

export default HistoryCard;
