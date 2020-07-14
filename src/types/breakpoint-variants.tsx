import { css } from 'styled-components'

export const breakpointVariants = {
	default: 'md',
	variants: {
		xs: 'bp-xs',
		sm: 'bp-sm',
		md: 'bp-md',
		lg: 'bp-lg',
		xl: 'bp-xl',
	},
}

export const breakpointMixin = css`
	&.bp-xs {
		max-width: ${p => p.theme.breakpointsValues.xs}px;
	}
	&.bp-sm {
		max-width: ${p => p.theme.breakpointsValues.sm}px;
	}
	&.bp-md {
		max-width: ${p => p.theme.breakpointsValues.md}px;
	}
	&.bp-lg {
		max-width: ${p => p.theme.breakpointsValues.lg}px;
	}
	&.bp-xl {
		max-width: ${p => p.theme.breakpointsValues.xl}px;
	}
`
