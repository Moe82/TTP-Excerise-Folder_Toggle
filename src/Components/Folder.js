import React, { Component } from 'react'
import Img from '../images/folder.png'
import '../App.css';


export default class Folder extends Component {
    render() {
        return (
            <div>
                <img class="folder-img" src={Img}></img> Home
            </div>
        )
    }
}
