const path = require('path');

module.exports = {
	components: 'src/components/**/[A-Z]*.vue',
	defaultExample: true,
	title: 'DF Vue Component Documentation',
	ribbon: {
		url: 'https://github.com/vue-styleguidist/vue-styleguidist',
	},
	template: {
		head: {
			title: 'DF Vue Component Documentation',
			links: [{
					rel: 'stylesheet',
					href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
				},
				{
					rel: 'stylesheet',
					href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/css/bootstrap-select.min.css',
				},
				{
					rel: 'stylesheet',
					href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
				},
			],
			scripts: [{
					src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'
				},
				{
					src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.4/js/bootstrap-select.min.js',
				},
				{
					src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
				},
			],
		},
	},
	webpackConfig: {
		module: {
			rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
			}],
		},
	},
	showUsage: true,
	showCode: true
};