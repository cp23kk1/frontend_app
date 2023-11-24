var fs = require('fs');

module.exports = function (APPVERSION, COMMITID) {
  const htmlContent = `<style>*{margin:0;padding:0;color:#002755;}h1{text-transform:uppercase;}#wrapper{display:flex;flex-direction:column;align-items:center;gap:1rem;width:100vw;height:100vh;box-sizing:border-box;padding:1rem;}#wrapper > div{display:flex;align-items:center;min-width:600px;border-radius:0.8rem;box-sizing:border-box;padding:1rem 0.2rem;background:#002755;color:#e9f4ff;text-transform:uppercase;}#wrapper > div span{display:block;min-width:200px;box-sizing:border-box;padding:01rem;color:#e9f4ff;font-weight:bolder;}</style><div id="wrapper"><h1>APPLICATIONinformation</h1><div><span>applicationName:</span>BIZONE-PRESENTMENT</div><div><span>version:</span>${APPVERSION}</div><div><span>gitcommitid:</span>${COMMITID}</div></div>`;
  fs.writeFile('public/info.html', htmlContent, (error) =>
    console.error(error)
  );
};
