import React, { useState } from 'react'

const App = () => {
    const [hori, setHori] = useState(0);
    const [veri, setVeri] = useState(0);
    const [blur, setBlur] = useState(0);
    const [color, setColor] = useState("black");
    const [checkon, setcheckon] = useState(false)
  return (
    <div className="app">
        <div className="controls">
            <div>
            <label >Horizontal Length</label>
            <input type="range" min="-200" max="200" value={hori} onChange={(e)=>setHori(e.target.value)} />
            </div>

            <div>
            <label >Vertical Length</label>
            <input type="range" min="-200" max="200" value={veri} onChange={(e)=>setVeri(e.target.value)} />
            </div>
            <div>
            <label >Blur</label>
            <input type="range" min="0" max="200" value={blur} onChange={(e)=>setBlur(e.target.value)} />
            </div>
            <div className="switch">
                <label >Outline
                <input type="checkbox" checked={checkon} onChange={()=>setcheckon(!checkon)} />
                <span className="lever"></span>
                inset
                </label>
            </div>

            <label >Color</label>
            <input type="color" value={color} onChange={(e)=>setColor(e.target.value)} />

        </div>
        <div className="output">
            <div className="box" style={{boxShadow:`${checkon ? "inset" : ""} ${hori}px ${veri}px ${blur}px ${color}`}}>
                <p>Box-Shadow: {hori}px {veri}px {blur}px {color}</p>
            </div>
        </div>
    </div>
  )
}

export default App