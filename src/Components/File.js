import React, { Component } from 'react'
import Img from '../images/file-icon.png'
import '../App.css';


export default class File extends Component {
    render() {
        return (
            <div>
                <img class="file-img" src={Img}></img> 
            </div>
        )
    }
}
