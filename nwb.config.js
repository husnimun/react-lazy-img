module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactLazyImg',
      externals: {
        react: 'React'
      }
    }
  }
}
