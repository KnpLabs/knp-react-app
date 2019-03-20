import React from 'react'
import Actions from './Actions'
import TestRenderer from 'react-test-renderer'

describe('Component :: Actions :: Actions', () => {
  it('button add card is present', () => {
    const inspector = TestRenderer.create(
        <Actions/>
    );

    inspector.root.findByProps({ className: 'add_card' })
  });
})
