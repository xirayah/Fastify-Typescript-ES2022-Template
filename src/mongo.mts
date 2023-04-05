import mongoose from "mongoose";


try {
    async () => {
        await mongoose.connect('mongodb://localhost:27017')
    }
} catch (e: any) {
    const err = e
    console.log(typeof err)
    console.log('mongo Connection Catch:' + String(err))
}

