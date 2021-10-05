import Styled from 'styled-components'

const PageContactSectionAccueilStc=Styled.section`

    @media (min-width: 991px) {
        height:100vh;
    }
    
    @media (min-width: 991px) {
        margin-top:-80px;
        overflow:hidden;
    }
   
    .imgComposant
    {
        display:none;
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

     .right
     {
         background:url(/img/img2.png);
         background-size:cover;
         height:100vh;
     }

     span.icon
     {
        font-size: 30px;
        margin-right: 10px;
     }

     .input
     {
         border-radius:0px !important;
         border:0px !important;
         border-bottom:1px solid #fff !important;
     }

     .row
    {
        margin-left:0px !important;
        margin-right:0px !important
    }
`;
export default PageContactSectionAccueilStc;