import React from 'react'
import styled from 'styled-components'

const ContainerCenterBase: React.FC<{
	className: string
	style: any
}> = ({ className, children, style }) => {
	return (
		<div className={className} style={style}>
			<div>{children}</div>
		</div>
	)
}

const ContainerCenter = styled(ContainerCenterBase)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export { ContainerCenter }
