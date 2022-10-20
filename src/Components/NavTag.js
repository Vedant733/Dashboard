import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function NavTag({ tag, color }) {
    return (
        <div style={{ font: `normal normal 600 24px/33px Open Sans`, padding: '.6em', paddingLeft: '2em', color: color ? "black" : "#a9a9a9", background: color ? color : "#202020", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>{tag} <ArrowForwardIosIcon /></div>
    )
}

export default NavTag