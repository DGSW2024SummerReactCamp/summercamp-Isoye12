import './css/TodoItem.css';

const TodoItem = ({id, content, isDone, createdDate, onUpdate, onDelete}) => {
    const onChangeCheckbox = () => {
        // 체크한 todo의 id를 App에 보내줌
        onUpdate(id)
    };

    const onClickDelete = () => {
        // 삭제한 todo의 id를 App에 보내줌
        onDelete(id)
    };

    return (
        <div className='TodoItem' key={id}>
            <div className='checkbox_col'>
                <input
                    checked={isDone}
                    onChange={onChangeCheckbox}
                    type="checkbox"
                    />
            </div>
            <div className='title_col'>{content}</div>
            <div className='date_col'>{new Date(createdDate).toLocaleDateString()}</div>
            <div className='btn_col'>
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem