import React from "react";

const MyComponent = (props) => {
    return (
        <div>
            이름은 {props.name} <br />
            children 값은 {props.children} 입니다. {/* MyComponent 컴포넌트 사이에 들어 있는 값이 children임 */ }
        </div>
    );
};

export default MyComponent;