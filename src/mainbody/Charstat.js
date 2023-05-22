import React, { useState } from "react";

export default function Charstat() {
  const [str, setStr] = useState("");
  const [dex, setDex] = useState("");
  const [con, setCon] = useState("");
  const [int, setInt] = useState("");
  const [wis, setWis] = useState("");
  const [cha, setCha] = useState("");

  return (
    <div className="characteristicblock">
      <div className="topstat">
        <div>Strength</div>
        <input
          className="stat_input"
          type="number"
          value={str}
          placeholder="Str"
          onChange={e => setStr(e.target.value)}
        />
        <label className="bonusstat">+{(str-10)/2}</label>
      </div>
      <div>
        <div>Dexterity</div>
        <input
          className="stat_input"
          type="number"
          value={dex}
          placeholder="Dex"
          onChange={e => setDex(e.target.value)}
        />
        <label className="bonusstat">+{(dex-10)/2}</label>
      </div>
      <div>
        <div>Constitution</div>
        <input
          className="stat_input"
          type="number"
          value={con}
          placeholder="Con"
          onChange={e => setCon(e.target.value)}
        />
        <label className="bonusstat">+{(con-10)/2}</label>
      </div>
      <div>
        <div>Intelligent</div>
        <input
          className="stat_input"
          type="number"
          value={int}
          placeholder="Int"
          onChange={e => setInt(e.target.value)}
        />
        <label className="bonusstat">+{(int-10)/2}</label>
      </div>
      <div>
        <div>Wisdom</div>
        <input
          className="stat_input"
          type="number"
          value={wis}
          placeholder="Wis"
          onChange={e => setWis(e.target.value)}
        />
        <label className="bonusstat">+{(wis-10)/2}</label>
      </div>
      <div>Charisma</div>
      <div className="botstat">
        <input
          className="stat_input"
          type="number"
          value={cha}
          placeholder="Cha"
          onChange={e => setCha(e.target.value)}
        />
        <label className="bonusstat">+{(cha-10)/2}</label>
      </div>
    </div>
  );
}
