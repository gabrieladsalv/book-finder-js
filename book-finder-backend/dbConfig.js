// dbConfig.js
const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server',
    database: 'BookFinderDB',
    options: {
        encrypt: true, // For Azure
        enableArithAbort: true
    }
};

module.exports = config;
