import AWS from 'aws-sdk';

const s3Bucket = new AWS.S3({
  accessKeyId: 'AKIAUCE4LSRSZSEFVCAL',
  secretAccessKey: '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',
  region: 'ap-south-1',
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject) =>
    s3Bucket.upload(options, (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    })
  );
};
