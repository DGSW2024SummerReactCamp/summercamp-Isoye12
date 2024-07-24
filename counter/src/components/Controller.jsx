// App 컴포넌트에서 props로 보낸 handleSetCount 함수를 받아서
// 카운터의 버튼 클릭 시 상태변수 count의 값을 변경할 value를 handleSetCount에 전달
const Controller = ({handleSetCount}) => {
    return (
        <div>
            {/* 버튼을 클릭했을 때 handleSetCount에 각각의 값을 전달한다(전달한 값은 App에서 value로 전달됨)*/}
            <button onClick={() => handleSetCount(-1)}>-1</button>
            <button onClick={() => handleSetCount(-10)}>-10</button>
            <button onClick={() => handleSetCount(-100)}>-100</button>
            <button onClick={() => handleSetCount(100)}>+100</button>
            <button onClick={() => handleSetCount(10)}>+10</button>
            <button onClick={() => handleSetCount(1)}>+1</button>
        </div>
    );
};

export default Controller; // Controller 함수를 내보낸다