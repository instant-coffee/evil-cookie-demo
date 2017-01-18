var webpack = require('webpack');
var S3Plugin = require('webpack-s3-plugin');

module.exports = require('./shared.webpack.config')({
  outputFolder: 'build',
  outputFilename: '[name]',
  plugins: [
    new S3Plugin({
      s3Options: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-west-2'
      },
      s3UploadOptions: {
        Bucket: 'evil-cookie-demo'
      },
      // cloudfrontInvalidateOptions: {
      //   DistributionId: process.env.AWS_CLOUDFRONT_DISTRIBUTION_ID,
      //   Items: ["/*"]
      // }
    })
  ]
});