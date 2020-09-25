import React from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNewNote((prevValue) => {
      //   if (name === "title") {
      //     return {
      //       title: value,
      //       content: prevValue.content,
      //     };
      //   } else if (name === "content") {
      //     return {
      //       title: prevValue.title,
      //       content: value,
      //     };
      //   }

      return { ...prevValue, [name]: value };
    });
  }

  function handleClick(event) {
    props.onAdd(newNote);
    setNewNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button type="submit" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
