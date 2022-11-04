import './App.css';
import { useState } from 'react';

function App() {
  const [item, setItem] = useState('');
  const [notes, setNotes] = useState([]);
  
  const handleClick = () => {
        if(item === '')
          return;       
        setNotes(prev => [...prev, {id: Math.round(Math.random() * 1000), note: item}])
        setItem('');

  }
  const handleChange = (e) => {
    setItem(e.target.value);
  }
  const deleteFromList = (id) => {
    console.log('sigo')
    const list = notes.filter(item => item.id !== id)  
    setNotes(list)
  }
  return (
    <div className="App" >
      <div className='container'>
      <div className='control-details'>
        <div>
          <label>Right your notes</label>
          <input type="text" value={item} onChange={handleChange}/>
        </div>
        <button onClick={handleClick}>add</button>
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
export default App;
