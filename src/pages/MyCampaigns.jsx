import React from 'react'
import FilterSection from '../components/FilterSection'
import ScoreCard from '../components/ScoreCard'
import Statistics from '../components/Statistics'
import Table from '../components/Table'

const MyCampaigns = () => {
    return (
        <>
        <div className="scoreCard"><ScoreCard /> </div>
      <div className="statistics"><Statistics /></div>
      <div className="filterSection"><FilterSection/> </div>
      <div className="table"> <Table/></div>
        </>
    )
}

export default MyCampaigns
