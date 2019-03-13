# SheerID Automation with Nightwatch

This README describes the steps to set up the test environment for the Nightwatch E2E Tests.

This document is addressed to developers and tests with advanced knowledge in Javascript.

## Table of Contents

1.  [Overview](#overview)
2.  [Prerequisites](#prerequisites)
3.  [Tests](#tests)

## Overview

This is a basic Nightwatch Setup that would allow any developer or QA automator doing browser automation.

Nightwatch.js is an integrated, easy to use End-to-End testing solution for browser based apps and websites, written on Node.js. It uses the W3C WebDriver API to perform commands and assertions on DOM elements.

You can refer to this page for further documentation on the framework.
http://nightwatchjs.org/

**[▲ Back to Top](#table-of-contents)**

## Prerequisites

To setup up the environment, you need to have the following tools installed on your computer:

- [Node.js](https://nodejs.org/en/) to integrate the _npm_ package for JavaScript (version 10.2.1 or higher).
  To install Node.js, follow the [instructions](https://nodejs.org/en/download/).
- [Java SE Development Kit 10 Downloads](http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html)
  To install SDK select the File according your operating system.

**[▲ Back to Top](#table-of-contents)**

## Environment Setup

To install the your testing environment, follow the instructions:

For example, add this to your ~/.bashrc or ~/.bash_profile:
        
        export BROWSERSTACK_USER="johndoe"
        export BROWSERSTACK_ACCESSKEY="xxxxxxxxx"
        export FACEBOOK_USERNAME="john.doe@sheerid.com"
        export FACEBOOK_PASSWORD="xxxxxxxx"
        export SAUCE_USERNAME="wizeqateam"
        export SAUCE_ACCESS_KEY="xxxxxxxxxxxx"

```
npm install

```

1.  In the following command, select the environment and run it:

In config folder, nightwatch.conf.js comment or uncomment following lines to run BrowserStack or Saucelabs configuration:

Saucelabs
```
selenium: (useCloud ? SELENIUM_SAUCELABS_CONF : SELENIUM_CONF),
test_settings: (useCloud ? SAUCELABS_CONF : DEFAULT_CONF),
```

BrowserStack
```
selenium: (useCloud ? SELENIUM_BROWSERSTACK_CONF : SELENIUM_CONF),
test_settings: (useCloud ? BROWSERSTACK_CONF : DEFAULT_CONF),
```

For localhost:

```
npm run e2eTest

```
For browserStack:

```
npm run e2eTestBrowserStack
```

For saucelabs:

```
npm run e2eTestSauceLabs

```

2. Where I can see the test in Saucelabs? 
https://app.saucelabs.com/dashboard/tests 
Enter user and password

3. Where I can see the test in BrowserStack? 
https://automate.browserstack.com/
Enter user and password

4. Can I customize my own script in the package json and run more than 1 configuration as chrome, safari, firefox?

Yes, look USE -e environment_configuration1, environment_configuration2 (-e sauce-osx-safari,sauce-osx-chrome)

This environmental variable TEST_ENV=stage help us to switch between stage, sandbox, production etc. 

This environmental variable IS_CLOUD=true sets a flag to trigger run in cloud, like browserstack or saucelabs

```
export TEST_ENV=stage; export IS_CLOUD=true; 

```

```
 "e2eTestSauceLabs": "(export TEST_ENV=stage; export IS_CLOUD=true; ./node_modules/.bin/nightwatch -c  tests/e2e/config/nightwatch.conf.js -e sauce-osx-safari,sauce-osx-chrome)"
 ```




Result are seen on folder `reports`
**[▲ Back to Top](#table-of-contents)**
