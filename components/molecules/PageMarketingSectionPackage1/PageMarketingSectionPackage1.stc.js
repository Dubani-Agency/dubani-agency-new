import Styled from 'styled-components'

const PageMarketingSectionPackage1Stc=Styled.section`
    .package-img
    {
        @media (min-width: 991px) {
            height:350px;
        }
       
        background-image:url(/img/img4.png);
        background-size:cover;

        img
        {
            margin-top:-30px;
        }
    }

    .package-ul
    {
        li {
            font-size: 24px;
            font-weight: 600;
            display: inline-flex;
            color:#2d519d;
            margin:7px auto;
            line-height:1.2em;

            span
            {
                margin-left:5px;
                margin-right:5px;
            }
        }

    }

    .row
    {
        margin-left:0px !important;
        margin-right:0px !important
    }
    
`;
export default PageMarketingSectionPackage1Stc;