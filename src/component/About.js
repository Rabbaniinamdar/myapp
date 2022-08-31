import React, { useState } from 'react'
import '../App.css'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'white',
    backgroundColor: "black",
  })
  const [mybtn, setMybtn] = useState("Enable Light mode")

  const changeMode = () => {
    if (myStyle.color === 'white') {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        borderColor: 'black',

      })
      setMybtn("Enable Darks mode")
    }
    else {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        borderColor: 'white',

      })
      setMybtn("Enable Light mode")

    }
  }
  return (
    <>
      <div className="container about" style={myStyle}>
        <h1>About</h1>
        <div className="part1" style={myStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          commodi perferendis inventore non fuga magni eius voluptatem voluptas.
          Dolorem a qui, ab fugit sed asperiores obcaecati tempore, accusantium
          praesentium maiores ipsam officiis expedita delectus error quas ullam
          Dolorem a qui, ab fugit sed asperiores obcaecati tempore, accusantium
          praesentium maiores ipsam officiis expedita delectus error quas ullam
        </div>
        <div className="part1" style={myStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          commodi perferendis inventore non fuga magni eius voluptatem voluptas.
          Dolorem a qui, ab fugit sed asperiores obcaecati tempore, accusantium
          praesentium maiores ipsam officiis expedita delectus error quas ullam
          Dolorem a qui, ab fugit sed asperiores obcaecati tempore, accusantium
          praesentium maiores ipsam officiis expedita delectus error quas ullam
        </div>
        <div className="part1" style={myStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          commodi perferendis inventore non fuga magni eius voluptatem voluptas.
          Dolorem a qui, ab fugit sed asperiores obcaecati tempore, accusantium
          praesentium maiores ipsam officiis expedita delectus error quas ullam
          Dolorem a qui, ab fugit sed asperiores obcaecati tempore, accusantium
          praesentium maiores ipsam officiis expedita delectus error quas ullam
        </div>
      </div>
      <button onClick={changeMode} className="btn" style={myStyle}>{mybtn}</button>
    </>
  )
}
