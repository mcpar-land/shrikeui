import React from 'react'
import styled from 'styled-components'
import { colorVariants } from '../types/color-variants'
import { getVariant, VariantComponent, Variants } from '../util/variant-builder'

const buttonVariants = {
	default: 'simple',
	variants: {
		/** A simple button with a transparent background */
		simple: 'simple',
		/** A button with a transparent background and an outline */
		outlined: 'outlined',
		/** A solid button with an opaque background */
		solid: 'solid',
	},
}

type ButtonProps = Variants<typeof buttonVariants> &
	Variants<typeof colorVariants>

const c = (p: any) => p.theme.colors()[getVariant(colorVariants as any, p)]

const ButtonBase = styled.button<ButtonProps>`
	--c: ${p => c(p)};
	--c-darken: ${p => p.theme.darkenedColor(getVariant(colorVariants, p), 0.25)};
	--c-darken-click: ${p =>
		p.theme.darkenedColor(getVariant(colorVariants, p), 0.5)};
	--c-transp: ${p => p.theme.transparentColor(getVariant(colorVariants, p))};
	--c-transp-click: ${p =>
		p.theme.transparentColor(getVariant(colorVariants, p), 0.5)};

	--c-focus: ${p => p.theme.darkenedColor(getVariant(colorVariants, p), 0.75)};

	color: ${p =>
		p.solid ? p.theme.textColorForBg(c(p)) : p.theme.colors().text.primary};
	border-radius: ${p => p.theme.borderRadius}px;
	padding: ${p => p.theme.spacing(1.5)};
	margin: ${p => p.theme.spacing(0.5)};
	border: none;
	cursor: pointer;
	transition: 0.33s background;
	font-family: inherit;
	font-weight: 700;

	background: var(--c);

	&:active {
		transition-duration: 0.025s;
	}

	&:focus {
		outline: none;
	}

	&.simple {
		background: none;
		/* margin: ${p => p.theme.spacing(1.25)};
		padding: ${p => p.theme.spacing(0.75)}; */
	}

	&.simple:hover,
	&.simple:focus,
	&.outlined:hover,
	&.outlined:focus {
		background: var(--c-transp);
	}

	&.simple:active,
	&.outlined:active {
		background: var(--c-transp-click);
	}

	&.simple:focus,
	&.outlined:focus {
		box-shadow: 0 0 0 2pt var(--c-transp-click);
	}

	&.outlined {
		background: none;
		position: relative;
	}

	&.outlined:before {
		content: '';
		box-sizing: border-box;
		border: 1px solid var(--c);
		position: absolute;
		border-radius: inherit;
		top: 0px;
		left: 0;
		right: 0;
		bottom: 0;
		transition: border-color;
		transition-duration: inherit;
	}

	&.outlined:hover:before,
	&.outlined:focus:before {
		border-color: var(--c-darken);
	}

	&.solid:focus,
	&.solid:hover {
		background: var(--c-darken);
	}

	&.solid:focus {
		box-shadow: 0 0 0 2pt var(--c);
	}

	&.solid:active {
		background: var(--c-darken-click);
	}
`

// const Button = styled(ButtonBase).attrs<ButtonProps>(props => ({
// 	className: [getColorVariant(props), getButtonVariant(props)].join(' ').trim(),
// }))``

const v = [buttonVariants, colorVariants] as const

const Button = styled(ButtonBase).attrs<ButtonProps>(VariantComponent(v))``

export { Button }
