import { Brand, Locale } from "./enums"

export const GDPR_LOCALES: Locale[] = [
	Locale.da_DK,
	Locale.ko_KR,
	Locale.de_DE,
	Locale.fr_FR,
	Locale.de_AT,
	Locale.es_ES,
	Locale.en_GB,
	Locale.zh_CN,
	Locale.it_IT,
	Locale.sv_SE,
]

export enum Activity {
	FRONT_DOOR
}

export const activityMap: Record<Activity, Record<Brand, string>> = {

	[Activity.FRONT_DOOR]: {
		[Brand.KK]: ".frontdoor.FrontDoorActivity",
		[Brand.MM]: "com.kayak.android.frontdoor.FrontDoorActivity",
		[Brand.HC]: "com.kayak.android.frontdoor.FrontDoorActivity",
		[Brand.CF]: "",
		[Brand.CX]: "",
		[Brand.MU]: "",
		[Brand.SW]: ""
	}
}

export const regexMap: Record<string, string> = {
	"TLW": "\\w{3}",
	"MON": "\\w{3}",
	"DAY": "\\d{1,2}",
	"YEAR": "\\d{4}"
}
