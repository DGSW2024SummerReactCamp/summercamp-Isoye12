import './App.css'
import { useRef, useState, useEffect } from 'react';
// import Viewer component : count 값 출력
import Viewer from "./components/Viewer";
// import Controller component : count에 버튼 클릭 시 전달된 값(value)을 전달할 수 있도록 (아래쪽 내용을 보지 않더라도 알 수 있도록)
// handleSetCount 함수 사용
import Controller from './components/Controller';
// UnMount 하는 것을 확인
import Even from './components/Even';

const App = () => {
  const didMountRef = useRef(false)
  // State count를 useState를 이용해서 생성 (보면 알지만 한 번 씩 적어야 함)
  // 초기값 : 0
  // setter : setCount
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => { 
    setCount(count + value) // count + value(버튼 클릭 시받게 되는 값)으로 setCount
  }
  const handleSetText = (e) => {
    setText(e.target.value)
  }

  // Component Mount (처음 마운트 할 때)
  // 두 번째 parameter 의존성 배열이 빈 배열일 경우 라이프 사이클 중 마운트에 해당
  // 마운트 상태인 경우에만 콜백함수 실행
  useEffect( () => {
    console.log('Component Mount')
  }, []) // 의존성 배열에 아무것도 없으면 마운트만 체크함

  // useRef : Component Update (마운트 할 때가 아닌 상태가 바뀔 때)
  // 두 번째 parameter의 값이 없으므로, 모든 업데이트 상황에서 실행
  // 하지만, useRef를 사용해서 마운트를 제외한 모든 업데이트 상황에서 콜백함수 실행
  useEffect( () => {
    if( !didMountRef.current ) { // !didMountRef.current = 현재 상태가 False면 해당되는 것 (사용예시 : user가 아니라면)
    didMountRef.current = true;
    return; // 함수를 빠져나감
    }
    else {
      console.log(`컴포넌트 업데이트`)
    }
  })

  // State 변수 : text, count가 변경될 때 Callback 함수 실행 -> 콘솔에 출력
  // Update : State 변경
  // 두 개의 상태변수 중 하나만 변경되어도 실행
  // 업데이트 중 상태변수 변경의 경우에만 실행
  useEffect(() => { // 실행할 일, 변경할 값
    console.log(`업데이트 : ${text} ${count}`)
  }, [count, text]) // 값은 여러개 넣을 수 있음 (text, count의 값을 감지하도록 함 : 의존성 배열)

  // Component Unmount : CleanUp
  // 두 번째 parameter의 값이 없으므로, 모든 업데이트 상황에서 실행
  useEffect( () => {
    const intervalId = setInterval( () => {
      console.log("깜빡")
    }, 1000) // 1초 마다 "깜빡"이 실행되도록 설정
    return () => {
      console.log('Cleanup');
      clearInterval(intervalId) // set되어 있던 setInterval자체가 사라짐
    }
  })

  return ( // App이 반환하는 값
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type='text' value={text} onChange={handleSetText} />
      </section>
      <section>
        <Viewer count={count} /> {/* Viewer 컴포넌트에  */}
        {count % 2 === 0 && <Even />} {/* count가 짝수일 때 Even컴포넌트를 실행 */}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} /> {/* Controlle 컴포넌트에 handleSetCoun 함수를 준다 */}
      </section>
    </div>
  );
};

export default App;
