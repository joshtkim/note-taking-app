import React from 'react'
import ChangeNote from './ChangeNote'
import Note from './Note'

const NoteList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote} />
      ))}
      <ChangeNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NoteList
