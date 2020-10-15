const path = require('path');
const outputPath = `dist/${process.env.TARO_ENV}`;

const config = {
  projectName: 'taro3_vant',
  date: '2020-10-14',
  designWidth: 750,
  deviceRatio: {
    375: 1 / 2,
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: outputPath,
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      { from: 'src/components/vant-weapp/wxs', to: `${outputPath}/components/vant-weapp/wxs` },
      { from: 'src/components/vant-weapp/common/style', to: `${outputPath}/components/vant-weapp/common/style` },
      { from: 'src/components/vant-weapp/common/index.wxss', to: `${outputPath}/components/vant-weapp/common/index.wxss` },
      { from: 'src/components/vant-weapp/calendar/index.wxs', to: `${outputPath}/components/vant-weapp/calendar/index.wxs` },
      { from: 'src/components/vant-weapp/calendar/utils.wxs', to: `${outputPath}/components/vant-weapp/calendar/utils.wxs` },
      { from: 'src/components/vant-weapp/calendar/calendar.wxml', to: `${outputPath}/components/vant-weapp/calendar/calendar.wxml` },
      { from: 'src/components/vant-weapp/calendar/components/month/index.wxs', to: `${outputPath}/components/vant-weapp/calendar/components/month/index.wxs` },
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: [/van-/]
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    router: {
      mode: 'hash',
      customRoutes: {
        '/pages/index/index': '/'
      }
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
