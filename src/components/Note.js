import React, { useState } from 'react'
import { AiOutlineDelete, AiOutlineEdit, AiOutlineFileAdd } from 'react-icons/ai'

const Note = ({ id, text, handleDeleteNote }) => {
  const [currentText, setCurrentText] = useState(text)
  const [clicked, setClicked] = useState(false)
  const [charLimit, setCharLimit] = useState(255)

  const handleClick = () => {
    console.log(clicked)
    clicked ? setClicked(false) : setClicked(true)
  }

  let handleDelete = (e) => {
    console.log(id)
    handleDeleteNote(id);
  }

  return (
    <div className={ clicked ? 'note clicked' : 'note not-clicked'} onClick={handleClick}>
      <span>{text}</span>
      <div className="note-btns">
        <span>{charLimit - text.length}</span>
        <button><AiOutlineEdit /></button>
        <button onClick={handleDelete}><AiOutlineDelete /></button>
      </div>
    </div>
  )
}

export default Note
