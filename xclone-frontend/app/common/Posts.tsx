import React from 'react'
import PostProps from "../components/PostsProps"
import { Ellipsis } from 'lucide-react'

const Posts = () => {
  return (
    <div className="w-full">
        <PostProps Icons={<Ellipsis/>} Name='Maxwell Edunfuke' UserName='web3Threat' time='-6h' TextContent='This is a sample post content.' ImageContent='' comment='28' tweet='39' likes='599' Views='900'/>
        <PostProps Icons={<Ellipsis/>} Name='David Chukwuchebem' UserName='dextrus001' time='-6h' TextContent='This is a sample post content.' ImageContent='' comment='300' tweet='239' likes='509' Views='10k' />
        <PostProps Icons={<Ellipsis/>} Name='Chiboy Desmond' UserName='chiboy' time='-6h' TextContent='This is a sample post content.' ImageContent='' comment='248' tweet='399' likes='199' Views='500' />
        <PostProps Icons={<Ellipsis/>} Name='Azeez Mumuni' UserName='Azcodes' time='-6h' TextContent='This is a sample post content.' ImageContent='' comment='58' tweet='94' likes='431' Views='800'/>
        <PostProps Icons={<Ellipsis/>} Name='ibeh Promise' UserName='ProxyTech' time='-6h' TextContent='This is a sample post content.' ImageContent='' comment='400' tweet='90' likes='700' Views='90'/>
        <PostProps Icons={<Ellipsis/>} Name='Idowu Farouk' UserName='idosworld' time='-6h' TextContent='This is a sample post content.' ImageContent='' comment='20' tweet='30' likes='1.9k' Views='9k'/>

    </div>
  )
}

export default Posts