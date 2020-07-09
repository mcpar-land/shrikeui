module.exports = {
	stories: ['../stories/**/*.stories.js'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-knobs',
		'@storybook/preset-typescript',
		'storybook-dark-mode/register',
	],
}
