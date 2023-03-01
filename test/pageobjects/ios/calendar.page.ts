
import { byClassChain } from "../../utils/envConfigs"
import { Calendar } from "../base/calendar/calendar.page"

export class IOSCalendar extends Calendar {
	applyLC: string = byClassChain('**/XCUIElementTypeButton[`name == "CalendarApply"`]')


	public findDate(date: Date) {
		const day: number = date.getDate()
		const month: number = date.getMonth() + 1
		const year: number = date.getFullYear()
		return $(byClassChain(`**/XCUIElementTypeStaticText[\`name BEGINSWITH "Calendar_${year}-${month}-${day}"\`]`))
	}
}
