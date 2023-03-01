import { Activity, activityMap } from "./constants"
import { brand } from "./envConfigs"

export async function waitForActivity(activity: Activity, duration = 10000) {
	await browser.waitUntil(async () => (await browser.getCurrentActivity()) == activityMap[activity][brand], {
		timeout: duration,
		timeoutMsg: `Timed Out after waiting ${duration} ms for '${activityMap[activity][brand]}'`,
	})
}
