import styled from '@emotion/styled'
import { useEffect } from 'react'
import { TITLE } from '../constants/config'

export const Page = styled.div``

export function PageTitle({ title = TITLE, children }) {
	const renderTitle = children ?? title

	useEffect(() => {
		document.title = renderTitle
	}, [renderTitle])

  return null
}
