const {setHeadlessWhen, setCommonPlugins}= require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config= {
  name: 'adrianWResto',
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://127.0.0.1:9000',
      show: true,
      windowSize: '1200x1000',
    },
  },
  include: {
    I: './steps_file.js',
  },
};
