import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { HeadObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import dotenv from 'dotenv'

import { logger } from '../utils/logger'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

const uploadFileToS3 = async (filePath: string, fileName: string): Promise<string> => {
  const fileBuffer = fs.readFileSync(filePath)

  const params = {
    Bucket: process.env.AWS_BUCKET!,
    Key: fileName,
    Body: fileBuffer,
  }

  await s3.send(new PutObjectCommand(params))
  return `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileName}`
}

const uploadImages = async () => {
  const imagesPath = path.resolve(__dirname, '../images')
  const files = fs.readdirSync(imagesPath)

  for (const file of files) {
    const filePath = path.join(imagesPath, file)

    try {
      await s3.send(
        new HeadObjectCommand({
          Bucket: process.env.AWS_BUCKET!,
          Key: file,
        }),
      )
      logger.info(`File "${file}" already exists. Replacing...`)
    } catch (err: unknown) {
      if ((err as Error).name !== 'NotFound') {
        throw err
      }
      logger.info(`File "${file}" does not exist. Uploading...`)
    }

    const url = await uploadFileToS3(filePath, file)
    logger.info(`Uploaded: ${file} → ${url}`)
  }
}

uploadImages().catch(err => logger.error('[ERROR]', err))
