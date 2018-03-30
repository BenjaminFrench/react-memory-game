import React, { Component } from 'react';
import MemoryTile from './memory-tile/memory-tile';
import './memory-grid.css';
import FlipMove from 'react-flip-move';

class MemoryGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [
                { value: 1, imgUrl: ''},
                { value: 2, imgUrl: ''},
                { value: 3, imgUrl: ''},
                { value: 4, imgUrl: ''},
                { value: 5, imgUrl: ''},
                { value: 6, imgUrl: ''},
                { value: 7, imgUrl: ''},
                { value: 8, imgUrl: ''},
                { value: 9, imgUrl: ''},
                { value: 10, imgUrl: ''},
                { value: 11, imgUrl: ''},
                { value: 12, imgUrl: ''}
            ]
        };

    }

    render() {
        return (
            <div>
                <div className='memory-grid'>
                    <FlipMove view='grid' duration={300} easing="ease-out">
                        {this.state.tiles.map( (tile) => <MemoryTile key={tile.value} value={tile.value}/>)}
                    </FlipMove>
                </div>
                <button onClick={this.handleShuffleClick}> shuffle </button>
            </div>
        );
    }

    handleShuffleClick = () => {
        this.setState({tiles: this.shuffle(this.state.tiles)});
    }

    shuffle(arr) {
        var curr = arr.length;
        var temp, rand;
    
        while (curr !== 0) {
            rand = Math.floor(Math.random() * curr);
            curr--;
    
            temp = arr[curr];
            arr[curr] = arr[rand];
            arr[rand] = temp;
        }
    
        return arr;
    }
}

export default MemoryGrid;