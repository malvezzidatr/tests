import React from 'react'
import { render } from '@testing-library/react'
import AutoScalingText from '../auto-scaling-text'

test('render', () => {
    const {debug} = render(<AutoScalingText />)
    debug()
})