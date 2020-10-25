import React from "react"
import MainContainer from "../components/MainContainer/MainContainer"
import MetaHead from "../components/MetaHead/MetaHead"
import DataContext from "../context"
import reducerCallback from "../reducer"
import defaultState from "../appData"

export default function Home() {
  const [sectionsState, dispatchSections] = React.useReducer(
    reducerCallback,
    defaultState
  )
  const dataTopassIn = { sectionsState, dispatchSections }
  return (
    <>
      <MetaHead />
      <DataContext.Provider value={dataTopassIn}>
        <MainContainer />
      </DataContext.Provider>
    </>
  )
}
