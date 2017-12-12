import React, { PropTypes } from 'react';
import Note from './Note';
import Edit from '../../components/Edit';


const Notes = ({ notes, laneId, editNote, updateNote, deleteNote }) => {
  return (
    <ul className="notes">
      {notes.map((note, id) => 
        <Note
          id={note.id}
          key={note.id || id}   ///prevent to display error in console that element dosen't have set key propperty value. On first action CREATE_LANES note is empty object, note is filled on CREATE_NOTES. For this reason in CREATE_LENS key value have id of array position.
        >
          <Edit
            editing={note.editing}
            value={note.task}
            onValueClick={() => editNote(note.id)}
            onUpdate={(task) => updateNote({
                ...note,
                task,
                editing: false
              }
            )}
            onDelete={() => deleteNote(note.id, laneId)}
          />
        </Note>
      )}
    </ul>
  );
};

Notes.propTypes = {
  deleteNote: PropTypes.func,
  onUpdate: PropTypes.func,
  laneId: PropTypes.string,
  onValueClick: PropTypes.func,
  notes: PropTypes.array,
};

export default Notes;