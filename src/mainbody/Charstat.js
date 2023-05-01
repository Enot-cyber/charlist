import React, { Component } from 'react'

export default class Charstat extends Component {
  render() {
    return (
      <div className='characteristicblock'>
        <div className='topstat'>
          <input
            className='stat_input'
            type="number"
            name="str"
            placeholder='Str'
          />
          <div>Strength</div>
        </div>
        <div>
          <input
            className='stat_input'
            type="number"
            name="dex"
            placeholder='Dex'
          />
          <div>Dexterity</div>
        </div>
        <div>
          <input
            className='stat_input'
            type="number"
            name="con"
            placeholder='Con'
          />
          <div>Constitution</div>
        </div>
        <div>
          <input
            className='stat_input'
            type="number"
            name="int"
            placeholder='Int'
          />
          <div>Intelligent</div>
        </div>
        <div>
          <input
            className='stat_input'
            type="number"
            name="wis"
            placeholder='Wis'
          />
          <div>Wisdom</div>
        </div>
        <div className='botstat'>
          <input
            className='stat_input'
            type="number"
            name="cha"
            placeholder='Cha'
          />
          <div>Charisma</div>
        </div>
      </div>
    )
  }
}
