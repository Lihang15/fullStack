const fs = require('fs');
const { PDFDocument } = require('pdf-lib');
const { fromBuffer } = require('pdf2pic');
const BigNumber = require('bignumber.js');

async function split(key) {
    try {
        // 判断文件后缀
        if (!key.endsWith('.pdf')) {
            // TODO: 文件需要为PDF才能切割
            throw new Error('');
        }
        // 获取文件Buffer
        // const file = await this.awsS3Service.getObject(key);
        const file = fs.readFileSync(key)
        // 加载PDF文件
        const pdfDoc = await PDFDocument.load(file);

        // 获取PDF文件页码
        const pageNumber = pdfDoc.getPageCount();

        const result = [];
        for (let index = 0; index < pageNumber; index++) {
            // 创建切割后PDF文件
            const splitDoc = await PDFDocument.create();

            // 从原PDF复制出单页PDF
            const [page] = await splitDoc.copyPages(pdfDoc, [index]);

            // 加入切割后PDF文件中
            splitDoc.addPage(page);

            // 保存文档
            const splitDocBytes = await splitDoc.save();
            const splitDocBuffer = Buffer.from(splitDocBytes);
            // fs.writeFileSync('./aa.pdf', splitDocBuffer)
            // 上传至S3
            //   const splitDocKey = await this.awsS3Service.putObject(
            //     `${key.replace('.pdf', '')}_${index}.pdf`,
            //     splitDocBuffer
            //   );
            // 上传图片
            // const splitDocImageBuffer = await sharp(splitDocBuffer, {
            //   density: 300,
            // })
            //   .jpeg()
            //   .toBuffer();
            const width = BigNumber.min(page.getWidth(), page.getHeight());
            const height = BigNumber.max(page.getWidth(), page.getHeight());
            const splitDocImageConvert = await fromBuffer(
                splitDocBuffer,
                {
                    density: 300,
                    width: new BigNumber(width).div(72).times(300).toNumber(),
                    height: new BigNumber(height).div(72).times(300).toNumber(),
                    format: "png",
                }
            )(1, {responseType: 'base64'});
            console.log(splitDocImageConvert)
            const splitDocImageBuffer = Buffer.from(
                splitDocImageConvert.base64,
                'base64'
            );
            //   const splitDocImageKey = await this.awsS3Service.putObject(
            //     `${key.replace('.pdf', '')}_${index}.png`,
            //     splitDocImageBuffer
            //   );
            fs.writeFileSync('./aa.png', splitDocImageBuffer)
            if(index===1){
                break;
            }

        }

        return result;
    } catch (e) {
        console.log(e)
    }

}

// split('/Users/wanglihang/Desktop/ocr文件/NTUC 12-10-2023/54547810.pdf')
split('/Users/wanglihang/Desktop/ocr文件/NTUC 12 Oct 2023/ttt.pdf')