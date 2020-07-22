module.exports = {
  presets: [
    '@babel/preset-env',  //converte o codigo de js moderno pra mais antigo (com base no ambiente) pra o browser entender
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
};