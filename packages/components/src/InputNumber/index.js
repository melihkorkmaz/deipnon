// @flow

import React from 'react'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import theme from '@deipnon/themes/lib'

const inputNumberSpanStyle = css`
 color: ${theme.colors.azureRadiance};
 user-select: none;
`

const inputNumberLabelStyle = css`
color: ${theme.colors.darkGray};
cursor: pointer;
`
const inputNumberFormStyle = css`
 font-weight: 400;
 width: 75px;
 min-width: 75px;
 display: flex;
 justify-content: space-between;
 border-radius: 1px;
 border: 1px solid ${theme.colors.lightGrayishBlue};
 background-color: ${theme.colors.white};
 line-height: 20px;
 align-items: center;
`

const InputNumberForm = styled('div')(inputNumberFormStyle)
const InputNumberSpanElement = styled('span')(inputNumberSpanStyle)
const InputNumberButtonElementAdd = styled(IoIosAdd)(inputNumberLabelStyle)
const InputNumberButtonElementRemove = styled(IoIosRemove)(inputNumberLabelStyle)

type PropsType = {
	max: number,
	min: number,
	onPlusChange: (e: number) => void,
	onMinusChange: (e: number) => void,
	value: number
}

const handleClickPlusButton = (value,max,onPlusChange: PropsType) => {
	const incrementNumber = value + 1
	if (value !== max) {
		return onPlusChange(incrementNumber)
	}
   }

const handleClickMinusButton = (value,min,onMinusChange: PropsType) => {
	const decreaseNumber = value - 1
	if (value !== min) {
	  return onMinusChange(decreaseNumber)
	}
   }

const InputNumber = (props: PropsType) => {
	const {min,max,value,onPlusChange,onMinusChange} = props

	return (
		<InputNumberForm>
			<InputNumberButtonElementRemove onClick={()=>handleClickMinusButton(value,min,onMinusChange)}/>
			<InputNumberSpanElement>{props.value}</InputNumberSpanElement>
			<InputNumberButtonElementAdd onClick={()=>handleClickPlusButton(value,max,onPlusChange)}/>
		</InputNumberForm>
	)
}

export default InputNumber
