import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'
import MainSection from '../Components/MainSection'
import Sidebar from '../Components/Sidebar'

function Dashboard({ data }) {
    const nav = useNavigate();

    return (
        <div>
            <Header name={data.name} />
            <div style={{ width: '100%', display: 'flex', background: "#202020" }}>
                <Sidebar />
                <div>
                    <MainSection noOfUsers={data.noOfUsers} noOfFailedLogins={data.noOfFailedLogins} noOfGrp={data.noOfGrp} noOfActiveUsers={data.noOfActiveUsers} c1={data.c1} c2={data.c2} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard