const fetch = require('node-fetch')
const fs = require('fs')
const prettier = require('prettier')

async function main() {
	console.log('fetching icons from github...')
	let icons = await fetch(
		'https://raw.githubusercontent.com/FortAwesome/Font-Awesome/master/metadata/icons.json'
	).then(r => r.json())

	for (const [key, icon] of Object.entries(icons)) {
		if (!icon.free) {
			console.log(key, "isn't free")
		}
	}

	let freeIconKeys = Object.keys(icons).filter(
		icon => icons[icon].free && icons[icon].free.length > 0
	)

	let iconsmap = freeIconKeys.reduce((res, key) => {
		let prefix = 'fas'
		if (icons[key].styles.includes('brands')) prefix = 'fab'

		res[key] = prefix

		return res
	}, {})

	console.log('icons fetched, writing to file.')

	const file = `
		export const icons = ${JSON.stringify(iconsmap, null, 2)}

		export type IconNames = keyof typeof icons
	`

	fs.writeFileSync(
		'./src/types/icons.tsx',
		prettier.format(file, {
			parser: 'babel-ts',
			quoteProps: 'consistent',
			...(await prettier.resolveConfig('.prettierrc')),
		})
	)
	console.log('wrote to file.')
}

main()
