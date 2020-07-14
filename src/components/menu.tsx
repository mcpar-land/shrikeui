import React, { useState } from 'react'
import styled from 'styled-components'
import { usePopper } from 'react-popper'

const MenuCore: React.FC<{
	className: string
	anchor?: React.ReactElement
	arrow: boolean
}> = ({ anchor, className, children, arrow = false }) => {
	const [anchorRef, setAnchorRef] = useState<any>(null)
	const [popperRef, setPopperRef] = useState<any>(null)
	const [arrowRef, setArrowRef] = useState<any>(null)
	const { styles, attributes } = usePopper(anchorRef, popperRef, {
		modifiers: [{ name: 'arrow', options: { element: arrowRef } }],
	})

	let a = anchor
		? React.cloneElement(anchor, {
				ref: setAnchorRef,
		  })
		: null

	return a ? (
		<>
			{a}
			<MenuBase
				className={className}
				ref={setPopperRef}
				style={styles.popper}
				{...attributes.popper}
			>
				{children}
				{arrow && <MenuArrow ref={setArrowRef} style={styles.arrow} />}
			</MenuBase>
		</>
	) : (
		<MenuBase className={className}>{children}</MenuBase>
	)
}

const MenuCoreStyled = styled(MenuCore)``

const MenuBase = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;

	border: ${p => p.theme.borderWidth}px solid black;
	border-radius: ${p => p.theme.borderRadius}px;
`

const MenuItem = styled.div`
	padding: ${p => p.theme.spacing(1)};
	cursor: pointer;
	user-select: none;
	transition: 0.33s background;

	&:hover {
		background: lightgray;
	}
`

const MenuSubMenu = styled(MenuBase)`
	margin-left: 10px;

	border-radius: 0;
	border: none;
`

const MenuArrow = styled.div`
	color: red;
	width: 5px;
	height: 5px;
	background: blue;
`

const Menu: typeof MenuCoreStyled & {
	Item: typeof MenuItem
	Menu: typeof MenuSubMenu
} = Object.assign(MenuCoreStyled, {
	Item: MenuItem,
	Menu: MenuSubMenu,
})

export { Menu }
