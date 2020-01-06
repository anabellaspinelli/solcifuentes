import React from 'react'

const ReadingTime = ({ minutes, small }) => (
  small ?
    <small style={{ color: "gray", fontStyle: "italic" }}>{` – ${parseInt(minutes, 10)} minutos de lectura`}</small>
    : <span style={{ color: "gray", fontStyle: "italic" }}>{` – ${parseInt(minutes, 10)} minutos de lectura`}</span>
)

export default ReadingTime
