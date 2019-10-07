import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import Button from '.'

describe('Button', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Button>{'Test'}</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})