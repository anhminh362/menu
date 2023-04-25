import React, { Component } from 'react';

class Member extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name: "Bui Van Teo",
            age: 25
        };
    };
  
    render() {
        if (this.state.age >=50) {
            var message='Ban da gia';
        }
        else{
            var message='Ban con tre';
        }
        return (
            <div>
                <h2>{this.state.name}</h2>
                <p>Tuoi: {this.state.age}</p>
                <h>{message}</h>
            </div>
        );
    }
}

export default Member;