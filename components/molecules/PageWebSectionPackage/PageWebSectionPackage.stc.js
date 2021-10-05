import Styled from 'styled-components'
const PageAccueilSectionClientStc=Styled.section`
.carousel-inner
{
    @media (min-width: 991px) {
        height:500px !important;

    }
   
}

.containerHome.container {
    @media (min-width: 991px) {
        position: absolute;
        right: 0px;
        left: 0px;
        z-index: 9999;
        top: 0px;
    }
   
}
.row
    {
        margin-left:0px !important;
        margin-right:0px !important
    }
`;
export default PageAccueilSectionClientStc;