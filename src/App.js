
import './App.css';
import sky from './01.jpeg';
import lake from './02.jpg';
import mountain from './03.jpeg';
import fox from './04.jpeg';
import clouds from './05.jpeg'

function App() {
  const user ={
    firstname:'Joe',
    lastName:'Biden',
  }
  
  const blocks={
    width:"20%",
    height: "100vh",
    overflow:"hidden",
    position:"relative"

  }
  const getUserName = ({firstname , lastName}) =>{
    return ` ${firstname} ${lastName}`
  }
  
  const age = 20;
  const condRendering = age>=18 ? <div>Adult</div>:<div>Teen</div>
  const firstText = <h1>First Text</h1>
  return (
    <div class="divstyle">
      <div>
        <img src={sky}/>
        <p>HEY</p>
      </div>
      <div>
        <img src={lake}/>
        <p>LET'S</p>
      </div>
      <div>
        <img src={mountain}/>
        <p>GIVE</p>
      </div>
      <div>
        <img src={fox}/>
        <p>ALL</p>
      </div>
      <div>
        <img src={clouds}/>
        <p>YOU CAN</p>
      </div>
    </div>
  );
}

export default App;
