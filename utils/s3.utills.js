const {S3Client} = require("@aws-sdk/client-s3")

const config ={
 
    region:"eu-north-1",
    // region: 'us-east-1',
    credentials: {
      accessKeyId: "AKIARHQOMTS3NIUYEV4H",
      secretAccessKey: "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",
    },
}

const s3 = new S3Client(config)

module.exports=s3