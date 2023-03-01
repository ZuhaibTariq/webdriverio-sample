import { byClassChain, byPredicate } from "../../utils/envConfigs"
import { FrontPage, TabType } from "../base/front.page"
import { IOSSmartyPage } from "./smarty.page"

/*
 Page containing specific selectors and methods for a Front Page
 */

export class IOSFrontPage extends FrontPage {
	smartyInit = IOSSmartyPage
	protected Tabs: Record<TabType, string> = {
		[TabType.FLIGHTS]: byClassChain('**/XCUIElementTypeButton[`label BEGINSWITH[c] "flight"`]'),
		[TabType.STAYS]: byClassChain('**/XCUIElementTypeButton[`label in {"Stays", "hotel"}`]'),
		[TabType.CARS]: byClassChain('**/XCUIElementTypeButton[`label BEGINSWITH[c] "car"`]'),
		[TabType.PACKAGES]: "",
	}

	searchBarLC: string = byClassChain('**/XCUIElementTypeButton[`label == "Find a flight"`]')
	acceptGDPRLC: string = byClassChain('**/XCUIElementTypeButton[`label == "Confirm"`]')

	public async waitForFrontDoor() {
		await this.acceptGDPR()

		// Skip Apple ID Sign in
		let element = $(byPredicate('type == "XCUIElementTypeButton" and name == "close"'))
		await driver.waitUntil(async () => await element.isDisplayed())
		await element.click()

		// Skip Login Screen
		element = $(byPredicate('type == "XCUIElementTypeButton" and label == "AUTHSkipButton"'))
		await driver.waitUntil(async () => await element.isDisplayed())
		await element.click()
	}
}
