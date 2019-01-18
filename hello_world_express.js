const EXPRESS = require('express');
const APP = EXPRESS();
const PORT = 8000;
APP.get('/', (req,res)=>{
    res.send('hello world express nodejs from OpenShift');
});
// process.env.PORT: this is a PCF thing
// routes: http://expresshelloworldapp.apps.pp01i.edc1.cf.ford.com/
APP.listen(process.env.PORT || PORT, ()=>{
    console.log(`Express Server is listening on port ${PORT}\n`);
});
