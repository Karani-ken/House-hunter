import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Table from './Table'
const MyAgents = () => {
    const [agents, setAgents] = useState(null)

    useEffect(() => {
        fetch('http://localhost:4000/agents/allusers')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setAgents(data)

            })
    },[])


    return (
        <div>
            <div className='flex justify-center items-center'>
                <h1 className='m-2 text-lg font-black'>Admin Dashboard</h1>
                <button className='bg-emerald-600 text-xl h-11 text-white rounded-lg border-2
        m-4 border-red-300'>
                    <Link to="adduser">Add Agent</Link>
                </button>
            </div>

            <div className='mx-2 px-6 text-center'>
                <table className='w-full m-3'>
                    <thead className='bg-gray-50 border-b-2 border-gray-400'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Agent no.</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Agency name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Contacts</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Location</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Address</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Edit</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Delete</th>
                        </tr>
                    </thead>
                   {agents && <Table agents={agents}/>}
                </table>


            </div>

        </div >
    )
}

export default MyAgents