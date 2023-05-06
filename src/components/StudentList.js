import { useState } from "react";
import FormAdd from "./FormAdd";
import uuid from "react-uuid";
import Student from "./Student";
import FormEdit from "./FormEdit";
import Footer from "./Footer";
const getList = (stuList, flag) => {
  if (flag === "fillAll") {
    return stuList;
  } else if (flag=== "fillChecked") {
    return stuList.filter((item) => !item.isComplete);
  } else if (flag === "fillNoChecked") {
    return stuList.filter((item) => item.isComplete);
  } else {
    return stuList;
  }
};
function StudentList() {
  const [editId, setEditId] = useState("");
  const [flag, setFlag] = useState("fillAll");
  let [list, setList] = useState([
    {
      id: 1,
      name: "Lê Văn Cún",
      isComplete: false,
    },
    {
      id: 2,
      name: "Mai Thị Heo",
      isComplete: false,
    },
    {
      id: 3,
      name: "Bành Thị Tèo",
      isComplete: true,
    },
  ]);
  // console.log(list);
  const addList = (textName) => {
    setList([...list, { id: uuid(), name: textName, isComplete: false }]);
  };
  const deleteList = (id) => {
    const newList = list.filter((stu) => stu.id !== id);
    setList(newList);
  };
  const editList = (id, name) =>
    setList(
      list.map((value) =>
        value.id === id ? { ...value, name: name, isEdit: false } : value
      ),
      setEditId("")
    );
  const toggle_Complete = (id) => {
    setList(
      list.map((value) =>
        value.id === id ? { ...value, isComplete: !value.isComplete } : value
      )
    );
  };
  const toggle_Edit = (id) => {
    setEditId(id);
  };
  const fillAll = () => {
    console.log("ra");
    setFlag("fillAll");
  };
  const fillChecked = () => {
    setFlag("fillChecked");
  };
  const fillNoChecked = () => {
    setFlag("fillNoChecked");
  };
  const FillRemove=()=>{
    const newList=list.filter((item)=>!item.isComplete)
    setList(newList);
  }

  return (
    <div className="studentList">
      <FormAdd addList={addList} />
      {getList(list, flag).map((value, index) => (
        //  value.isEdit ? (
        //   <FormEdit value={value} editList={editList} key={index} />
        // ) :(
        <Student
          student={value}
          deleteList={deleteList}
          key={index}
          toggle_Complete={toggle_Complete}
          toggle_Edit={toggle_Edit}
          editList={editList}
          editId={editId}
        />
      ))}
      <Footer
        fillAll={fillAll}
        fillChecked={fillChecked}
        fillNoChecked={fillNoChecked}
        fillRemove={FillRemove}
      />
    </div>
  );
}
export default StudentList;
