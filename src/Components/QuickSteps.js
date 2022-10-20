import React from 'react'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
function QuickSteps({ text }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', color: 'white', background: `#62D87A 0% 0% no-repeat padding-box`, textAlign: 'center', width: 'fit-content', paddingLeft: '1.3em', paddingRight: '1.3em', height: '44.28px', clipPath: `polygon(0 0, 90% 1%, 100% 50%, 90% 100%, 0 100%, 10% 51%)` }}>
            <div style={{ marginRight: '10px' }}>{text}</div><CheckCircleRoundedIcon />
        </div>
    )
}

export default QuickSteps