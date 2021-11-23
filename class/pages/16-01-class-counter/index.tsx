import { Component } from "react";
import MyComponent from "../../src/components/units/board/classcomponent";
// 다른 클래스 기능을 끼워 붙임

interface IState {
  count: number;
}
export default class MyCounterPage extends Component {
  state: IState = {
    count: 0,
  };

  // state에 모든 기능이 들어감

  onClickCounter = () => {
    console.log(this.state.count);
    // 위 this는 바인딩 하지 않으면 기본적으로 윈도우를 가르킴
    // 클릭 하고 난 후 실행
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <>
        <div>현재카운트 : {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!</button>
        <MyComponent count={this.state.count} />
      </>
    );
  }
  // render 화면에 그려줌
  // 메소드 접근 시 this.으로 접근해야 연결됨
}
