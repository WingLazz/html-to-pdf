const puppeteer = require('puppeteer'),
    chalk = require('chalk'),
    fs = require('fs')
path = require('path')

const basePdfOpts = {
    format: 'A4',
    printBackground: true
}

/**
 * @desc html to pdf
 * @param {Object} options 
 *    - { String } filePath 本地 html file path required when remoteUrl is empty
 *    - { String } remoteUrl 线上要转换的 html 链接 required when filePath is empty
 *    - { String } outputPath 输出目录 required
 *    - { Object } pdfOpts 转换为 pdf 的 options optional
 */
const htmlToPdf = async function ({
    filePath, // local html file path
    remoteUrl, // url 链接
    outputPath, // 输出目录
    pdfOpts,
}) {
    console.log(
        filePath, // local html file path
        remoteUrl, // url 链接
        outputPath, // 输出目录
        pdfOpts,
    )
    if (!(filePath || remoteUrl) || !outputPath) {
        throw chalk.red(new Error('参数不合法，请检查后重试'))
    }

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    if (!!filePath) {
        const content = fs.readFileSync(filePath, 'utf-8')

        await page.setContent(content, { waitUntil: 'load' })
    } else {
        await page.goto(remoteUrl, {
            waitUntil: 'networkidle0'
        })
    }

    await page.pdf(Object.assign({
        path: outputPath
    }, basePdfOpts, pdfOpts))

    await browser.close()
}

module.exports = htmlToPdf
