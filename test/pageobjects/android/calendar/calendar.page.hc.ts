import { byAccessibility } from "../../../utils/envConfigs"
import { AndroidCalendar } from './calendar.page';

export class AndroidCalendarHC extends AndroidCalendar {

	public findDate(date: Date) {
		const day: number = date.getDate()
		return $(byAccessibility(`${date.toLocaleString("en-US", { month: "long" }).toUpperCase()} ${day}`))
	}
}
