import { useState, useRef } from 'react';
import './css/TodoList.css';
import TodoItem from './TodoItem';

const TodoList = ({todo, onUpdate, onDelete }) => {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    };

    const getSearchResult = () => {
        // 삼항연산자
        return search === '' ? todo : todo.filter((i) => i.content.toLowerCase().includes(search.toLowerCase()) /* callback 함수, search범위includes(search내용) - search의 내용에 해당하는 것을 걸러 todo를 새로 만들어줌 */)
    };

    const analyzeApp = () => {
        console.log('analyzeApp')
        const totalCount = todo.length;
        const doneCount = todo.filter((i) => i.isDone).length;
        const notDoneCount = totalCount - doneCount;
        return { // return문 오브젝트를 반환
            totalCount,
            doneCount,
            notDoneCount
        }
    }

    const {totalCount, doneCount, notDoneCount} = analyzeApp();


    return (
        <div className="TodoList">
            <h4>Todo List 🌱</h4>
            <div>
                <div>총개수 : {totalCount}</div>
                <div>완료 : {doneCount}</div>
                <div>미완료 : {notDoneCount}</div>
            </div>
            <input className='searchbar' placeholder='검색어를 입력하세요' 
                value={search}
                onChange={onChangeSearch}
                />
            <div className='list_wrapper'>
                {getSearchResult().map((i) => (
                    <TodoItem
                        key={i.id}
                        {...i}
                        onUpdate={onUpdate}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;