import React, { useState } from "react";

export default function Charinfo() {
  const [lvl, setLvl] = useState('');

  return (
    <div>
      <div className="insideblocks">
        <div>
          <input
            className="info_input"
            type="text"
            name="charclass"
            placeholder="Enter character class"
          />
          <input
            className="info_input"
            type="number"
            placeholder="Enter Character level"
            value={lvl}
            onChange={e => setLvl(e.target.value)}
          />
          <input
            className="info_input"
            type="text"
            name="playername"
            placeholder="Enter Character player name"
          />
        </div>
        <div className="blocktext">
          <label>Class </label>
          <label>Level </label>
          <label>Player Name</label>
        </div>
        <div className="insideblocks">
          <input
            className="info_input"
            type="text"
            name="charrace"
            placeholder="Enter Character race"
          />
          <input
            className="info_input"
            type="text"
            name="charbackground"
            placeholder="Enter character background"
          />
          <input
            className="info_input"
            type="text"
            name="charalignment"
            placeholder="Enter Character alignment"
          />
        </div>
        <div className="blocktext">
          <label>Race </label>
          <label>Background </label>
          <label>Alignment</label>
        </div>
      </div>
    </div>
  );
}
