import React from 'react'

interface MatchCardProps {
    date: string
    time: string
    team1: string
    team2: string
}

const MatchCard: React.FC<MatchCardProps> = ({ date, time, team1, team2 }) => {
  return (
    <div className="flex flex-col items-center justify-center w-[200px] shrink-0 bg-gray-900 text-white rounded-lg p-4 shadow-md">
        <div className="flex w-full item-center justify-between border-b-1 border-gray-600 pb-2">
            <p>{time}</p>
            <p>{date}</p>
        </div>
        <div className="flex my-2 flex-col w-full">
            <div>{team1}</div>
            <div>{team2}</div>
        </div>
        
    </div>
  )
}

export default MatchCard