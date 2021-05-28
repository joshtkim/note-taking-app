import React, { useState } from 'react'
import { AiOutlineFileAdd } from 'react-icons/ai'

const ChangeNote = ({ handleAddNote }) => {
  const [text, setText] = useState('')
  const [charLimit, setCharLimit] = useState(255)

  let handleChange = (e) => {
    if(charLimit - e.target.value.length >= 0) {
      setText(e.target.value);
    }
  }

  let handleClick = () => {
    handleAddNote(text);
    setText('');
  }

  return (
    <div className="edit-note add-note">
      <textarea rows="10" value={text} onChange={handleChange} placeholder="type new note">
      </textarea>
      <div className="note-btns">
        <span>{charLimit - text.length}</span>
        <button onClick={handleClick}><AiOutlineFileAdd /></button>
      </div>
    </div>
  )
}

export default ChangeNote
