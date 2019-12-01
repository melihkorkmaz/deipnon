import dashboardStyles from './dashboardStyles'
import commonStyles from './commonStyles'
import websiteStyles from './websiteStyles'

export default {

	// Form styles
	formFontSize: fonts.size.md,
	formFontWeight: fonts.weight.sm,
	formLineHeight: fonts.lineHeight.md,
	formColor: colors.darkGray,
	formBgColor: colors.white,
	formBorderColor: colors.lightGrayishBlue,
	formBorderWidth: '1px',
	formBorderRadius: `${layout.radius.sm}px`,
	formErrorBorderColor: colors.red,
	formPaddings: `${layout.basePadding * 0.75}px ${layout.basePadding * 1.5}px`,
	formHeight: `${layout.basePadding * 4.5}px`,

	// Buttons styles
	buttonFontSize: fonts.size.lg,
	buttonFontWeight: fonts.weight.sm,
	buttonBorderWidth: '1px',
	buttonPaddings: `${layout.basePadding * 0.75}px ${layout.basePadding * 1.5}px`,
	buttonLineHeight: fonts.lineHeight.md,
	buttonBorderRadius: `${layout.radius.sm}px`,
	buttonDefaultColor: colors.shark,
	buttonPrimaryBg: colors.azureRadiance,
	buttonPrimaryBorderColor: colors.azureRadiance,
	buttonPrimaryColor: colors.white,
	buttonSecondaryBg: colors.paleSky,
	buttonSecondaryBorderColor: colors.paleSky,
	buttonSecondaryColor: colors.white,

	// Rating styles
	ratingFillColor: colors.orangePeel,
	ratingEmptyColor: colors.silver,
	ratingDisabledColor: colors.alto,
	ratingHoverColor: colors.orangePeel,

	//AvgDeliveryTime
	AvgDeliveryTimeColorOpen:  colors.orangePeel,
	AvgDeliveryTimeColorClose: colors.red,

	...dashboardStyles,
	...commonStyles,
	...dashboardStyles,
	...websiteStyles
}
