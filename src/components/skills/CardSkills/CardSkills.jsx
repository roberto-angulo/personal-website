import React from "react"
import CSS from "./CardSkills.module.scss"

const CardSkills = ({ skill: { title, icon, content } }) => {
  const inlineBackgroundSvg = { backgroundImage: `url("${icon}")` }
  return (
    <div className={CSS.CardSkills} data-test="cardSkills">
      <div>
        <div className={CSS.IconWrapper}>
          <p className={CSS.Icon} style={inlineBackgroundSvg}></p>
        </div>
        <div className={CSS.TitleWrapper}>
          <h4 className={CSS.Title}>{title}</h4>
        </div>
      </div>
      <div className={CSS.ContentWrapper}>
        <p>{content}</p>
      </div>
    </div>
  )
}
export default CardSkills
