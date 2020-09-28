<<<<<<< HEAD
const File=require ('./models/file');
const fs= require('fs');
const connectDB=require('./config/db');
connectDB();
//deleteData
async function fetchData(){
  const pastDate=new Date(Date.now() - (1000*60*60*24));
  //24 hours
  const files=await File.find({ createdAt: {$lt: pastDate}});
  if(files.length){
    for(const file of files){
      try{
        fs.unlinkSync(file.path);
        await file.remove();//Remove from database
        console.log(`sucessfully deleted ${file.filename}`);
      }
      catch(err){
        console.log(`Error while deleting file ${err}`);
      }

    }
      console.log('Job done!');
  }
}

fetchData().then(process.exit);
=======
const File=require ('./models/file');
const fs= require('fs');
const connectDB=require('./config/db');
connectDB();
//deleteData
async function fetchData(){
  const pastDate=new Date(Date.now() - (1000*60*60*24));
  //24 hours
  const files=await File.find({ createdAt: {$lt: pastDate}});
  if(files.length){
    for(const file of files){
      try{
        fs.unlinkSync(file.path);
        await file.remove();//Remove from database
        console.log(`sucessfully deleted ${file.filename}`);
      }
      catch(err){
        console.log(`Error while deleting file ${err}`);
      }

    }
      console.log('Job done!');
  }
}

fetchData().then(process.exit);
>>>>>>> d01f725311bdea659eae2327093acc39862bf049
