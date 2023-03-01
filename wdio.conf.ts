import { androidOptions, iosOptions, isAndroid, platform} from './test/utils/envConfigs';
import { OS } from './test/utils/enums';
import { EnvironmentalError } from "./test/utils/exceptions"
import { ElementLocator } from "./test/pageobjects/base/base.page"
import { Options } from '@wdio/types/';

export const config: Options.Testrunner = {
	autoCompileOpts: {
		autoCompile: true,
		tsNodeOpts: {
			transpileOnly: true,
			project: "./tsconfig.json",
		},
	},
	port: 4723,

	specs: ["./test/specs/**/*.ts"],

	maxInstances: 1,

	capabilities: isAndroid() ? androidOptions() : iosOptions(),

	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: "trace",

	baseUrl: "http://localhost/",

	waitforTimeout: 10000,

	connectionRetryTimeout: 120000,

	connectionRetryCount: 3,

	framework: "mocha",

	// reporters: ["spec", ["allure", { outputDir: "allure-results" }]],
	reporters: ["spec"],

	mochaOpts: {
		ui: "bdd",
		timeout: 60000,
	},

	before: function (_capabilities, _specs) {

		if (([OS.ANDROID, OS.IOS] as string[]).includes(platform)) {
			browser.addCommand("_$", (locator: ElementLocator) => {
				return $(driver.isAndroid ? locator.android : locator.ios);
			}, true);
			browser.addCommand("_$$", (locator: ElementLocator) => {
				return $$(driver.isAndroid ? locator.android : locator.ios);
			}, true);

			// browser.addCommand("_$", (locator: ElementLocator) => {
			// 	return $(driver.isAndroid ? locator.android : locator.ios);
			// });
			// browser.addCommand("_$$", (locator: ElementLocator) => {
			// 	return $$(driver.isAndroid ? locator.android : locator.ios);
			// });
		}
		else
			throw new EnvironmentalError(`platform is required to be either '${OS.ANDROID}' or '${OS.IOS}'`);
	}
}