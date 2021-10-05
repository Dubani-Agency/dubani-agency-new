import Styled from 'styled-components'

const Banniere1Stc=Styled.section`
background-image:url(/img/pc.jpg);
    background-size:cover;
    height:350px;
    .sectionApres
    {
        background: rgb(2,0,36,.4);
        background: linear-gradient(90deg, rgba(2,0,36,.9) 0%, rgba(9,9,121,.9) 20%, rgba(0,212,255,.9) 100%);
        height:100%;
    }
.container-image
{

    ul li
    {
        list-style: none;
        color: #1f54a8;
        font-weight: 600;
        
        span.icon
        {
            position: relative;
            left: -10px;
            top: -2px;
            font-size:30px;
        }
        span
        {
            vertical-align: middle;
            display: table-cell;
        }
    }
}

    img
    {
        @media (min-width: 991px) {
            position: absolute;
            display: block;
            margin: auto;
            left: 0;
            right: 0;
            height: 380px;
            margin-bottom:"-100px;
        }
    }

    .row
    {
        margin-left:0px !important;
        margin-right:0px !important
    }
`;
export default Banniere1Stc;