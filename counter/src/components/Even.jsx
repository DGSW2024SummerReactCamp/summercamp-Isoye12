import { useEffect } from "react";

const Even = () => {
    // Even Component UnMount
    // useEffect의 두 번째 parameter가 빈 배열이고,
    // 첫 번째 parameter인 callback 함수가 '함수'를 return하면
    // Component가 UnMount할 때 실행됨
    useEffect(() => {
        return (() => {
            console.log('UnMount')
        })
    }, [])
    return (
        <div>짝수입니다</div>
    );
};

export default Even;