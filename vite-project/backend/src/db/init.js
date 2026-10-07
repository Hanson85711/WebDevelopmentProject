import mongoose from 'mongoose'

export function initDatabase() {
    const DATABASEURL = 'mongodb://localhost:27017/blog'
    mongoose.connection.on('open', () => {
        console.info('successfully connected to database: ', DATABASEURL)
    })
    const connection = mongoose.connect(DATABASEURL)
    return connection
}