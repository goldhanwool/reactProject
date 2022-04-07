import React from "react";
import Test from "./Test";
// import './style.css';
import styled from "styled-components";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['영화관가기', '매일책읽기', '수영배우기'],
    };
    this.text = React.createRef();
  } // constructor

  componentDidMount() {
    console.log(this.text);
    console.log(this.text.current);
  }

  render() {
    console.log(this.state)
    return (   
      <div className="App">
        <Container>
          <Line/>  
        <Title>내 테스트</Title>
        {/* 컴포넌트를 넣어줍니다. */}
        <Title><Test list={this.state.list}/></Title>
        </Container>
      <div>
        <input type="text" ref={this.text}/>
      </div>

      </div>
    );
  } // render
} // class

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.div`
  color: slateblue;
  text-align: center;
`; 

const Line = styled.hr`
  margin: 16px 0px;
  text-align: 1px solid #ddd;
`; 

export default App;