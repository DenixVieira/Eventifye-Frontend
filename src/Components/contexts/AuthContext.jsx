import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}
