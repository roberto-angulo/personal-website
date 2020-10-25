import gsap from "gsap"
import React, { useEffect, useRef } from "react"
import CSS from "./SkillsLab.module.scss"
const SkillsLab = ({ className, colorsSkills, skillsBubbles }) => {
  const defaultRefLiquid = document.querySelector(`[class="${CSS.Liquid}"]`)
  const bubblesRef = useRef(defaultRefLiquid)
  const CSSComponent = `${CSS.SkillsLab} ${className}`

  useEffect(() => {
    bubblesRef.current.style.background = colorsSkills
  }, [colorsSkills])

  useEffect(() => {
    console.log("BUBLES: ", skillsBubbles)
    const bubblesToAnimate = bubblesRef.current?.querySelectorAll(
      `[class="${CSS.Bubble}"]`
    )
    bubblesToAnimate &&
      bubblesToAnimate.forEach(
        currentElement => (currentElement.style.background = skillsBubbles)
      )
  }, [skillsBubbles])

  useEffect(() => {
    const bubblesToAnimate = bubblesRef.current?.querySelectorAll(
      `[class="${CSS.Bubble}"]`
    )
    //set timeline
    const timeLine = gsap.timeline()
    // settings animations
    timeLine.fromTo(
      bubblesToAnimate,
      { yPercent: 130 },
      {
        duration: 0.5,
        stagger: 0.3,
        repeat: -1,
        yPercent: -350,
        repeatDelay: 0,
        ease: "SlowMo.ease",
      }
    )
  }, [])
  return (
    <div className={CSSComponent}>
      <div className={CSS.Circle}>
        <div className={CSS.Liquid} ref={bubblesRef}>
          <div className={CSS.Bubble}></div>
          <div className={CSS.Bubble}></div>
          <div className={CSS.Bubble}></div>
          <div className={CSS.Bubble}></div>
        </div>
      </div>
    </div>
  )
}
export default SkillsLab
