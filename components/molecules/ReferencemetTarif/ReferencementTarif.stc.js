import Styled from 'styled-components'

const ReferencementSeoStc=Styled.div`
    
    @media (min-width: 991px) {
        min-height:530px;

    }
    h5
    {
        font-weight: 600;
        font-size: 23px;
    }
    .card
    {
        box-shadow: 0px 0px 10px #ccc;
        @media (min-width: 991px) {
            min-height:530px;
        
        }

        button
        {
            @media (min-width: 991px) {
                position: absolute;
                /* left: 0; */
                /* right: 0; */
                bottom: 20px;
                width: 80%;
                display: block;
                margin: auto;
            }
            
        }
        
    }

    .h3.m1
    {
        font-size: 18px;
        color: #8c8989;
    }
    .h3.m2
    {
        font-size: 15px;
        font-weight:600;
        color: #000;
    }

    .package-ul li
    {
        list-style: none;
        display: flex;
        font-size: 16px;
        color: #2d519d;
        font-weight: 600;

        .texte
        {
            float:right;
            display: block;
            margin: auto;
        }
        .icon
        {
            font-size: 18px;
        }
        
    }
   .imgComposant {
        display:none;
    }
`;
export default ReferencementSeoStc;