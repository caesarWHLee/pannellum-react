import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
#textInfo .tooltip-content {
    font-size: 1.6em;
    position: absolute;
    left: -70px;
    bottom: 80px;
    width: 200px;
    pointer-events: none;
    background-color: #333;
    color: #fff;
    line-height: 1.2em;
    padding: .8em;
    opacity: 0;
    -webkit-transform-origin: 50% calc(100% + 6em);
    transform-origin: 50% calc(100% + 6em);
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
    -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
    transition: opacity 0.5s, transform 0.5s;
    -webkit-transition-timing-function: ease, cubic-bezier(.17, .67, .4, 1.39);
    transition-timing-function: ease, cubic-bezier(.17, .67, .4, 1.39);
}

#textInfo:hover {
    z-index: 3;
}

#textInfo:hover .tooltip-content {
    opacity: 1;
    pointer-events: all;
    -webkit-transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0);
    transform: translate3d(0, 0, 0) rotate3d(0, 0, 0, 0);
}

#textInfo .hotspot {
    cursor: pointer;
    box-sizing: border-box;
}

#textInfo .hotspot .out:before {
    speak: none;
    font-size: 48px;
    line-height: 90px;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    display: block;
    -webkit-font-smoothing: antialiased;
}

#textInfo .hotspot .out {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, .8);
    -webkit-transition: -webkit-transform ease-out 0.1s, border 0.2s;
    -moz-transition: -moz-transform ease-out 0.1s, border 0.2s;
    transition: transform ease-out 0.1s, border 0.2s;
    box-sizing: border-box;
}

#textInfo .hotspot .in {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(255, 255, 255, .8);
    border-radius: 50%;
    -webkit-transition: -webkit-transform ease-out 0.1s, background 0.2s;
    -moz-transition: -moz-transform ease-out 0.1s, background 0.2s;
    transition: transform ease-out 0.1s, background 0.2s;
}

#textInfo .hotspot .out:after {
    top: 0;
    left: 0;
    padding: 0;
    z-index: -1;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    content: '';
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
}

#textInfo .hotspot:hover .out {
    border: 5px solid rgba(255, 255, 255, 1);
    -webkit-transform: scale(0.9);
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
    color: #fff;
}

#textInfo .hotspot:hover .in {
    background-color: rgba(255, 255, 255, 1);
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
}

#textInfo .hotspot:hover .out:after {
    -webkit-animation: sonarEffect 1.2s ease-out;
    -moz-animation: sonarEffect 1.2s ease-out;
    animation: sonarEffect 1.2s ease-out;
}

@-webkit-keyframes sonarEffect {
    0% {
        opacity: 0.5;
    }
    20% {
        opacity: 0.8;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px rgba(37, 170, 225, .8), 0 0 0 10px rgba(255, 255, 255, 0.5);
    }
    100% {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px rgba(37, 170, 225, .8), 0 0 0 10px rgba(255, 255, 255, 0.5);
        -webkit-transform: scale(1.5);
        opacity: 0;
    }
}

@-moz-keyframes sonarEffect {
    0% {
        opacity: 0.5;
    }
    20% {
        opacity: 0.8;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px rgba(37, 170, 225, .8), 0 0 0 10px rgba(255, 255, 255, 0.5);
    }
    100% {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px rgba(37, 170, 225, .8), 0 0 0 10px rgba(255, 255, 255, 0.5);
        -moz-transform: scale(1.5);
        opacity: 0;
    }
}

@keyframes sonarEffect {
    0% {
        opacity: 0.5;
    }
    20% {
        opacity: 0.8;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px rgba(37, 170, 225, .8), 0 0 0 10px rgba(255, 255, 255, 0.5);
    }
    100% {
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1), 0 0 10px 10px rgba(37, 170, 225, .8), 0 0 0 10px rgba(255, 255, 255, 0.5);
        transform: scale(1.5);
        opacity: 0;
    }
}`;

export default GlobalStyles;
