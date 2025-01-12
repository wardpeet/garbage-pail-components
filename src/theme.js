import React from 'react'
import { useDeck } from 'gatsby-theme-mdx-deck'

function Counter ({ children }) {
  const css = {
    fontSize: '1.15rem',
    padding: '0.5em',
    position: 'absolute',
    right: 0,
    top: 0,
    textAlign: 'right',
  }

  return <nav css={css} aria-label={`Slide ${children[0]} of ${children[2]}`}>
    {children}
  </nav>
}

const Provider = props => {
  const deck = useDeck()
  const { index, length } = deck

  return <>
    {props.children}
    <Counter>{index+1}/{length}</Counter>
  </>
}

export default {
  fonts: {
    body: 'filson-pro, sans-serif',
  },
  text: {
    heading: {
      color: 'maroon',
      fontFamily: 'WindsorD-Bol',
      margin: '0 auto 0.5rem',
      textAlign: 'center'
    },
  },
  colors: {
    text: '#000',
    background: 'lightyellow',
    link: '#000',
    heading: '#000',
    quote: '#000',
    pre: '#333',
    preBackground: 'rgb(245, 242, 240)',
    code: '#333',
    codeBackground: 'transparent',
    figcaptionBackground: "rebeccapurple",
    figcaption: "#fff"
  },
  styles: {
    body: {
    },
    Slide: {
      textAlign: 'center'
    },
    p: {
      fontSize: '3rem',
      margin: "1rem 0",
      textAlign: 'center'
    },
    h1: {
      fontSize: '5rem',
      marginBottom: "0.25rem"
    },
    h2: {
      fontSize: '4rem',
      margin: "0.5rem 0"
    },
    'figure': {
      textAlign: 'left'
    },
    code: {
      fontSize: "inherit"
    },
    figcaption: {
      fontSize: "1.2rem"
    },
    li: {
      marginBottom: "0.5rem",
      textAlign: 'left'
    },
    img: {
      display: 'inline-block',
      objectFit: 'contain',
      maxHeight: '100vh'
    },
  },
  Provider
}
