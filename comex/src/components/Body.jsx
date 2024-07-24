import {useState} from "react"

const Body = () => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    const handleOnChange = (e) => setText(e.target.value)
    const handleOnChangeDate = (e) => setDate(e.target.value)

    return (
        <div>
            <input type='text' value={text} onChange={handleOnChange} />
            <input type='date' value={date} onChange={handleOnChangeDate} />
            <div>{text}</div>
            <div>{date}</div>
        </div>
    );
};

export default Body;