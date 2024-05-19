const path = require('path');

module.exports = {
	extensionsToTreatAsEsm: ['.ts', '.tsx'],
	testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
	transform: {
		'^.+\\.(t|j)sx?$': [
			'@swc/jest',
			{
				jsc: {
					target: 'es2022',
				},
			},
		],
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!(lodash-es))'],
	collectCoverage: false,
	collectCoverageFrom: ['src/**/*.{ts,js}'],
	coveragePathIgnorePatterns: ['node_modules'],
	coverageReporters: ['text', 'lcov'],
	testPathIgnorePatterns: ['node_modules', 'dist'],
};
