import * as fs from 'fs/promises'

// fs.readfile (JSON in folder)
let result = await fs.readFile('boardgames.json');
let data = JSON.parse(result);
//console.log(data);

for (let i in data) {
  //console.log(i); // i property loop
  // data.[i]
  let filename = `${i}.json`
  // Stringify the value
  let bg = JSON.stringify(data[i]);
  // save file
  await fs.writeFile(filename, bg);
  // await = async
}