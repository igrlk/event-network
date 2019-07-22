module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          '@screens': './src/screens',
          '@api': './src/library/api',
          '@components': './src/library/common/commonComponents',
          '@utilities': './src/library/utilities',
        },
      },
    ],
  ],
};
