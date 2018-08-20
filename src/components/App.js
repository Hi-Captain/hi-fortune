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
    const { input, list, isRolling } = this.state;
    if(isRolling){
      alert('STOP 버튼을 먼저 눌러주세요')
    } else {
      if(input !== ''){
        if(list.indexOf(input) > -1){
          alert(input + '는(은) 이미 입력되었습니다. 중복 값은 리스트로 추가할 수 없습니다.')
        } else {
          this.setState({
            input : '',
            list : [input, ...list]
          })
        }
      } else {
        alert('공백은 리스트로 추가할 수 없습니다.')
      } 
    }
  }

  _DelItem = (index) => {
    if(this.state.isRolling){
      alert('STOP 버튼을 먼저 눌러주세요')
    } else {
      const { list } = this.state;
      this.setState({
        list : [
          ...list.slice(0, index),
          ...list.splice(index + 1, list.length)
        ],
        picked : '?'
      })
    }
  }

  _ClearItem = () => {
    if(this.state.isRolling){
      alert('STOP 버튼을 먼저 눌러주세요')
    } else {
      this.setState({
        list : [],
        picked : '?'
      })
    }
  }

  _RollItem = () => {
    const { list } = this.state;
    if( list.length > 1 ) {
      this.interval = setInterval(() => {
        const { picked } = this.state;
        let pickNum = Math.floor(Math.random() * list.length);
        console.log("처음: " + pickNum)
        while(picked === list[pickNum]){
          pickNum = Math.floor(Math.random() * list.length);
          console.log("수정: " + pickNum)
        }
        this.setState({
          picked : list[pickNum],
          isRolling : true
        })
        console.log("완료: " + pickNum)
        console.log("")
      }, 40)
    } else {
      alert('리스트를 2개 이상 채워주세요')
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
    const { _Typing, _AddItem, _DelItem, _RollItem, _PickItem, _ClearItem } = this;
    
    return (
      <div className="App">
        <header>Hi-Fortune</header>
        <section>
          <Input value={input} typing={_Typing} addItem={_AddItem}/>
          <List list={list} delItem={_DelItem} clearItem={_ClearItem}/>
          <Output picked={picked} rollItem={_RollItem} pickItem={_PickItem} isRolling={isRolling}/>
        </section>
      </div>
    );
  }
}

export default App;
