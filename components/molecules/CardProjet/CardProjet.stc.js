import Styled from 'styled-components'

const CardProjetStc=Styled.div`
    text-align:center;
    h1
    {
        font-size:90px !important;
        color:#333;
        position:relative;
        z-index:1px;
        line-height:0.5em;
    }
    .right
    {
        margin-left: -50px;
    }
    .content
    {
        display: inline-flex;
    }

    .card
    {
        border-radius: 30px;
        box-shadow: 0px 0px 16px #ccc;
        border:0px;
        @media (min-width: 991px) {
            margin: 30px 15px;
         }
        

         .card-body
         {
            @media (min-width: 991px) {
                padding: 4em 1.25rem;
             }
            
            
         }
    }

    .icon
    {
        position: absolute;
        top: -20px;
        left: 0px;
        z-index: 0;
        font-size: 30px;
        color: #64c5ea;
        transform: rotateZ(45deg);
        opacity:0.1;
    }

    .indice
    {
        line-height: 2em;
        margin-top: -20px !important;
    }

    .divTag .div1
    {
        display:inline-block;
    }
    .div2 span
    {
        display:block;
    }
    
`;
export default CardProjetStc;