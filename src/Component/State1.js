import React, { Component } from 'react';
import { getData } from './data';

class State1 extends Component {
    constructor(props){
        var arr=getData();
        super(props);
        this.state={arr};
    }
    
    render() {
        return (
            <div className='product'>
                {this.state.arr.map(key=>
                    <div>
                        <img src={key.image} width={200} height={200}></img>
                        <h2>{key.name}</h2>
                        <h2>Loai: {key.loai}</h2>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default State1;