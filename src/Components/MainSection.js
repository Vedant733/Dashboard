import React from 'react'
import DeleteIcon from './ic_delete.svg';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import PersonOffSharpIcon from '@mui/icons-material/PersonOffSharp';
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
import Map from "./Map"
import CachedIcon from '@mui/icons-material/Cached';
import QuickSteps from './QuickSteps';


function MainSection({ noOfUsers, noOfFailedLogins, noOfGrp, noOfActiveUsers, c1, c2 }) {
    return (
        <div style={{
            width: 'auto', background: 'black', display: 'grid', gridTemplateColumns: '300px auto 300px',
            gridRow: '80px 80px', gap: '30px', padding: '40px', color: 'white', height: 'auto'
        }}>
            <div style={{ background: '#202020', paddingBottom: 0 }}>
                <img src={DeleteIcon} style={{ color: 'red', marginLeft: '.5em', paddingTop: '.5em' }} />
                <div>
                    <div style={{ padding: '1em', paddingTop: 0, paddingBottom: 0 }}>
                        <div style={{ textAlign: 'right', fontWeight: 660, font: `normal normal bold 24px/33px Open Sans` }}>Total Users</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
                            <PersonSharpIcon style={{ width: '100px', height: '100px', background: 'green', borderRadius: '50%' }} />
                            <div style={{ font: "normal normal 600 100px/136px Open Sans", margin: 0, height: '110px' }}>{noOfUsers}</div>
                        </div>
                    </div><hr />
                    <div style={{ fontWeight: 400, font: 'normal normal normal 18px/24px Open Sans', paddingLeft: '24px', paddingBottom: '16px' }}>Live Users</div>
                </div>
            </div>

            <div style={{ gridRow: 'span 2', background: '#202020', width: 'fit-content' }}>
                <div style={{ fontWeight: 660, textAlign: 'center', paddingTop: '1em', font: 'normal normal bold 24px/33px Open Sans' }}>User Accessing Application From</div>
                <Map c1={c1} c2={c2} />
                <div style={{ fontWeight: 660, position: 'absolute', top: 550, marginLeft: '50px', display: 'flex', alignItems: 'center' }}><CachedIcon style={{ marginRight: '10px' }} /> Updated</div>
            </div>

            <div style={{ background: '#202020', paddingBottom: 0 }}>
                <img src={DeleteIcon} style={{ color: 'red', marginLeft: '.5em', paddingTop: '.5em' }} />
                <div>
                    <div style={{ padding: '1em', paddingTop: 0, paddingBottom: 0 }}>
                        <div style={{ textAlign: 'right', fontWeight: 660, font: `normal normal bold 24px/33px Open Sans` }}>Total Groups</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
                            <SupervisorAccountSharpIcon style={{ width: '100px', height: '100px', background: '#50A1BE', borderRadius: '50%' }} />
                            <div style={{ font: "normal normal 600 100px/136px Open Sans", margin: 0, height: '110px' }}>{noOfGrp}</div>
                        </div>
                    </div><hr />
                    <div style={{ fontWeight: 400, font: 'normal normal normal 18px/24px Open Sans', paddingLeft: '24px', paddingBottom: '16px' }}>Live Groups</div>
                </div>
            </div>

            <div style={{ background: '#202020', paddingBottom: 0 }}>
                <img src={DeleteIcon} style={{ color: 'red', marginLeft: '.5em', paddingTop: '.5em' }} />
                <div>
                    <div style={{ padding: '1em', paddingTop: 0, paddingBottom: 0 }}>
                        <div style={{ textAlign: 'right', fontWeight: 660, font: `normal normal bold 24px/33px Open Sans` }}>Login Failed</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
                            <PersonOffSharpIcon style={{ background: 'red', width: '100px', height: '100px', borderRadius: '50%' }} />
                            <div style={{ font: "normal normal 600 100px/136px Open Sans", margin: 0, height: '110px' }}>{noOfFailedLogins}</div>
                        </div>
                    </div><hr />
                    <div style={{ fontWeight: 400, font: 'normal normal normal 18px/24px Open Sans', paddingLeft: '24px', paddingBottom: '16px' }}>From July 2022 to Aug 2022</div>
                </div>
            </div>

            <div style={{ background: '#202020', paddingBottom: 0 }}>
                <img src={DeleteIcon} style={{ color: 'red', marginLeft: '.5em', paddingTop: '.5em' }} />
                <div>
                    <div style={{ padding: '1em', paddingTop: 0, paddingBottom: 0 }}>
                        <div style={{ textAlign: 'right', fontWeight: 660, font: `normal normal bold 24px/33px Open Sans` }}>Active Users</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0 }}>
                            <PersonSharpIcon style={{ width: '100px', height: '100px', background: '#50A1BE', borderRadius: '50%' }} />
                            <div style={{ font: "normal normal 600 100px/136px Open Sans", margin: 0, height: '110px' }}>{noOfActiveUsers}</div>
                        </div>
                    </div><hr />
                    <div style={{ fontWeight: 400, font: 'normal normal normal 18px/24px Open Sans', paddingLeft: '24px', paddingBottom: '16px' }}>User allowed under your subscription</div>
                </div>
            </div>
            <div style={{ background: '#202020', gridColumn: 'span 3' }}>
                <div style={{ margin: '1em', fontWeight: 660, font: `normal normal bold 24px/33px Open Sans` }}>
                    Quick Steps
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', padding: '3em', paddingTop: '1em' }}>
                    <QuickSteps text="Create User" />
                    <QuickSteps text="Create Application" />
                    <QuickSteps text="Create Policy" />
                    <QuickSteps text="Create Gateway" />
                    <QuickSteps text="Add Apps to Gateway" />
                </div>
            </div>
        </div>
    )
}

export default MainSection