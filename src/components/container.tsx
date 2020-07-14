import React from 'react'
import styled from 'styled-components'
import { breakpointVariants } from '../types/breakpoint-variants'
import { variantAttrs, Variants } from '../util/variant-builder'
import { ContainerCenter } from './container-center'

const ContainerOutsideBase: React.FC<{ className: string }> = ({
	className,
	children,
}) => {
	return (
		<div className={className}>
			<ContainerInside>{children}</ContainerInside>
		</div>
	)
}

const ContainerOutside = styled(ContainerOutsideBase)`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const ContainerInside = styled.div`
	.bp-xs & {
		max-width: ${p => p.theme.breakpointsValues.xs + 'px' || 'none'};
	}
	.bp-sm & {
		max-width: ${p => p.theme.breakpointsValues.sm + 'px' || 'none'};
	}
	.bp-md & {
		max-width: ${p => p.theme.breakpointsValues.md + 'px' || 'none'};
	}
	.bp-lg & {
		max-width: ${p => p.theme.breakpointsValues.lg + 'px' || 'none'};
	}
	.bp-xl & {
		max-width: ${p => p.theme.breakpointsValues.xl + 'px' || 'none'};
	}
`

type ContainerProps = Variants<typeof breakpointVariants>
const v = [breakpointVariants] as const

const ContainerAttrs = styled(ContainerOutside).attrs<ContainerProps>(
	variantAttrs(v)
)``

const Container: typeof ContainerAttrs & {
	Center: typeof ContainerCenter
} = Object.assign(ContainerAttrs, {
	Center: ContainerCenter,
})

export { Container }
