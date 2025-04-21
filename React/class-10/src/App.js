import { createContext } from 'react';
import ComponentA from './components/ComponentA';
import AuthForm from './components/AuthForm';

// create

const data = createContext()
const theme = createContext()

function App() {
  const user = {
    name: "Ruhama",
    email: "malikruhama7@gmail.com",
    age: 57
  }

  const mytheme = "dark"


  return (

    // provide

    <>

<AuthForm/>


      <theme.Provider value={mytheme}  >
        <data.Provider value={user}  >

          <ComponentA />

        </data.Provider>
      </theme.Provider>


    </>
  );
}

export default App;
export { data, theme }


//// create , provide , consume
//// create , provide , useContext