import React, { Component } from 'react'

export default class Counter2 extends Component {
 state= {
    count : 0
 }
 
increase = () => {
    this.setState({
     count: this.state.count +1,
    })
};


decrease = () => {
    
    if (this.state.count !== 0) {
        this.setState({
            count: this.state.count - 1,
        });
    }
} ;

  render() {
    return (
      <div>
       <p>
        The Count is : <strong>{this.state.count}</strong>
       </p>
       {this.state.count === 0 && (
                <p className="text-secondary"> can not decrease counter less than 0</p>
            )}
       <button className='btn btn-success mx-2' onClick={this.increase}>Incease</button>
       <button className='btn btn-danger mx-2' onClick={this.decrease}>Decrease</button>

      </div>

    )
  }
}
