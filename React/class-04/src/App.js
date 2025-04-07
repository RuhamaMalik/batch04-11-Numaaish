import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import List from './components/List';
import Img1 from "./assets/img1.jpeg";
import StateComponent from './components/StateComponent';

function App() {
  return (
    <div className="App">

{/* <img src='./assets/img1.jpeg' /> */}
<img src={Img1} height={400} width={800} />
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUh_oqPClIzvcef_xYsw7RMuRtcJAfh5l1AP1cuLFVUkgcyjYZwmDk7osqcYYEpuvRvEY&usqp=CAU' /> 
     <ComponentA/>
     <ComponentB/>

<StateComponent/>

     <List />



    </div>
  );
}

export default App;
