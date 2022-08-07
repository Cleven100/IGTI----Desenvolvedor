import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import TextInput from './components/TextInput'
import DateInput from './components/DateInput'

export default function App() {

  const [name, setName] = useState('Cleven');
  const [birthDate, setBirthDate] = useState('2021-04-30');

  function handleNameChange(newName) {
    setName(newName)
  }

  function handleBirthDateChange(newDate) {
    setBirthDate(newDate)
  }


  return (
    <>
      <Header size="large">Component Header - hello-react</Header>
      <Main>
       <TextInput  labelDescription="Digite o seu nome: " inputValue={name} onInputChange={handleNameChange}/>
        <p>Meu nome é {name}</p>
        <DateInput labelDescription="Digite a sua data de nascimento"
        inputValue={birthDate} 
        onInputChange={handleBirthDateChange}
        />
      </Main>
      
 
    </>
  )
}
