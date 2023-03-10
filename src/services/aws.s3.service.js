import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const client = new S3Client({
  region: "sa-east-1",
  credentials: {
    accessKeyId: "AKIAVE3CM52XSBBL6JWB",
    secretAccessKey: "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",
  },
});

const bucket = "ubice";
const album = "photos";

export async function uploadPhoto(photo) {
  const putObjectInput = {
    Bucket: bucket,
    Key: `${album}/${photo.name}`,
    Body: photo,
  };
  const putObjectCommand = new PutObjectCommand(putObjectInput);
  const putObjectResponse = await client.send(putObjectCommand);
}

export async function uploadPhotos(photos) {
  const promisesArr = photos.map((p) => {
    return uploadPhoto(p);
  });
  const response = await Promise.all(promisesArr);
}
