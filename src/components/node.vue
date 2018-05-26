<template>
    <div>

    </div>
</template>

<script>
// --save-dev 开发的时候依赖的包，例如 babel  转义 ES6，发布时就不需要了。  npm i babel -D
// jq 之类的发布时任需要依赖，则 npm i jquery -S
// npm i jquery@3.1/latest
// npm cache clean -f    -f 强制的意思
// npm i -y   -y 跳过提问阶段，直接生成 package.json

// npm outdated -g 查看全局包 最新的更新版本；   npm outdated  查看本地包 最新的更新版本；
// npm install -g npm-check  用来检查npm依赖包是否有更新，错误以及不在使用的，我们也可以使用npm-check进行包的更新
// npm-check -u -g  检查npm全局包的状态
// npm-check -u  检查npm 本地包的状态

// npm run 列出其后的所有命令
// npm config get  获取配置文件 .npmrc里的信息。 除此还有 set delete....
// npm config set registry https://registry.npmjs.org    https://registry.npm.taobao.org

export default {};
</script>

<style scoped>

</style>