const fs = require('fs-extra');
const { mkdir } = require('node:fs/promises');
const { resolve, join } = require('node:path');

async function makeDirectory() {
  const projectFolder = join(__dirname, 'Files');
  const dirCreation = await mkdir(projectFolder, { recursive: true });

  console.log(dirCreation);
  return dirCreation;
}

// makeDirectory().catch(console.error);

// fs.writeFile("person.txt","Helllo India",(err)=>{if(err)throw err;});


fs.move('./person.txt', './Files/Person.txt', function (err) {
    if (err) return console.error(err)
    console.log("success!")
   });
