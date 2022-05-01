## vue3项目配置
  ### css功能
  - 官方已经集成postcss
    - 开发使用@console.error hello root时报异常
    - 安装包@postcss-plugins/console
    ```js
      // postcss.config.js
      module.exports = {
        plugins: [require('@postcss-plugins/console')]
      }
    ```
  - alias 配置快捷路径
    ```js
      // vite.config.js
      resolve: {
        alias: {
          '@styles': '/src/styles'
        }
      }
    ```
  - css-module
    ```js
      // App.jsx
      import classes from '@styles/test.module.css'
      <div class={`${classes.modulecss}`}></div>
    ```
  
  - pre-processors
    - less安装 yarn add less
    ```js
      // test.less
      @bgColor: red;
      .con {
        background-color: @bgColor;
      }
    ```