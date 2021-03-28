import React, { Component } from 'react';
import './cell.css';

class Cell extends Component {
    state = { }
    render() { 
        return ( 
            <div className="cell">
                {this.props.value || ' - '}
            </div>
        );
    }
}

export default Cell;