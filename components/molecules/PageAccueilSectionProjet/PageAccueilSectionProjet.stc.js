import Styled from 'styled-components'

const PageAccueilSectionProjetStc=Styled.section`
    .row
    {
        margin-left:0px !important;
        margin-right:0px !important;
    }

    .block
    {
        background: #1530aa;
        color: #fff;

        h5
        {
            font-weight:600
        }

        button
        {
            background:#0e2177;
            color:#fff;
        }

       
    }
   
    .h3
    {
        background: #dcdbe4;
        font-weight:600;
        border-bottom:1px solid #ccc;
        cursor:pointer;
        h3
        {
            margin-bottom:0px;
            font-size: 25px;
            font-weight: 600;
            color:#0e2177;
        }
    }

    .block-container-chiffre
    {
        @media (min-width: 991px) {
           margin-top:100px;
           height:568px;
        }

        background:#1530aa;
    }
`;
export default PageAccueilSectionProjetStc;