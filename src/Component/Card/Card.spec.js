import React from 'react'
import Card from './Card'
import TestRenderer from 'react-test-renderer'

describe('Component :: Card :: Card', () => {
  it('creatingCardForm is not present when is not creating', () => {
    const inspector = TestRenderer.create(
      <Card />
    );

    try {
      inspector.root.findByProps({ className: 'creatingCardForm' })
      expect(true).toBe(false)
    } catch(error) {
        expect(true).toBe(true)
    }
  });

  it('creatingCardForm is present when is creating', () => {
    const inspector = TestRenderer.create(
        <Card isCreating={true}/>
    );

    inspector.root.findByProps({ className: 'creatingCardForm' })
  });
})
