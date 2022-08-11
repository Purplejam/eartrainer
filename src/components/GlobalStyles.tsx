import {createGlobalStyle} from 'styled-components'

const red = '#EF4F4F';
const lightred = '#EE9595';
const lightblue = '#9DDDDB';
const darkblue = '#6B7AA1';
const darkblue01 = '#97A1BC';


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
        background: white;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 2rem;
        font-weight: 600;
        color: #333;
        padding: 1.5rem 0rem;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1rem;
        line-height: 200%;
        color: #696969;
    }
    li{
        text-decoration: none;
        color: #333;   
    }
    a{
        text-decoration: none;
        color: #333;

    }
    img{
        display: block;
    }
    .bold-test {   
        border-bottom: 2px solid ${darkblue};

        p {
           font-weight: 800 !important; 
           color: ${darkblue} !important;
        }
    }
    button.main-button {
        padding: 0.4rem 2rem;
        background-color: ${red};
        font-size: 1rem;
        color: #fff;
        cursor: pointer;
        border: 2px solid ${red};
        transition: all 100ms ease-in;
        &:hover {
          background-color: #F27474;
          border: 2px solid #F27474;
        }
        &.inactive:hover {
          background-color: #EE9595;
          border: 2px solid #EE9595;            
        }
    }
    button.simple-button {
        padding: 0.4rem 2rem;
        background-color: transparent;
        font-size: 1rem;
        color: ${darkblue};
        cursor: pointer;
        border: 2px solid ${darkblue};
        transition: all 100ms ease-in;
        &:hover {
          color: #fff;
          background-color: ${darkblue};
        }
    }
    button.inactive {
        background-color: ${lightred};
        border: 2px solid ${lightred};
        cursor: not-allowed;
    }

    #nprogress .bar {
      background: #9DDDDB;
      height: 2px;
    }

    #nprogress .spinner-icon {
      border-top-color: #9DDDDB;
      border-left-color: #9DDDDB;
    }

    @media (max-width: 768px) {
       h3 {
           font-size: 1rem;
           padding: 1rem 0rem;
       }
       h4 {
           font-size: 0.8rem;
           padding: 1rem 0rem;
       }
       label p, p, li, b {
           font-size: 0.7rem;
       }
       button.main-button, button.simple-button {
          font-size: 0.8rem; 
       }
       h2 {
           font-size: 2rem;
       } 
    }
`