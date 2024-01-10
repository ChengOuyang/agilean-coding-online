# Agilean Live Coding

本仓库为在线编码测试，仅供学习交流，不做任何商业用途。

编码过程中所用工具和环境均以候选人平时惯用工具为主，可自由使用互联网，包括且不限于：搜索引擎、个人笔记、AI 等。也可以自行安装惯用的 npm 包；

编码过程要求共享屏幕，展示编码全过程。
全程时间 1 小时左右，结束后以【名字+日期】为标题提交一个PR。

## [Tree](./src/tree/index.ts)
题目内容
获取接口数据渲染树，并支持节点的搜索和重命名；
题目要求：
- 将代码中的 mockDataWithChildren 和 mockDataWithNext 替换为 api.ts/fetchData 的返回数据，要求 mockDataWithChildren 和 mockDataWithNext 的数据来源相同；
- 支持通过输入框搜索 TreeWithChildren 中的节点；
- 点击按钮，在所有节点的标题修改为：agilean + 原标题；
- 按照对 React 的理解以及平时编码风格习惯，优化或重构代码
- 控制 React 组件的 re-render 次数
- TypeScript 类型友好
- 提供验证的方式