import { FiDelete } from "react-icons/fi";
import { AiTwotoneEdit } from "react-icons/ai";
import FormEdit from "./FormEdit";
function Student(props) {
  const {
    student,
    deleteList,
    toggle_Complete,
    toggle_Edit,
    editId,
    editList,
  } = props;
  const isEdit = editId === student.id;
  return (
    <div className="student">
      {isEdit ? (
        <FormEdit value={student} editList={editList} />
      ) : (
        <>
          <input
            type="checkbox"
            checked={student.isComplete}
            onChange={() => toggle_Complete(student.id)}
          />
          <span
            className={`${student.isComplete ? "complete" : ""}`}
            onClick={() => toggle_Complete(student.id)}
            onDoubleClick={() => toggle_Edit(student.id)}
          >
            {student.name}
          </span>
          <AiTwotoneEdit onClick={() => toggle_Edit(student.id)} />
          <FiDelete onClick={() => deleteList(student.id)} />
        </>
      )}
    </div>
  );
}
export default Student;
