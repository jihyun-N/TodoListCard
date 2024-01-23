export default function InputBox({
    title,
    content,
    AddButton,
    onChangeTitle,
    onChangeContent,
  }) {
    return (
      <div>
        <label>
          제목 : <input onChange={onChangeTitle} value={title} />
        </label>
        <label>
          내용 : <input onChange={onChangeContent} value={content} />
        </label>
        <button onClick={AddButton}>추가하기</button>
      </div>
    );
  }