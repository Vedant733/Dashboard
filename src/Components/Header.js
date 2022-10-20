import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
function Header({ name }) {
    return (
        <div style={{ height: '120px', background: '#202020', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '2em', paddingTop: 0, paddingBottom: 0 }}>
            <h1 style={{ color: 'white' }}>LOGO</h1>
            <div>
                <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                    <h3>{`Hi, ${name}`}</h3><AccountCircleOutlinedIcon style={{ marginLeft: '.3em', fontSize: '40px' }} />
                </div>
            </div>
        </div >
    )
}

export default Header