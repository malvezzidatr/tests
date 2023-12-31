module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./test/styles-mock.js')
    },
    snapshotSerializers: ['@emotion/jest/serializer']
}