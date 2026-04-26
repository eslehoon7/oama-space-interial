const https = require('https');
https.get('https://postimg.cc/1nNBJdyy', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(data.match(/https:\/\/i\.postimg\.cc\/[^"]+/g)));
});
