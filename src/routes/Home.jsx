import React from 'react'
import { CoinSearch } from '../containers/CoinSearch'

export const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins={coins}/>
    </div>
  )
}
