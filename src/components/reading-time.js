import React from 'react'

const ReadingTime = ({ minutes }) => (
  <small style={{ color: "gray", fontStyle: "italic" }}>{` – ${parseInt(minutes, 10)} minutos de lectura`}</small>
)

export default ReadingTime
