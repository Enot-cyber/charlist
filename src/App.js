import './Styles/App.css';
import './Styles/Charinfo.css';
import './Styles/Statinfo.css'
import Charinfo from './mainbody/Charinfo';
import Charstat from './mainbody/Charstat';

const App = () => {

  return (
    <div className="App">
      <h1>D&D Charlist</h1>
      <div className='charinfo'>
        <div>
          <div className='nameblock'>
            <input
              className='info_input'
              type='text'
              name='charname'
              placeholder='Enter Character name'
            />
          </div>
          <div className='nameblocktext'>Character name</div>
        </div>
        <div className='infoblock'>
          <Charinfo />
        </div>
      </div>
      <div className='mainbody'>
        <div>
          <div>
          <Charstat />
          </div>
          <div>
            
          </div>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default App;
