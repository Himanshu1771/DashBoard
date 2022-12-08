import React from 'react'
import Cards from '../Cards/Cards'
import '../Maindash/Main.css'
import Table from '../Table/Table'

const Main = () => {
  return (
  <div className="Maindash">
    <h1>Dashboard</h1>
    <Cards/>
    <Table/>
  </div>
  )
}

export default Main