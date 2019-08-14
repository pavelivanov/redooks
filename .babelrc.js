module.exports = {
  presets: [
    [ '@babel/env', { loose: true } ],
    '@babel/react',
  ]
    .filter(Boolean),
  plugins: [
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
  ],
}
