
const server = require('../servers/server-urls');
const {
    useCloud, browserStackUser, browserStackKey, sauceLabsUser, sauceLabsKey,
} = require('../globals');
const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
const geckodriver = require('geckodriver');

const SELENIUM_CONF = {
    start_process: true,
    server_path: seleniumServer.path,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
        'webdriver.chrome.driver': chromedriver.path,
        'webdriver.gecko.driver': geckodriver.path,
    },
};
const SELENIUM_BROWSERSTACK_CONF = {

    start_process: false,
    host: 'hub-cloud.browserstack.com',
    port: 80,
};

const SELENIUM_SAUCELABS_CONF = {

    start_process: false,
    host: 'ondemand.saucelabs.com',
    port: 80,
};
const DEFAULT_CONF = {
    default: {
        launch_url: server.getServer(),
        selenium_port: 4444,
        selenium_host: 'localhost',
        acceptInsecureCerts: true,
        screenshots: {
            enabled: false,
            on_failure: true,
            path: './screenshots',
        },
        end_session_on_fail: false,
        skip_testcases_on_fail: false,
    },
    chrome: {
        desiredCapabilities: { browserName: 'chrome' },
    },
    firefox: {
        desiredCapabilities: {
            browserName: 'firefox',
            acceptInsecureCerts: true,
        },
    },
    safari: {
        desiredCapabilities: {
            browserName: 'safari',
            javascriptEnabled: true,
            acceptSslCerts: true,
        },
    },
};
const BROWSERSTACK_CONF = {
    default: {
        launch_url: server.getServer(),
        desiredCapabilities: {
            'browserstack.user': browserStackUser,
            'browserstack.key': browserStackKey,
            browserName: 'chrome',
            chromeOptions: {
               args: ['window-size=1280,800'],
            },
            /* device: 'iPhone 8 Plus',
            realMobile: 'true',
            os_version: '11', */
        },
        selenium_host: 'hub-cloud.browserstack.com',
        selenium_port: 80,
    },
};

const SAUCELABS_CONF = {

    default: {
        launch_url: server.getServer(),
        selenium_host: 'ondemand.saucelabs.com',
        selenium_port: 4444,
        username: sauceLabsUser,
        access_key: sauceLabsKey,
        use_ssl: false,
        silent: true,
        output: true,
        screenshots: {
            enabled: false,
            on_failure: true,
            path: './screenshots',
        },
    },
    'sauce-ipadAir2': {
        desiredCapabilities: {
            name: 'Nightwatch Template - Mobile Web iPad',
            appiumVersion: '1.10.1',
            deviceName: 'iPad_Air_2_sjc_free',
            browserName: 'Safari',
            testobject_api_key: '4D753E4313264FCBA3D08171ECED8D89',
        },
    },
    'sauce-android': {
        desiredCapabilities: {
            name: 'Nightwatch Template - Mobile Web Android',
            appiumVersion: '1.6.5',
            platformName: 'Android',
            platformVersion: '7.0',
            deviceName: 'Android GoogleAPI Emulator',
            browserName: 'chrome',
        },
        globals: {
            propertyData: {
                environment: 'android-7',
            },
        },
    },
    'sauce-iphone': {
        desiredCapabilities: {
            name: 'Nightwatch Template - Mobile Web iPhone',
            appiumVersion: '1.9.1',
            platformName: 'iOS',
            platformVersion: '12.0',
            deviceName: 'iPhone X Simulator',
            browserName: 'Safari',
        },
        globals: {
            propertyData: {
                environment: 'ios-iphone',
            },
        },
    },
    'sauce-osx-chrome': {
        desiredCapabilities: {
            name: 'Nightwatch Template - osx-chrome',
            platform: 'macOS 10.12',
            browserName: 'chrome',
            version: '61',
        },
        globals: {
            propertyData: {
                environment: 'os_x_10_12-chrome61',
            },
        },
    },
    'sauce-osx-safari': {
        desiredCapabilities: {
            name: 'Nightwatch Template - osx-safari',
            platform: 'macOS 10.14',
            browserName: 'safari',
            version: '12.0',
        },
        globals: {
            propertyData: {
                environment: 'os_x_10_12-safari10',
            },
        },
    },
    'sauce-windows-firefox': {
        desiredCapabilities: {
            name: 'Nightwatch Template - windows-firefox',
            platform: 'Windows 10',
            browserName: 'Firefox',
            version: '47.0',
        },
        globals: {
            propertyData: {
                environment: 'windows10-firefox47',
            },
        },
    },
    'local-chrome': {
        desiredCapabilities: {
            name: 'Nightwatch Template - local-chrome',
            browserName: 'chrome',
        },
        globals: {
            propertyData: {
                environment: 'local-chrome',
            },
        },
        selenium_host: 'localhost',
        selenium: {
            start_process: true,
        },
    },
    'local-firefox': {
        desiredCapabilities: {
            name: 'Nightwatch Template - local-firefox',
            browserName: 'firefox',
            marionette: true,
        },
        globals: {
            propertyData: {
                environment: 'local-firefox',
            },
        },
        selenium_host: 'localhost',
        selenium: {
            start_process: true,
        },
    },
    'local-safari': {
        desiredCapabilities: {
            name: 'Nightwatch Template - local-safari',
            browserName: 'safari',
        },
        globals: {
            propertyData: {
                environment: 'local-safari',
            },
        },
        selenium_host: 'localhost',
        selenium: {
            start_process: true,
        },
    },
};

module.exports = {
    globals_path: `${__dirname}/../globals.js`,
    launch_url: server.getServer(),
    src_folders: ['tests/e2e'],
    selenium: (useCloud ? SELENIUM_SAUCELABS_CONF : SELENIUM_CONF),
    test_settings: (useCloud ? SAUCELABS_CONF : DEFAULT_CONF),
    //selenium: (useCloud ? SELENIUM_BROWSERSTACK_CONF : SELENIUM_CONF),
    //test_settings: (useCloud ? BROWSERSTACK_CONF : DEFAULT_CONF),
    custom_commands_path: ['custom-commands'],
    custom_assertions_path: '',
    live_output: false,
    parallel_process_delay: 10,
    disable_colors: false,
    test_workers: {
        enabled: true,
        workers: 2,
    },
    page_objects_path: ['page-objects'],
    output_folder: `${__dirname}/../reports`,
};
