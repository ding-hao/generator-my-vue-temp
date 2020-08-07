const Generator = require('yeoman-generator')
module.exports = class extends Generator {
    // yeoman 询问用户环节会调用此方法
    prompting() {
        // prompting 方法有可以调用prompt方法
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'your project name',
            default: this.appname
        }]).then(answer => {
            this.answer = answer
        })
    }
    wirting() {
        // 以模板文件为参照的相对路径
        const arrPath = [
            'README.md',
            'package-lock.json',
            'package.json',
            'babel.config.js',
            '.gitignore',
            'src/main.js',
            'src/App.vue',
            'src/components/HelloWorld.vue',
            'src/assets/logo.png',
            'public/index.html',
            'public/favicon.ico',
        ]
        arrPath.forEach(item => {
            // templatePath模板文件路径 destinationPath输出文件路径 上下文内容
            this.fs.copyTpl(this.templatePath(item),this.destinationPath(item),this.answer)
        })
    }
}