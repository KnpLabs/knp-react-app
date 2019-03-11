import React, { Fragment } from 'react'
import styled from 'styled-components'
import logo from './Asset/logo.png'

export default () => 
  <Fragment>
    <BlackStrip>
      <Title>Welcome</Title>

      <SubTitle>
        KNP React app is a full packaged solution for building
        functional and reactive frontend application with React.
      </SubTitle>

      <QuickAccess>
        <Thumbnail href="https://github.com/KnpLabs/knp-react-app" target="_blank">
          <Icon src="https://maxcdn.icons8.com/Share/icon/p1em/Logos/github1600.png" />
          Take a look at the source code
        </Thumbnail>

        <Thumbnail href="Learn" target="_blank">
          <Icon src="https://image.flaticon.com/icons/svg/171/171322.svg" />
          Some links that might help you
        </Thumbnail>

        <Thumbnail href="Learn" target="_blank">
          <Icon src="https://www.shareicon.net/download/2015/12/06/683054_sign.svg" />
          Our best practices and guidelines
        </Thumbnail>

        <Thumbnail href="Learn" target="_blank">
          <Icon src="http://chittagongit.com//images/learn-icon/learn-icon-23.jpg" />
          See a concrete FRP application
        </Thumbnail>
      </QuickAccess>
    </BlackStrip>

    <Headline>What is inside ?</Headline>

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
        <p>
        Making design is often very painfull: How to organise classes ? How to make reusable components ?
        Should i use id ? Does my classe works with this component ? Where is my fu***** stylesheet ? ...
        </p>
        <p>
        Styled components is a very popular and handy tools allowing you make
        designs with (wait for it...) Component.
        </p>
        <p>
        You will love it!
        </p>
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
          href="https://github.com/Djeg/ramduck-redux#readme"
        >
          Ramduck Redux
        </Label>
        This is one of our handy tool making reducers and actions very powerfull. It simplyfies
        and currify your reducers and actions, making your code very consice and easilty testable.
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
  </Fragment>

export const BlackStrip = styled.div`
  max-width: 100vw;
  box-sizing: border-box;
  background-color: #3A3A3A;
  display: flex;
  flex-direction: column;
  background-image: url(${props => logo});
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 0px 10px #3A3A3A;
`

export const Title = styled.h1`
  text-align: center;
  color: #DCDCDC;
  font-size: 3rem;
`

export const Headline = styled.h2`
  text-align: center;
  color: #737373;
  font-size: 2.5rem;
`

export const SubTitle = styled.p`
  text-align: center;
  color: #DCDCDC;
  font-size: 1.2rem;
  margin: auto;
  max-width: 700px;
  opacity: .6;
`

export const QuickAccess = styled.div`
  display: flex;
  max-width: 700px;
  text-align: center;
  margin: 2.5rem auto;
  flex-wrap: wrap;
  justify-content: center;
`

export const Thumbnail = styled.a`
  display: flex;
  flex-direction: column;
  width: 200px;
  text-decoration: none;
  color: #DCDCDC;
  text-align: center;
  opacity: .6;
  transition: all .5s;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 0px 1px #DCDCDC;
  background-color: #3A3A3A;
  &:hover {
    opacity: 1;
    color: #3A3A3A;
    box-shadow: 0px 0px 5px #DCDCDC;
    background-color: #DCDCDC;
  }
  margin: 1rem;
`

export const Icon = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin-bottom: .5rem;
  margin: auto;
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
