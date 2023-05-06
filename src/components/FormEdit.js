import { useState } from "react";
function FormEdit({ editList, value }) {
  const [text, setText] = useState(value.name);
  const handle_edit = (e) => {
    e.preventDefault();
    editList(value.id,text);
  };
  return (
    <form onSubmit={handle_edit}>
      <input
        type="text"
        placeholder="Enter your name "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}
export default FormEdit;
