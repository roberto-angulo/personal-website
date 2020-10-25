import React, { useRef, useState, useEffect } from "react"
import CSS from "./Thermomether.module.scss"
import globalCss from "../../styles/_utilities.module.scss"
import gsap from "gsap"
const Thermomether = ({
  skillset,
  colorsSkills,
  selectingSkillHandler,
  bubblesColorsSkills,
}) => {
  const activeRef = useRef(null)
  const [currentActiveSkill, setCurrentActiveSkill] = useState(0)
  const colorSelection = color => {
    setCurrentActiveSkill(color)
    selectingSkillHandler(colorsSkills[color], bubblesColorsSkills[color])
  }
  return (
    <section className={CSS.Thermomether}>
      {skillset.map(({ itemTitle, itemContent }, index) => (
        <div key={`skill_${index}`}>
          <div
            className={`${CSS.BulletItem} ${globalCss.TextCenter}`}
            style={{ background: colorsSkills[index] }}
            onClick={() => colorSelection(index)}
            ref={activeRef}
          >
            {index + 1}
          </div>
          <div
            className={`${CSS.ContentWrapper} ${
              currentActiveSkill === index ? CSS.Active : ""
            }`}
          >
            {itemTitle && <h3>{itemTitle}</h3>}
            {itemContent && <p>{itemContent}</p>}
          </div>
        </div>
      ))}
    </section>
  )
}
export default Thermomether
