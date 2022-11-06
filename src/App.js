import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  
  const deleteFromList = (id) => {
    const list = notes.filter(item => item.id !== id)  
    setNotes(list)
  }
  return (
    <div className="App" >
      <div className='container'>
      <div className='control-details'>
        <AddForm setNotes = {setNotes}/>
      </div>
      <div className='notes-list'>{notes.map(i => <Note key={i.id} id={i.id} note={i.note} deleteFromList={deleteFromList}/>)}</div>
    </div>
    </div>
  );

  }

const Note = ({id, note, deleteFromList}) => {
  const [mark, setMark] = useState(false);
  const handleClick = () => {
    deleteFromList(id);
  }
  return (
    <div className='note' style={(mark) ? {background: "#5858859c"} : null}>
      <input type="checkbox" checked={mark} onChange={()=>setMark(!mark)} />
      <p>{note}</p>
      <button onClick={handleClick}>delete</button>
    </div>
  )
} 


const AddForm = ({setNotes}) => {
  const [item, setItem] = useState('');
  const handleChange = (e) => {
    setItem(e.target.value);
  }
  const handleClick = () => {
    if(item === '')
      return;       
    setNotes(prev => [...prev, {id: Math.round(Math.random() * 1000), note: item}])
    setItem('');
  }
  return (
    <>
      <div>
        <label>Right your notes</label>
        <input type="text" placeholder="add note here" value={item} onChange={handleChange}/>
      </div>
      <button onClick={handleClick}>add</button>
    </>
  )
}
export default App;
