import React from "react";
import Test from "./Test";
// import './style.css';
import styled from "styled-components";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['영화관가기', '매일책읽기', '수영배우기'],
    }
  } // constructor

  render() {
    console.log(this.state)
    return (   
      <div className="App">
        <div className="container">
          <hr className="line"/>  
          <h1 className="title">내 테스트</h1>
        {/* 컴포넌트를 넣어줍니다. */}
        <Test list={this.state.list}/>
        </div>
      </div>
    );
  } //render
} // class




export default App;
