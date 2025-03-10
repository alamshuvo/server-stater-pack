// import mongoose from 'mongoose'
import app from './app'
import { Server } from 'http'

let server: Server

async function main() {
  try {
    // console.log(config)
    // await mongoose.connect(config.dataBase_url as string)
    server = app.listen(5050, () => {
      console.log(` surver running on port 5050`)
    })
  } catch (error) {
    console.log(error)
  }
}
main()

process.on('unhandledRejection', (err) => {
  console.log(
    `unhandle Regejection is detected shutting the the surver .....`,
    err
  )

  if (server) {
    server.close(() => {
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () => {
  console.log('uncaught Exception is rejected shutting down......')

  process.exit(1)
})
