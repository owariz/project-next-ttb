'use client'
import React, { useEffect, useState } from 'react'
import Chart from '../../../components/interface/feature/PieChart_vote'
import axios from 'axios'

interface VotedState {
  email: string;
}
interface UnVotedState {
  email: string;
}

function Graph() {
  const [votedState, setVoteState] = useState<VotedState[]>([]);
  const [unvote, setUnvote] = useState<UnVotedState[]>([]);

  async function fetchData() {
    const up1 = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=hUkMcl3Us3mR6y6-yXC6SH9JNNmhlr4KOdIkQe7JAl0XvN69MCEvfrD5wlNJP5KsNjpJwYpfkB17T7hM97A8_pDu7frEGixBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC_1CVvvI7a0MTQcNb_xJ2Sz1GcMapUON0a7I-aLEIpKoYAWwFLKd-P5zFpVN-zjXZtD5axXLUjTYJnsK6TEtIawMeBn2Rj_wdz9Jw9Md8uu&lib=M4-ecmCqi_YwYiq8D3o0XjJJTJkAXYKLq');
    setVoteState(up1.data.data)
    const up2 = await axios.get('/api/feature/vote')

    const setA = new Set(up1.data.data.map((t: any) => t.email));
    const filteredB = up2.data.data.filter((item: any) => !setA.has(item.email));
    setUnvote(filteredB)

  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="container flex justify-center items-center min-h-[100vh] flex-wrap gap-4">
      <Chart></Chart>
      <div className="flex gap-4 flex-wrap justify-center">
        <div className="box">
          <h2 className='text-[#49e223]'>{`Voted (${votedState.length})`}</h2>
          <div className="voted max-h-[500px] overflow-y-scroll">
            {votedState.length ?
              votedState.map((t, i) => (
                <div className="text-[#fff]" key={i}>{t.email}</div>
              ))
              : <h2 className='text-[#fff]'>Loading Data...</h2>
            }
          </div>
        </div>
        <div className="box">
          <h2 className='text-[#f13f3f]'>{`Unvote (${unvote.length})`}</h2>
          <div className="unvote max-h-[500px] overflow-y-scroll">
            {unvote.length && votedState.length ?
              unvote.map((t, i) => (
                <div className="text-[#fff]" key={i}>{t.email}</div>
              ))
              : <h2 className='text-[#fff]'>Loading Data...</h2>
            }
          </div>

        </div>
      </div>
    </div>

  )
}

export default Graph
