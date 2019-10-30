import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs/react'

import Rating from '.'

const stories = storiesOf('Rating', module)
stories.addDecorator(withKnobs)

class RatingSample extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			max: 5,
			selectedValue: 2

		}
	}

	handleClick = (e, newValue) => {
		newValue = e.currentTarget.value
		this.setState({
			selectedValue: newValue
		})
		console.log(this.state.selectedValue, "current value");
		console.log(newValue, "new value")
	}

    render () {
    	return (
    		<Rating max={this.state.max} value={this.state.selectedValue} onClick={this.handleClick} />
    	)
    }
}

stories.add('default', () => <RatingSample />)
