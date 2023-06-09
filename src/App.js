import "./Styles/App.css";
import "./Styles/Charinfo.css";
import "./Styles/Statinfo.css";
import "./Styles/HpAc.css";
import Charinfo from "./mainbody/Charinfo";
import Charstat from "./mainbody/Charstat";
import Health_Armor from "./mainbody/Health_Armor";

const App = () => {
  return (
    <div className="App">
      <h1>D&D Charlist</h1>
      <div className="charinfo">
        <div>
          <div className="nameblock">
            <input
              className="info_input"
              type="text"
              name="charname"
              placeholder="Enter Character name"
            />
          </div>
          <div className="nameblocktext">Character name</div>
        </div>
        <div className="infoblock">
          <Charinfo />
        </div>
      </div>
      <div className="mainbody">
        <div className="statblock">
          <div>
            <Charstat />
          </div>
          <div>
            
          </div>
        </div>
        <div>
          <Health_Armor />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
