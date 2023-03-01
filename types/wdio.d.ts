import { ElementLocator } from '../test/pageobjects/base/base.page';

declare global {

	namespace WebdriverIO {

		interface Browser {
			// Custom wdio commands added to the global browser object
			_$: (el: ElementLocator) => ReturnType<WebdriverIO.Browser["$"]>
			_$$: (el: ElementLocator) => ReturnType<WebdriverIO.Browser["$$"]>

		}

		interface Element {
			_$: (el: ElementLocator) => ReturnType<WebdriverIO.Browser["$"]>
			_$$: (el: ElementLocator) => ReturnType<WebdriverIO.Browser["$$"]>
		}	

	}	

}