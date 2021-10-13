import Styled from 'styled-components'

const PageMarketingSectionProspecteStc=Styled.section`
    &{
        @media (min-width: 991px) {
            height:400px;
        }
    }
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
`;
export default PageMarketingSectionProspecteStc;