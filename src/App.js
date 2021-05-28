import React, { useState } from 'react'
import './App.css';
import NoteList from './components/NoteList';

// create new note
// 255 character
// edit & delete button
// 6x6 grid ... reactive?
// swap notes by clicking ... needs to be outlined

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: '1st note'
    },
    {
      id: 2,
      text: '2nd note'
    },
    {
      id: 3,
      text: '3rd note'
    }
  ])

  let handleAddNote = (text) => {
    let newNote = {
      id: notes.length + 1,
      text: text
    }
    const newArrayNotes = [...notes, newNote];
    setNotes(newArrayNotes);
  }

  let handleDeleteNote = (id) => {
    const newArrayNotes = notes.filter((note) => note.id !== id);

    setNotes(newArrayNotes)
  }

  let handleEditNote = (id, text) => {
    console.log("edit")
  }

  return (
    <div className="App">
      <NoteList notes={notes} handleAddNote={handleAddNote} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote}/>
    </div>
  );
}

export default App;
