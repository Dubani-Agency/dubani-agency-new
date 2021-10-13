import Styled from "styled-components";

const PageAccueilSectionAccueilStc = Styled.section`

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
     .right
     {
        margin-top:-15px;
         height:100vh;
        //  -webkit-animation-name: backgroundEffect;
        //  animation-duration: 30s;
        //  animation-iteration-count: infinite;
     }
     .PageAccueilSectionAccueilCover
      {
        background: #1530aa;
        height: 100vh;
        width: 0%;
        // -webkit-animation-name: coverAnimation;
        //  animation-duration: 3s;
      }

     @keyframes backgroundEffect {
        0% {background-position: 0% 0%;}
        25% {background-position: 10% 30%}
        50% {background-position: 30% 0%}
        75% {background-position: 30% 30%}
        100% {background-position: 0% 0%;}
      }

    
      @keyframes coverAnimation {
        0% {width:100%;background: #1530aa;}
        100% {width:0%;background: transparent;}
      }

      
`;
export default PageAccueilSectionAccueilStc;
