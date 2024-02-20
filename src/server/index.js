


const csvtojson = require('csvtojson');
const fs = require('fs');

const matches = '/media/hp/Local Disk/git/IPL/src/data/matches.csv';
const deliveries = '/media/hp/Local Disk/git/IPL/src/data/deliveries.csv';

const converter=(csvFilePath,name)=>{
csvtojson()
  .fromFile(csvFilePath)
  .then((jsonArray) => {
    // Now 'jsonArray' contains an array of JSON objects

    // If you want to write the JSON array to a file, you can do so
    fs.writeFileSync('/media/hp/Local Disk/git/IPL/src/public/output/'+ String(name)+'.json', JSON.stringify(jsonArray, null, 2));
  })
  .catch((error) => {
    console.error('Error converting CSV to JSON:', error);
  });
}

const name1="deliveries"
const name='matches'
const matchesData=converter(matches,name)
const deliveriesData=converter(deliveries,name1)