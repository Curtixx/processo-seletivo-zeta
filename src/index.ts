import express from "express" 
import { AppDataSource } from './data-source'
import routes from './routes'

AppDataSource.initialize().then(() =>{
  const app = express()
  app.use(express.json())
  
  app.use(routes)
  
  return app.listen(3000, () =>{
    console.log('http://localhost:3000');
    
  })
})