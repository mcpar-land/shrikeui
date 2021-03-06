import React from 'react'
import styled, { StyledComponent } from 'styled-components'

export type VariantSource = {
	default?: string
	variants: { [k: string]: string }
}

export type VariantNames<T extends VariantSource> = keyof T['variants']

export type Variants<T extends VariantSource> = {
	[K in VariantNames<T>]?: boolean
}

export const getVariant = <T extends VariantSource>(
	source: T,
	props: Variants<typeof source>
): VariantNames<T> => {
	for (const k in source.variants) {
		if (props[k] === true) {
			return source.variants[k]
		}
	}
	return source.default || ''
}

export const variantAttrs = <T extends VariantSource>(
	sources: readonly T[]
) => {
	return (props: any) => {
		for (const source of sources) {
			let className = getVariant(source, props)
			props.className = ((props.className || '') + ' ' + className).trim()
		}
		return props
	}
}
