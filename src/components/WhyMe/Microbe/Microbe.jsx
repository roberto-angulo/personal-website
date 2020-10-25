import React from "react"
import CSS from "./Microbe.module.scss"
const MyCrobe = ({ background, textSkill, className = "" }) => {
  const backgroundStyles = colorMicrobe ? { style: { background } } : null
  const mainComponentCss = `${CSS.Microbe} ${className}`
  return (
    <div className={mainComponentCss} {...backgroundStyles}>
      {textSkill && <p>{textSkill}</p>}
    </div>
  )
}
export default MyCrobe
