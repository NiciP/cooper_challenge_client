module.exports = {
    launch: {
      headless: true,
      slowMo: 10,
      devtools: true,
      timeout: 100000,
      args: [
        '--disable-setuid-sandbox',
        '--no-sandbox',
        '--ignore-certificate-errors',
        "--disable-popup-blocking",
        "--disable-infobars",
        '--disable-web-security',
        "--shm-size=1gb"
      ]
    },
    browserContext: 'default',
  
    server: {
      command: `BROWSER=none npm run start`,
      port: 5000,
      launchTimeout: 40000,
    },
}