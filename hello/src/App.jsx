// import './App.css';
import React from "react";
import Hello from "./Hello"
import Wrapper from "./Wrapper"
import MyComponent from "./Mycomponent";
import Say from "./Say";

const App = () => {
  return (
    <Say />
  )
}

// const App = () => {
//   return (
//     <MyComponent name='소예'>리액트 방학 특강</MyComponent>
//   );
// };

// const App = () => {
//   const handleOnChange = (event) => {
//     console.log(event.target.value + '라고 입력함')
//   };

//   return (
//     <div>
//       <input onChange={handleOnChange} />
//     </div>
//   );
// };

// const App = () => { /* 파일이름과 같아야 함 */
//   return (
//     <Wrapper>
//       <Hello name='소예' color='red'></Hello>
//       <Hello color='pink'></Hello>
//     </Wrapper>
//   );
// }

export default App; /* import를 할 때 App함수를 내보내겠다는 뜻임 */
