const   config  = require('./dbConfig'),
        sql     = require('mssql');

const getMembers = async() => {
    try {
        let pool = await sql.connect(config);
        let members = pool.request().query("select * from mbr_data");
        console.log(members);
        return members;
    }
    catch(error) {
        console.log(error);
    }
}

module.exports = {
    getMembers
}