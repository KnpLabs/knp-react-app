import React from 'react'
import Card from './Card'
import TestRenderer from 'react-test-renderer'

describe('Component :: Card :: Card', () => {
  it('div card is present', () => {
    const inspector = TestRenderer.create(
        <Card/>
    );

    inspector.root.findByProps({ className: 'card' })
  });
})
