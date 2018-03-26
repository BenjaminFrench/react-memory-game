import React, { Component } from 'react';
import './memory-tile.css';

class MemoryTile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const value = this.props.value;
        
        return (
            <div id={value} className='memory-tile'>
                <p className='memory-tile-text'>
                    {value}
                </p>
            </div>
        );
    }
}

export default MemoryTile;