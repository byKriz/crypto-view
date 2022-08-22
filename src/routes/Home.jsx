import React from 'react'
import { CoinSearch } from '../containers/CoinSearch'
import { TrendingCoins } from '../containers/TrendingCoins'

export const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins={coins}/>
      <TrendingCoins />
    </div>
  )
}
