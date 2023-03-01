import { byAccessibility, byID, locale } from "../../../utils/envConfigs"
import { Calendar } from '../../base/calendar/calendar.page';

export class AndroidCalendar extends Calendar {

	applyLC: string = byID("doneTextView")

	public findDate(date: Date) {
		const month_name: string = date.toLocaleString(locale.toString().replace("_", "-"), { month: "long" }).toUpperCase()
		const day: number = date.getDate()
		return $(byAccessibility(`${day} ${month_name}`))
	}
}
