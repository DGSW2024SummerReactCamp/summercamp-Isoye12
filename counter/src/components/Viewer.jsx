// App 컴포넌트에서 props로 보낸 count 상태변수를 받아서 화면에 출력
const Viewer = ({count}) => {
    return (
        <div>
            <div>현재 카운트 :</div>
            <h1>{count}</h1> {/* 가져온 count값을 h1으로 보이게 한다 */}
        </div>
    );
};

export default Viewer; // Viewer 함수를 내보낸다