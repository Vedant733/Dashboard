import React from 'react'
import NavTag from './NavTag'

function Sidebar() {
    return (
        <div style={{ background: '#202020', width: '400px', background: '', height: '706px' }}>
            <NavTag tag="Dashboard" color="white" />
            <div style={{ background: '#202020', color: '#a9a9a9', padding: '1em', borderBottom: '1px #a9a9a9 solid' }}>Configure</div>
            <NavTag tag="Identity Provider" />
            <NavTag tag="User Stores" />
            <NavTag tag="Applications" />
            <NavTag tag="Policies" />
            <NavTag tag="Multi-Factor Authentication" />
            <div style={{ background: '#202020', color: '#a9a9a9', padding: '1em', borderBottom: '1px #a9a9a9 solid' }}>Manage</div>
            <NavTag tag="Users" />
            <NavTag tag="Groups" />
            <NavTag tag="Audit" />
            <NavTag tag="Licensing" />
        </div>
    )
}

export default Sidebar