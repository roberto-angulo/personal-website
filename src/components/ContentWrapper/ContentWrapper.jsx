import React from "react"
import PropTypes from "prop-types"
//import DataContext from "../../context"
import CSS from "./contentWrapper.module.scss"

const ContentWrapper = ({ content, title }) => {
  //const { sections } = useContext(DataContext)

  //console.log(props.content)
  return (
    <article data-test="ContentWrapper" className={CSS.ContentWrapper}>
      <h3 data-test="ContentWrapperTitle">{title}</h3>
      <div data-test="ContentWrapperContent">{content}</div>
    </article>
  )
}
ContentWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}
export default ContentWrapper
