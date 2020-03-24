const url = require('url');

const rootUrl = process.env.ROOT || "http://localhost:3000/";
const iframePath = 'iframe';

const urlGenerator = ({ ownerId=404 }) => {
  return url.resolve(rootUrl, iframePath, ownerId);
}

module.exports = urlGenerator;