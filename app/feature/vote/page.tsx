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
interface VoteCountI {
  [design: string]: number;
}

function Graph() {
  const [votedState, setVoteState] = useState<VotedState[]>([]);
  const [unvote, setUnvote] = useState<UnVotedState[]>([]);
  const [voteCount, setVoteCount] = useState<VoteCountI>({});

  async function fetchData() {
    const up1 = await axios.get('https://script.google.com/macros/s/AKfycbzI-dUR1wtq3eFBcodTt6xKSemdphRAb3ucIlzA9HOUa_1a11V9aAjTlbg8bX2146foEg/exec');
    setVoteState(up1.data.data)
    const up2 = await axios.get('/api/feature/vote')

    const setA = new Set(up1.data.data.map((t: any) => t.email));
    const filteredB = up2.data.data.filter((item: any) => !setA.has(item.email));
    setUnvote(filteredB)
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(()=>{
    const count: VoteCountI = {};

    votedState.forEach((t:any) => {
      if (count[t.vote]) {
        count[t.vote]++;
      } else {
        count[t.vote] = 1;
      }
    });
    setVoteCount(count);  
  },[votedState])
  return (
    <div className="container flex justify-center items-center min-h-[100vh] flex-wrap gap-4">
    {Object.keys(voteCount).length > 0?
        <Chart data={voteCount} />
        :<h2 className='text-[#fff]'>Loading Gharp...</h2> }
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
