import React, { useContext } from "react"
import PropTypes from "prop-types"
import CSS from "./mainContainer.module.scss"
import DataContext from "../../context"
import ContentWrapper from "../ContentWrapper/ContentWrapper"
import CardSkills from "../skills/CardSkills/CardSkills"
import SkillsController from "../skills/SkillsController"

const MainContainer = () => {
  const {
    sectionsState: { sections },
  } = useContext(DataContext)
  const skills = sections.find(element => element.slug === "skills")
  return (
    <main data-test="MainContainer" className={CSS.MainContainer}>
      <SkillsController skillsData={skills} />
    </main>
  )
}
/* MainContainer.propTypes = {
  children: PropTypes.any.isRequired,
} */
export default MainContainer
