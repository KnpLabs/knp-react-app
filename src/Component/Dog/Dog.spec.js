import React from 'react'
import Dog from './Dog'
import TestRenderer from 'react-test-renderer'

describe('Component :: Dog :: Dog', () => {
  it('loads when no dog image is present or is generating', () => {
    const inspector = TestRenderer.create(
      <Dog />
    );

    inspector.root.findByProps({ className: 'dog loader' })

    const inspector2 = TestRenderer.create(
      <Dog isGenerating={true} image={{src: 'foo', alt: 'bar'}} />
    );

    inspector.root.findByProps({ className: 'dog loader' })
  });

  it('displays the image and a generation button when it is not generating any image', () => {
    const inspector = TestRenderer.create(
      <Dog
        isGenerating={false}
      image={{src: 'http://lorempixel.com/40/40', alt: 'Lorem Ipsum' }}
      />
    );

    inspector.root.findByProps({ className: 'dog-image' });
    inspector.root.findByProps({ className: 'dog-generate' });
  });
})
