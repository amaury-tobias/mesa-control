module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: 'Mesa de Control',
        mac: {
          target: ['dmg', 'zip'],
        },
        win: {
          target: 'nsis',
        },
        publish: [
          {
            provider: 'github',
            private: true,
          },
        ],
      },
    },
  },
}
