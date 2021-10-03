import Styled from "styled-components";
import { theme } from "../../../theme";
const HeaderStc=Styled.div`
    .block-menu.collapse.navbar-collapse {
        justify-content: end;
    }

    .block-menu.autre ul {
        @media (min-width: 991px) {
            background: #23232e;
        }
    }

    .block-menu ul li
    {
        @media (max-width: 991px)
        {
            text-align:right;
            width:100%;
        }
        @media (min-width: 991px) {
            margin:auto 25px;

            height:auto !important;
        }
        a 
        {
            color:#333;
            @media (min-width: 991px) {
                color:#fff;
            }
            
        }
        font-weight:bold;
    }

    nav.navbar
    {
        border:0px;
    }

    .navbar-expand-md .navbar-nav .nav-link {
        @media (min-width: 991px) {
            color: #fff;
        }
        
        color:#333;
    }

    .toggle
    {
        font-size:30px;
    }

    .dropdown-menu.dropdown-menu-right.show {
        @media (min-width: 991px) {
            border-radius: 0px;
            background: #fafafa;
            margin-top: -20px;
        }

        button
        {
            text-align:right;
        }
        a
        {
            text-decoration: none;
            font-size: 17px;
            font-weight: 600;
            color: #2d519d;
        }
       
    }
`;

export default HeaderStc;