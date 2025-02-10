import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

    // const [data,setData] = React.useState(null)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data);
    //       setData(data);

    //     }
    //             )       
    // })

  return (
    <div className='text-center m-4 bg-gray-400 text-3xl
    '>Github</div>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json();
}