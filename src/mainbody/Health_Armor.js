import React, { Component } from 'react'

export default class Health_Armor extends Component {
    render() {
        return (
            <div className='hpac_stat'>
                <div className='armor_stat'>
                    <input type='text'
                        name='test'
                        placeholder="I'm alive here"
                    />
                </div>
                <div className='hp_stat'>
                    Health Point
                </div>
            </div>
        )
    }
}
