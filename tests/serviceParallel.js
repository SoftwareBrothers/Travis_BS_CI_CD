// const {
//     Builder,
//     By,
//     Key,
//     until,
//     Capabilities
// } = require('selenium-webdriver');
// const webdriver = require('selenium-webdriver');
// const {
//     expect
// } = require('chai');

// let capabilities = [{
//         "os": "Windows",
//         "os_version": "10",
//         "browserName": "Chrome",
//         "browser_version": "80.0 beta",
//         "project": "Service",
//         "browserstack.local": "false",
//         "browserstack.debug": "true",
//         "browserstack.selenium_version": "4.0.0-alpha-1",
//         'acceptSslCerts': 'true',
//         'browserstack.user': 'januszjan1',
//         'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
//         'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
//     }, {
//         "os": "OS X",
//         "os_version": "High Sierra",
//         "browserName": "Safari",
//         "browser_version": "11.0",
//         "project": "Service",
//         "browserstack.local": "false",
//         "browserstack.selenium_version": "3.5.2",
//         "browserstack.user": "januszjan1",
//         'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY,
//         'browserstack.localIdentifier': process.env.BROWSERSTACK_LOCAL_IDENTIFIER,
//     }

// ]

// capabilities.forEach((systemVersion) => {

//     describe('DefaultTest', () => {
//         let driver;




//         beforeEach(async () => {
//             driver = new webdriver.Builder().
//             usingServer('http://hub-cloud.browserstack.com/wd/hub').
//             withCapabilities(systemVersion).
//             build();
//             //local testing
//             //     driver = await new Builder().forBrowser(system).build();

//         })

//         it('Just testing flow for selenium in SB company', async () => {
//             await driver.manage().window().maximize();
//             await driver.get('https://softwarebrothers.co/');
//             await driver.findElement(By.linkText("Services")).click();
//             await driver.sleep(2000);
//             await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//a[@aria-label= 'dismiss cookie message' and @role='button']")))).click();
//             await driver.sleep(2000);
//             await driver.findElement(By.className(("webdev"))).click();
//             await driver.sleep(2000);
//             const title = await (await driver.findElement(By.xpath("//*[text()='Web Design and Development']"))).getText();
//             expect(title.toUpperCase()).to.have.string('WEB DESIGN AND DEVELOPMENT');
//         });

//         it('Just testing flow for selenium in SB company', async () => {
//             await driver.manage().window().maximize();
//             await driver.get('https://softwarebrothers.co/');
//             await driver.findElement(By.linkText("Services")).click();
//             await driver.sleep(2000);
//             await driver.wait(until.elementIsVisible(driver.findElement(By.xpath("//a[@aria-label= 'dismiss cookie message' and @role='button']")))).click();
//             await driver.sleep(2000);
//             await driver.findElement(By.className(("webdev"))).click();
//             await driver.sleep(2000);
//             const title = await (await driver.findElement(By.xpath("//*[text()='Web Design and Development']"))).getText();
//             expect(title.toUpperCase()).to.have.string('WEB DESIGN AND DEVELOPMENT');
//         });

//         afterEach(async () => {
//             await driver.quit();
//         });

//     });
// })