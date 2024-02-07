/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://jinniuai.com",
  generateRobotsTxt: true,
  exclude: ["/blog/tags/*"],
  outDir: "./out",
};
