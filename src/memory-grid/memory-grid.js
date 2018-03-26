import React, { Component } from 'react';
import MemoryTile from './memory-tile/memory-tile';
import './memory-grid.css';


class MemoryGrid extends Component {
    render() {
        var tiles = [1,2,3,4,5,6,7,8,9,10,11,12]
        return (
            <div>
                <div className='memory-grid'>
                    {tiles.map( (tile) => <MemoryTile value={tile}/>)}
                </div>
                <button> shuffle </button>
            </div>
        );
    }
}

export default MemoryGrid;