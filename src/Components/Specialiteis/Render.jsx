import React from 'react'
import Specialities from './Specialities'
import "./Render.scss"
import Singleastro from '../Astrotalk/Singleastro'

export default function Render() {
  return (
    <div className="render">
        <div className="spec">
        <Specialities/>
        </div>
        <div className="liveastro">
            <h1>Online Astrologers</h1>
            <div className="singleastrodiv">
            <Singleastro/>
            <Singleastro/>
            <Singleastro/>
            <Singleastro/>
            </div>
        </div>
    </div>
  )
}
