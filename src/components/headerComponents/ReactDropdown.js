import React, { Component } from 'react'
import * as particles from "../../data/particlesConfig"
import "../../Bulma.sass"

import Select from 'react-select' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default class particlesSettings extends Component {
    state = {
        collapsed: true        
    }

    handleChange = (value) => {
        console.log(value)
        this.setState({config: value.value})
    }

    render() {
        const options = [
            { value: 'snow', label: 'Snow' },
            { value: 'stars', label: 'Stars' }           
          ]
          const styles = {
            width: "auto",
            marginLeft: "75%",
            marginTop: "-1%"
          }
        return (
            <div style={styles}>
                <Select options={options} placeholder="Set Particles" onChange={this.handleChange}/>
            </div>
        )
    }
}