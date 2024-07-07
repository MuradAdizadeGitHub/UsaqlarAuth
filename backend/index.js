import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { usersRouter } from './src/Routes/UsersRoute.js';
import 'dotenv/config'
import { authRouter } from './src/Routes/AuthRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users',usersRouter);
app.use('/',authRouter)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});



































// import express from 'express'
// import mongoose from 'mongoose'
// import cors from 'cors'
// import { usersRouter } from './src/Routes/UsersRoute.js'

// const app = express()
// const port = 3000

// app.use(express.json())
// app.use(cors())

// app.use('/users',usersRouter)

// mongoose.connect('mongodb+srv://murad:murad@cluster0.obvc1sg.mongodb.net/')
// .then(()=>console.log('Connected...!'))
// .catch((err)=>console.log('Not connected...!',err))


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })