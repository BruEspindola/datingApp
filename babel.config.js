module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: [
          {'@components': './src/components'},
          {'@screens': './src/screens'},
          {'@validations': './src/validations'},
          {'@navigator': './src/navigator'},
          {'@helper': './src/helper'},
          {'@context': './src/context'},
          {'@assets': './src/assets'},  
          {'@images': './src/assets/images'},          
          {'@style': './src/theme'},          
          {'@services': './src/services'},          

        ],
      },
    ],
  ],
};
