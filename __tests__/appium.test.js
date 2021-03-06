import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android Emulator',
  app: './android/app/build/outputs/apk/app-debug.apk' // relative to root of project
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load
})

test('appium renders', async () => {
  expect(await driver.hasElementById('testview')).toBe(true);
  expect(await driver.hasElementById('notthere')).toBe(false);
});

test('appium button click', async () => {
  expect(await driver.hasElementByAccessibilityId('button')).toBe(true);
  await driver.elementByAccessibilityId('button')
    .click()
    .click();

  const counter = await driver.elementByAccessibilityId('counter').text();
  expect(counter).toBe('Counter: 2');
});