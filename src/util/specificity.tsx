import { css } from 'styled-components'

/**
 * Increase a rule's specificity
 * @param spec
 * @param fn
 */
const specificity = (spec: number, fn: any) => css`
	${Array(spec).fill('&').join()} {
		${fn}
	}
`

export default specificity
