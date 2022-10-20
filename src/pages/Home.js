import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home({ data, setData }) {
    const nav = useNavigate()
    const handleChange = (e) => {
        setData(prev => {
            return { ...prev, [e.target.name]: e.target.value, }
        })
    }

    return (
        <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={(e) => {
            e.preventDefault();
            nav("/dashboard")
        }
        }>
            <input onChange={handleChange} placeholder="Name" name='name' value={data.name} required style={{ margin: '1em', width: '300px', padding: '.6em', fontSize: '14px' }} />
            <input onChange={handleChange} placeholder="Number Of Users" name='noOfUsers' value={data.noOfUsers} required style={{ margin: '1em', width: '300px', padding: '.6em', fontSize: '14px' }} />
            <input onChange={handleChange} placeholder="Number Of Failed Logins" name='noOfFailedLogins' value={data.noOfFailedLogins} required style={{ margin: '1em', width: '300px', padding: '.6em', fontSize: '14px' }} />
            <input onChange={handleChange} placeholder="Number Of Groups" name='noOfGrp' value={data.noOfGrp} required style={{ margin: '1em', width: '300px', padding: '.6em', fontSize: '14px' }} />
            <input onChange={handleChange} placeholder="Number Of Active Users" name='noOfActiveUsers' value={data.noOfActiveUsers} required style={{ margin: '1em', width: '300px', padding: '.6em', fontSize: '14px' }} />
            <input onChange={handleChange} placeholder="Co-Ordinate 1" name='c1' value={data.c1} required style={{ margin: '1em', width: '300px', padding: '.6em', fontSize: '14px' }} />
            <input onChange={handleChange} placeholder="Co-Ordinate 2" name='c2' value={data.c2} required style={{ margin: '1em', width: '300px', padding: '.6em', fontSize: '14px' }} />
            <button style={{ width: 'fit-content', padding: '1em', margin: '1em', fontSize: '14px' }}
                type="submit"
            >Submit And Goto Dashboard</button>
        </form>
    )
}

export default Home