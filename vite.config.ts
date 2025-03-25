import { defineConfig, ViteDevServer } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import express, { json, Request, Response } from 'express'
import 'dotenv/config'
import mongoose, { connect, Model, mongo, Schema } from 'mongoose'
const app = express();
app.use(json())

//
const uri = `mongodb+srv://beliczkyzsolt:${process.env.VITE_MONGODBPASSWORD}@animals.thgcw.mongodb.net/bash-db?retryWrites=true&w=majority&appName=animals`;
/* async function db_ping() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
db_ping().catch(console.dir); */
//
//console.log(process.env.VITE_MONGODBPASSWORD)

async function connectToDb(){
  try{
    await mongoose.connect(uri);
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log("Connected to DB....");
  }
  catch(e){
    console.error(e)
  }
}
await connectToDb();
const commandSchema = new Schema({
  like: Number,
  commandName: String,
  description: String,
  url: String
})
if(mongoose.modelNames().includes('commands')){//escape error
  mongoose.deleteModel('commands')
}
const CommandModel = mongoose.model('commands', commandSchema);

async function getCommands(){
  const allCommands = await CommandModel.find({});
  return allCommands;
}

app.get('/api/commands', async (req: Request,res: Response) => {
  const allCommands = await getCommands();
  res.send(allCommands)
})

app.post('/api/new-command', async (req: Request, res: Response) => {
  try{
    let newCommand = req.body;
    console.log(newCommand)
    let newCommandPeldany = new CommandModel(newCommand);
    await newCommandPeldany.save();
    res.status(201).send({message: "New command is successfully created"})
  }
  catch(e){
    console.error(e)
    res.status(500).send({message: 'New command could not be created. BOCSIII'})
  }
})

function expressPlugin() {
  return {
    name: "express-plugin",
    configureServer(server: ViteDevServer) {
      server.middlewares.use(app);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), expressPlugin()],
  server: {
    proxy: {
      "/api": "http://localhost:5173/", // Ensure Vite dev server routes requests properly
    },
  },
})
