function Footer(props) {
  const btn = [
    {
      id: 1,
      name: "Fillter All",
      handle_Click: () => props.fillAll(),
    },
    {
      id: 2,
      name: "Fillter Remove",
      handle_Click: () => props.fillRemove(),
    },
    {
      id: 3,
      name: "Fillter Checked",
      handle_Click: () => props.fillChecked(),
    },
    {
      id: 4,
      name: "Fillter No Checked",
      handle_Click: () => props.fillNoChecked(),
    },
  ];
  return (
    <div className="footer">
      {btn.map((item, index) => (
        <button key={index} onClick={item.handle_Click}>
          {item.name}
        </button>
      ))}
    </div>
  );
}
export default Footer;
