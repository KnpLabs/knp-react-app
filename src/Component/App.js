import React from 'react'
import styled from 'styled-components'


export default () => 
  <div>
    <Title>Welcome</Title>
    <SubTitle>
      KNP React app is a full packaged solution for building
      functional and reactive frontend application with React.
      Bellow are a list of usefull resources to start over:
    </SubTitle>
    <Menu>
      <Item>
        <Label
          target="_blank"
          href="https://facebook.github.io/create-react-app/docs/getting-started"
        >
          Create React App
        </Label>
        This project is based on facebook create react app and try to follow the community guides.
      </Item>

      <Item>
        <Label
          target="_blank"
          href="https://www.styled-components.com/"
        >
          Styled Components
        </Label>
        Making design is often very painfull: How to organise classes ? How to make reusable components ?
        Should i use id ? Does my classe works with this component ? Where is my fu***** stylesheet ? ...
        <br />
        <br />
        Styled components is a very popular and handy tools allowing you make
        designs with (wait for it...) Component.
        <br/>
        <br />
        You will love it!
      </Item>

      <Item>
        <Label
          target="_blank"
          href="https://reacttraining.com/react-router/web/guides/quick-start"
        >
          React Router
        </Label>
        Any web application need some routing, allowing people to navigate into your app.
        React Router is the most popular routing tools for react.
      </Item>

      <Item>
        <Label
          target="_blank"
          href="https://redux.js.org/"
        >
          Redux
        </Label>
        It uses Redux as a default data layer allowing purity and global state management.
      </Item>

      <Item>
        <Label
          target="_blank"
          href="https://redux-observable.js.org/"
        >
          Redux Observable
        </Label>
        Every frontend application has impure functions making effects.
        This project comes with the most powerfull reactive tooling for javascript powered
        by <Link href="https://rxjs.dev/" target="_blank">RxJS</Link> allowing you to
        manage those effects.
      </Item>

      <Item>
        <Label
          target="_blank"
          href="https://ramdajs.com"
        >
          Ramda
        </Label>
        Ramda is a very powerfull set of functions helping you building "functional" application.
      </Item>

      <Item>
        <Label
          target="_blank"
          href="https://evilsoft.github.io/crocks/"
        >
          Crocks
        </Label>
        You may want to make impure functions without all the complexity of an observable. Crocks
        is a complete set of well known and tested Algebraic Data Types. Use it to wrap easily
        any impure operations and use the power of Categories to map, chain, ap ... any effects
      </Item>
    </Menu>
  </div>


export const Title = styled.h1`
  text-align: center;
  color: #737373;
  font-size: 3rem;
`


export const SubTitle = styled.p`
  text-align: center;
  color: #737373;
  font-size: 1.2rem;
  margin: auto;
  max-width: 700px;
  opacity: .6;
`


export const Menu = styled.ul`
  list-style-type: none;
  max-width: 700px;
  margin: 1.5rem auto;
  padding: 0;
`

export const Item = styled.li`
  color: #737373;
  text-align: center;
  border-top: 1px solid #DDDDDD;
  padding-top: 1rem;
  margin-bottom: 1.5rem;
  opacity: .6;
  transition: all .5s;
  &:hover {
    opacity: 1;
  }
`


export const Link = styled.a`
  color: #7271C8;
  text-decoration: none;
`


export const Label = styled(Link)`
  display: block;
  text-align: center;
  margin-bottom: .5rem;
`
