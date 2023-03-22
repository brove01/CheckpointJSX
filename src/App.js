import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
function App() {
  return (
    <div className="App">
      <header><h1 className='Title'>NOVA <span>Master</span></h1></header>
      <section></section>
      <article>
        <ProfilePhoto/>
        <div className='Hello'>
        <FullName/>
        <Address />
        </div>
        
      </article>
      <footer></footer>
    </div>
  );
}

export default App;
