import App, { Item, Title } from './App'
import React from 'react'
import TestRenderer from 'react-test-renderer'


let inspector;


beforeEach(() => {
  inspector = TestRenderer.create(<App />)
})


it('display the title', () => {
  expect(inspector.root.findByType(Title).props.children).toEqual('Welcome')
});


it('display usefull resources', () => {
  const items = inspector.root.findAllByType(Item)

  expect(items.length).toBeGreaterThan(0)
});
