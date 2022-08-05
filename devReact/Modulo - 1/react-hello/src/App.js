import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  console.log('Teste no console do navegador');

  return (
    <>
     <Header size="large">Component Header - hello-react</Header> 
     <Main>
       <input className="border" type="text" />
       <p>Meu nome é teste 52</p>
     </Main>
  
    </>
  )
}
