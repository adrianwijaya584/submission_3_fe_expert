const sharp= require('sharp');
const path= require('path');
const fs= require('fs-extra');

(async ()=> {
  const target= path.resolve(__dirname, 'src/public/images');
  const dest= path.resolve(__dirname, 'dist/images');

  const destIsExist= await fs.exists('dist/images');

  if (!destIsExist) {
    await fs.mkdir('dist/images');
  }

  const targetDir= await fs.readdir(target);
  const filename= image.split('.').slice(0, -1).join('.');

  targetDir.forEach((image)=> {
    sharp(`${target}/${image}`)
        .resize(800)
        .toFile(path.resolve(
            __dirname,
            `${dest}/${filename}-large.jpg`,
        ));

    sharp(`${target}/${image}`)
        .resize(480)
        .toFile(path.resolve(
            __dirname,
            `${dest}/${filename}-small.jpg`,
        ));
  });
})();
