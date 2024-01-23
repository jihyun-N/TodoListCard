import InputBox from "./InputBox";
import { useState } from "react";

export default function TodoListPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [todoCard, setTodoCard] = useState([]);
  
    const onChangeTitle = (event) => {
      setTitle(event.target.value);
      console.log("제목 =>", event.target.value);
    };
  
    const onChangeContent = (event) => {
      setContent(event.target.value);
      console.log("내용 =>", event.target.value);
    };
  
    const AddButton = () => {
      const newCard = {
        id: todoCard.length + 1,
        title,
        content,
        done: false,
      };
      setTodoCard([...todoCard, newCard]);
      setTitle("");
      setContent("");
    };
  
    const DeleteButton = (id) => {
      const temp = todoCard.filter((card) => card.id !== id);
      setTodoCard([...temp]);
    };
  
    const DoneButton = (id) => {
      const temp = todoCard.map((card) => {
        if (card.id === id) {
          card.done = !card.done;
          console.log(!card.done);
        }
        return card;
      });
      setTodoCard([...temp]);
    };
  
    return (
      <div>
        <InputBox
          title={title}
          content={content}
          AddButton={AddButton}
          onChangeTitle={onChangeTitle}
          onChangeContent={onChangeContent}
        />
        <div>
          <span>Working...</span>
          {todoCard.map((card) =>
            !card.done ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid black",
                }}
              >
                <span>{card.title}</span>
                <span>{card.content}</span>
                <button onClick={() => DoneButton(card.id)}>완료</button>
                <button onClick={() => DeleteButton(card.id)}>삭제</button>
              </div>
            ) : null
          )}
        </div>
        <div>
          <span>Done..</span>
          {todoCard.map((card) =>
            card.done ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid black",
                }}
              >
                <span>{card.title}</span>
                <span>{card.content}</span>
                <button onClick={() => DoneButton(card.id)}>취소</button>
                <button onClick={() => DeleteButton(card.id)}>삭제</button>
              </div>
            ) : null
          )}
        </div>
      </div>
    );
  }