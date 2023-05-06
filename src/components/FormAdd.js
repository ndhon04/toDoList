import {useState} from "react";
function FormAdd(props) {
    const [text, setText] = useState("")
    return (<div>
        <form className="formAdd" onSubmit={(e) => {
            e.preventDefault();
            props.addList(text)
            setText("")
        }} >
            <input type="text" placeholder="Enter your name" value={text} onChange={(e) => {
                setText(e.target.value)
            }} />
        </form>
    </div>)
}
export default FormAdd;