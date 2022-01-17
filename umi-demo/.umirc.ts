import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy:{
    '/api':{
      'target': 'http://localhost:7001', //跨域的后台接口地址
      'changeOrigin':true,
      'pathRewrite':{'^/api':''},
    }
  },
  fastRefresh: {},
});
