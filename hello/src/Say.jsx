 import { useState } from "react";

 const Say = () => {
    const [message, setMessage] = useState('버튼을 눌러주세요'); {/* [상태 이름, 상태를 변경할 때 쓸 이름] = useState('상태 초기값') */}
    const onClickEnter = () => setMessage('안녕');
    const onClickLeave = () => setMessage('잘가');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1> {/* {message} 상태 값을 가짐 */}

            <button style={{color: 'red'}} onClick={() => setColor('red')}> {/* 바깥 {}는 js를 시작하겠다는 뜻, 안의 {}는 css를 쓰겠다는 의미, ({} 하나만 하면 color를 js의 변수 이름으로 인식함) */}
                Red
            </button>
            <button style={{color: 'Green'}} onClick={() => setColor('Green')}>
                Green
            </button>
            <button style={{color: 'Yellow'}} onClick={() => setColor('Yellow')}>
                Yellow
            </button>
        </div>
    )
 };

 export default Say