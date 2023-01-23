import React, { useState } from 'react';

const PascalTriangle = () => {
    const [rows, setRows] = useState(5);
    const [triangle, setTriangle] = useState([]);

    const generateTriangle = () => {
        let newTriangle = [];
        for (let i = 0; i < rows; i++) {
            newTriangle[i] = new Array(i + 1);
            for (let j = 0; j < i + 1; j++) {
                if (j === 0 || j === i) {
                    newTriangle[i][j] = 1;
                } else {
                    newTriangle[i][j] = newTriangle[i - 1][j - 1] + newTriangle[i - 1][j];
                }
            }
        }
        setTriangle(newTriangle);
    };

    return (
        <>
            <style type='text/css'>
                {`
.bubble{
    background-color: #00bfff; /* sets the background color of the bubble */
    padding: 20px; /* adds padding to the inside of the bubble */
    border-radius: 50%; /* rounds the corners of the bubble */
    box-shadow: 2px 2px 5px rgba(0,0,0,0.5); /* adds a subtle drop shadow to the bubble */
    display:inline-block;
    font-size:1.5em;
    text-align:center;
  }
`}
            </style>
            <div>
                <input
                    type="number"
                    value={rows}
                    onChange={(e) => setRows(e.target.value)}
                />
                <button onClick={generateTriangle}>Generate Triangle</button>
                <br />
                <br />
                <div >
                    {triangle.map((row, index) => (
                        <div key={index}>
                            {row.map((cell, cellIndex) => (
                                <span className="bubble" key={cellIndex}>{cell} </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PascalTriangle;
