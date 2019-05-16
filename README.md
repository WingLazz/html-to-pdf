
### html-to-pdf
> Base on puppeteer. Transform html to pdf. Not only online href, but local html file is supported


#### Install
Install with npm
```javascript
npm install --save html2pdf-simple
```

#### Usage

1. 文件引入
```javascript
var htmlToPdf = require('html2pdf-simple')

// transform by local file
htmlToPdf({ filePath: '/Users/../Downloads/test.html', outputPath: '/Users/../Downloads/test.pdf' })

// transform by romote href
htmlToPdf({ remoteUrl: 'https://www.baidu.com/', outputPath: '/Users/../Downloads/baidu.pdf' })
```

2. 命令行工具
```
htmlToPdf --remoteUrl 'https://www.baidu.com/' --outputPath '/Users/../Downloads/baidu.pdf'
```

#### Options
>    - { String } filePath 本地 html file path required when remoteUrl is empty
>    - { String } remoteUrl 线上要转换的 html 链接 required when filePath is empty
>    - { String } outputPath 输出目录 required
>    - { Object } pdfOpts 转换为 pdf 的 options optional
