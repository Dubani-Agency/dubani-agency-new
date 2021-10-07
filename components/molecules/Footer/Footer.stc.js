import Styled from 'styled-components'
const FooterStc=Styled.section`
background: #23232e;
.icon
{
    font-size:35px;
}
.value
{
    font-weight:400;
    font-size:18px;
    display:block;
}

*{
    color:#fff;
}
.trait
{
    border-bottom:2px solid blue;
}
li a
{
    font-size:14px;
}
ul
{
    padding-left:0px;
}
li
{
    list-style: none;
    display: grid;
    line-height:2.5em;
}
.h3, h3 {
    font-size: 20px;
    font-weight: 600;
}

a
{
    text-decoration:none !important;
}
`;
export default FooterStc;