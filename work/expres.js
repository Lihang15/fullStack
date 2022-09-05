// if (await this.fileIsExists(`./temp/issuer-${issuerId}`)) {
      //   await compressing.zip.compressDir(`./temp/issuer-${issuerId}`, `./temp/issuer-${issuerId}.zip`);
      // }
      // const data = fs.readFileSync(`./temp/issuer-${issuerId}.zip`);
      // 直接返回buffer前端打开的可能是损坏的，需要设置正确的响应格式
      // const data = fs.readFileSync('./temp/issuer-242/issuer.2022-07-24_15-01-05.xlsx');
      // 二进制
      // ctx.set('Content-Type', 'application/octet-stream');
      // excel 类型
      // ctx.set('Content-Type', 'application/vnd.ms-excel');
      // ctx.set('Content-Disposition', 'attachment; filename=issuer.zip');



    // if (await this.fileIsExists(`./temp/issuer-${issuerId}.zip`)) {
    //   ctx.set('Content-Type', 'application/octet-stream');
    //   // excel 类型
    //   // ctx.set('Content-Type', 'application/vnd.ms-excel');
    //   ctx.set('Content-Disposition', 'attachment; filename=issuer.zip');
    //   ctx.body = fs.readFileSync(`./temp/issuer-${issuerId}.zip`);
    // }
    // if (!await this.fileIsExists(`./temp/issuer-${issuerId}`)) {
    //   if (!await this.fileIsExists('./temp')) {
    //     fs.mkdirSync('./temp');
    //   }
    //   fs.mkdirSync(`./temp/issuer-${issuerId}`);
    // }
