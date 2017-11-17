module.exports = (options, req) => ({
  entry: 'src/index.jsx',
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
  },
  html: {
    // `pkg` indicates the data in `package.json`
    title: 'React Redux Styled Boilerplate',
  },
  port: 999,
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
});
