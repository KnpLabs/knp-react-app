import React from 'react'
import Form from './Form'
import TestRenderer from 'react-test-renderer'

describe('Component :: Form :: Form', () => {
  it('creatingCardForm is present', () => {
    const inspector = TestRenderer.create(
      <Form />
    );

    expect(() => inspector.root.findByProps({ id: 'card_form' })).not.toThrow()
  });
})
