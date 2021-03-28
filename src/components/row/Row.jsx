import React, { Component } from 'react'
import Cell from '../cell/Cell';
import './row.css';

class Row extends Component {
    state = { 
        primary: this.props.primary,
    }

    render() {
        return ( 
            <div className={`row ${this.state.primary ? 'primary' : ''}`}>
                {this.props.cells.map((c, i) => {
                    return <Cell value={c} key={i}/>
                })}
            </div>
        );
    }
}

export default Row;