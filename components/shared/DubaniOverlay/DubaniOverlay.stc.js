import Styled from 'styled-components';

const DubaniOverlayStc=Styled.h2`
    &.background-overlay
    {
        display:none;
        @media (min-width: 991px) {
            display:block;
            font-size: 225px;
            font-weight: 900;
            position: absolute;
            width: 100vw;
            opacity: 0.1;
            color: #159caa;
            height: 250px;
            overflow: hidden;
            z-index: 0;
            left: -52px;
            top: -64px;
        }
    }
`;
export default DubaniOverlayStc;