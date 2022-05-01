## 创建项目
  - vite以html为入口
  
  ### 创建vue3项目
  - npm init @vitejs/app
  - 选择vue
  - 导入jsx插件包，可以使用jsx格式 @vitejs/plugin-vue-jsx

  ### 创建vue3项目
  - npm init @vitejs/app
  - 选择vanilla
  - 导入vue2插件包 yarn add vite-plugin-vue2 -D
  - 导入vue yarn add vue@2.6.14 vue-template-compiler -S
  - 需要配置vite.config.js
    ```js
      import { createVuePlugin } from 'vite-plugin-vue2'
      export default {
        plugins: [createVuePlugin()]
      }
    ```
  ### 创建vue3项目
  - npm init @vitejs/app
  - 选择react

