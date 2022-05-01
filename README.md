## vite
  ### 目标
  - 掌握vite使用
    - vite使用
      - 各种前端框架集成
      - Css、图片、Wasm之类的第三方资源加载
      - TypeScript、JSX不同语法集成
      - glob import
      - 预编译文件
      - 后端集成
    - vite插件开发和实战
  - 理解vite原理
    - vite的源码解析
  - 构建对于前端构建的认知
  ### 什么是Vite
  - 高阶封装
    - 核心是rollup
    - 不包含自己的编译功能
    - hight leve
  - 目标
    - 使用简单，集成devServer
    - 快
    - 便于扩展
  - 对比其他构建工具的优势
    - 为项目构建而生，不是单纯为了js构建
    - 减少了很多配置
      - dev server
      - 各种loader
      - build命令
    - 优势
      - 上手简单
      - 开发效率极高
      - 社区成本低（兼容rollup插件）