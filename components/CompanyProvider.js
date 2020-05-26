import React, { useReducer, useContext } from 'react'

const CompanyStateContext = React.createContext()
const CompanySetStateContext = React.createContext()

const reducer = (state, action) => {
  switch(action.type){
    case 'SET':
      return action.payload
    case 'GET':
      return state
    default:
      throw new Error(`Unknown action: ${action.type}`)
  }
}

export const CompanyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [])

  return(
    <CompanySetStateContext.Provider value={dispatch}>
      <CompanyStateContext.Provider value={state}>
        { children }
      </CompanyStateContext.Provider>
    </CompanySetStateContext.Provider>
  )
}

export const useCompany = () => useContext(CompanyStateContext)
export const setCompany = () => useContext(CompanySetStateContext)