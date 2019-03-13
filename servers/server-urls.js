const environments = [
    { name: 'localhost', url: 'https://localhost:8080/' },
    { name: 'stage', url: 'https://www.facebook.com/' },
    { name: 'sandbox', url: 'https://www.facebook.com/' },
    { name: 'production', url: 'https://www.facebook.com/' },
];
const getServer = () => environments.find(env => env.name === process.env.TEST_ENV).url;

module.exports = {
    getServer,
};
