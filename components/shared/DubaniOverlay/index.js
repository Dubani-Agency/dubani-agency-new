import React from 'react'
import DubaniOverlayStc from './DubaniOverlay.stc'

function DubaniOverlay(props) {
    return (
        <DubaniOverlayStc className="background-overlay">
            <marquee width={props.width} direction="left" height="250px">
                Dubani agency
            </marquee>
        </DubaniOverlayStc>
    )
}

export default DubaniOverlay
