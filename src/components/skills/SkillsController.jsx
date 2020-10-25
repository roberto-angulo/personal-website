import React, { useState } from "react"
import CSS from "./SkillsController.module.scss"
import PropTypes from "prop-types"
import SkillsLab from "./SkillsLab/SkillsLab"
import globalCss from "../../styles/_utilities.module.scss"
import Thermomether from "../Thermomether/Thermomether"
import {
  bubblesColorsCollection,
  colorsSkillsCollection,
} from "./colorsSkillsSettings"

const SkillsController = ({
  skillsData: {
    title,
    metadata: { icon, metadataTitle, skills },
  },
}) => {
  const textCenterCss = globalCss.TextCenter
  const [colorChosen, setColorChosen] = useState(colorsSkillsCollection[0])
  const [bubblesColors, setBubblesColors] = useState(bubblesColorsCollection[0])
  const selectingSkills = (
    colorSelected = colorChosen,
    colorBubbleSelected = bubblesColors
  ) => {
    setColorChosen(colorSelected)
    setBubblesColors(colorBubbleSelected)
  }
  return (
    <div className={CSS.SkillsController}>
      <div className={CSS.SkillsColumns}>
        {title && (
          <h2 data-test="skillsTitle" className={textCenterCss}>
            {title.replace(/\s/, "_")}
          </h2>
        )}
        <>
          <SkillsLab colorsSkills={colorChosen} skillsBubbles={bubblesColors} />
          <Thermomether
            skillset={skills}
            colorsSkills={colorsSkillsCollection}
            bubblesColorsSkills={bubblesColorsCollection}
            selectingSkillHandler={selectingSkills}
          />
        </>
      </div>
    </div>
  )
}
SkillsController.propTypes = {
  skillsData: PropTypes.object.isRequired,
}
export default SkillsController
