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
        //  -webkit-animation-name: backgroundEffect;-webkit-animation-name
        //  animation-duration: 30s;animation-duration
        //  animation-iteration-count: infinite;animation-iteration-count
     }
     .PageAccueilSectionAccueilCover
      {
        background: #1530aa;
        height: 100vh;
        width: 0%;
        // -webkit-animation-name: coverAnimation;-webkit-animation-name
        //  animation-duration: 3s;animation-duration
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

      .cover1
      {
        height: 100vh;
        background: #1530aa;
        width: 40%;
        float: right;
        position: absolute;
        top: 0;
        right: 0;
      }
`;
export default PageAccueilSectionAccueilStc;
