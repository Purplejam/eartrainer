import {createGlobalStyle} from 'styled-components'

const red = '#EF4F4F';
const lightred = '#EE9595';
const lightblue = '#9DDDDB';
const darkblue = '#6B7AA1';

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
    button.simple-button {
        padding: 0.5rem 2rem;
        background-color: ${red};
        font-size: 1rem;
        color: #fff;
        cursor: pointer;
        border: none;
        transition: all 100ms ease-in;
        &:hover {
          opacity: 0.8;
        }
    }
    button.inactive {
        background-color: ${lightred};
        cursor: not-allowed;
    }
    @media (max-width: 768px) {
       h3 {
           font-size: 1rem;
           padding: 1rem 0rem;
       }
       p {
           font-size: 0.7rem;
       }
       button.simple-button {
          font-size: 0.8rem; 
       }
       h2 {
           font-size: 2rem;
       } 
    }
`