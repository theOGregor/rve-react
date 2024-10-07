const   express = require('express'),
        dbOperation = require('./dbfiles/dbOperation'),
        cors    = require('cors');

// const API_PORT = process.env.PORT || 5000;
// const app = express();


// app.use(cors());

// app.get('/api', function(req,res) {
//     console.log('Called Get');
//     res.send({result: 'Hello World'})
// })

// app.get('/quit', function(req,res) {
//     console.log('Called Quit');
//     res.send({result: 'Goodbye World'})
// })

dbOperation.getMembers().then(res => {
    console.log(res.recordset)
})
// app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));