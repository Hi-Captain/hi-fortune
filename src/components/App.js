import React, { Component } from 'react';
import '../css/App.css';
import Input from './Input';
import List from './List';
import Output from './Output';

class App extends Component {
  state = {
    input : '',
    list : [],
    picked : ''
  }

  _Typing = (e) => {
    const {value} = e.target
    this.setState({
      input : value
    })
  }

  _AddItem = () => {
    const { input, list } = this.state;
    this.setState({
      input : '',
      list : [...list, input]
    })
  }

  _PickItem = (e) => {
    const { list } = this.state;
    if( list.length > 0 ) {
      this.interval = setInterval(() => {
        const pickNum = Math.floor(Math.random() * list.length);
        this.setState({
          picked : list[pickNum]
        })
      }, 50)
      this.timeOut = setTimeout(() => {
        clearInterval(this.interval)
      }, 2000)
      e.target.remove()
    } else {
      alert('리스트를 채워주세요')
    }
  }

  render() {
    const { input, list, picked } = this.state;
    const { _Typing, _AddItem, _PickItem } = this;
    
    return (
      <div className="App">
        <header>Hi-Fortune</header>
        <section>
          <div className="left">
            <List list={list}/>
          </div>
          <div className="right">
            <Input value={input} typing={_Typing} addItem={_AddItem}/>
            <Output picked={picked} pickItem={_PickItem}/>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
