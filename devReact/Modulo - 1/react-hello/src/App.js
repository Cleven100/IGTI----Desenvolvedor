import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {

  const [name, setName] = useState('Cleven');

  function handleNameChange(event) {
    const newName = event.currentTarget.value;
    setName(newName)
  }

  return (
    <>
      <Header size="large">Component Header - hello-react</Header>
      <Main>
        <div className="flex flex-col my-4">
          <label className="text-sm mb-1" htmlFor="inputName">Digite o seu nome: </label>
          <input autoFocus id="inputName" className="border p-1" type="text" value={name} onChange={handleNameChange}/>
        </div>

        <p>Meu nome é {name}</p>
      </Main>

    </>
  )
}
