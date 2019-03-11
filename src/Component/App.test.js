import App, { Item, Thumbnail, Title } from './App'
import React from 'react'
import TestRenderer from 'react-test-renderer'

let inspector;

beforeEach(() => {
  inspector = TestRenderer.create(<App />)
})

it('display the title', () => {
  expect(inspector.root.findByType(Title).props.children).toEqual('Welcome')
});

it('display some quick access link', () => {
  const items = inspector.root.findAllByType(Thumbnail)

  expect(items.length).toBe(4)
});

it('display usefull resources', () => {
  const items = inspector.root.findAllByType(Item)

  expect(items.length).toBeGreaterThan(0)
});
