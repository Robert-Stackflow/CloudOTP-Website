import 'dotenv/config';
import COS from 'cos-nodejs-sdk-v5';
import fs from 'fs';
import path from 'path';

const cos = new COS({
  SecretId: process.env.COS_SECRET_ID!,
  SecretKey: process.env.COS_SECRET_KEY!,
});

const bucket = process.env.COS_BUCKET!;
const region = process.env.COS_REGION!;
const prefix = process.env.COS_PREFIX || '';
const localDir = path.resolve('dist');

function uploadDir(dir: string, cosPath = prefix) {
  fs.readdirSync(dir).forEach((name) => {
    const filePath = path.join(dir, name);
    const key = cosPath ? `${cosPath}/${name}` : name;

    if (fs.statSync(filePath).isDirectory()) {
      uploadDir(filePath, key);
    } else {
      cos.putObject(
        {
          Bucket: bucket,
          Region: region,
          Key: key,
          Body: fs.readFileSync(filePath),
          Headers: {
            'Cache-Control': 'max-age=31536000',
          },
        },
        (err) => {
          if (err) {
            console.error(`❌ 上传失败: ${key}`, err);
          } else {
            console.log(`✅ 上传成功: ${key}`);
          }
        }
      );
    }
  });
}

if (!fs.existsSync(localDir)) {
  console.error('❌ dist 目录不存在，请先执行构建');
  process.exit(1);
}

console.log('🚀 开始上传 dist...');
uploadDir(localDir);
