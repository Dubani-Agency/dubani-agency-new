import Styled from 'styled-components'

const PageMarketingSectionAccueilStc=Styled.section`

    // @media (min-width: 991px) {
    //     height:100vh;
    // }
    
    @media (min-width: 991px) {
        margin-top:-80px;
        overflow:hidden;
    }
   
    
    .row
    {
        margin-left:0px !important;
        margin-right:0px !important
    }

     .background-overlay
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
            height: 240px;
            overflow: hidden;
            z-index: 0;
            left: -52px;
            top: -64px;
        }
        
     }

    
     
`;
export default PageMarketingSectionAccueilStc;