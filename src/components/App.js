import React, { Component } from 'react';
import '../css/App.css';
import Input from './Input';
import List from './List';
import Output from './Output';

class App extends Component {
  state = {
    input : '',
    list : [],
    picked : '?',
    isRolling : false
  }

  _Typing = (e) => {
    const { list } = this.state
    const { value } = e.target
    if(list.indexOf(value) > -1){
      e.target.classList.add('dupl')
    } else {
      e.target.classList.remove('dupl')
    }
    this.setState({
      input : value
    })
  }

  _AddItem = () => {
    const { input, list } = this.state;
    if(input !== ''){
      if(list.indexOf(input) > -1){
        alert(input + '는(은) 이미 입력되었습니다. 중복 값은 리스트로 추가할 수 없습니다.')
      } else {
        this.setState({
          input : '',
          list : [...list, input]
        })
      }
    } else {
      alert('공백은 리스트로 추가할 수 없습니다.')
    }
  }

  _DelItem = (index) => {
    const { list } = this.state;
    this.setState({
      list : [
        ...list.slice(0, index),
        ...list.splice(index + 1, list.length)
      ]
    })
  }

  _RollItem = () => {
    const { list } = this.state;
    if( list.length > 0 ) {
      this.interval = setInterval(() => {
        const pickNum = Math.floor(Math.random() * list.length);
        this.setState({
          picked : list[pickNum],
          isRolling : true
        })
      }, 50)
    } else {
      alert('리스트를 채워주세요')
    }
  }

  _PickItem = () => {
    clearInterval(this.interval)
    this.setState({
      isRolling : false
    })
  }

  render() {
    const { input, list, picked, isRolling } = this.state;
    const { _Typing, _AddItem, _DelItem, _RollItem, _PickItem } = this;
    
    return (
      <div className="App">
        <header>Hi-Fortune</header>
        <section>
          <Input value={input} typing={_Typing} addItem={_AddItem}/>
          <List list={list} delItem={_DelItem}/>
          <Output picked={picked} rollItem={_RollItem} pickItem={_PickItem} isRolling={isRolling}/>
        </section>
      </div>
    );
  }
}

export default App;
