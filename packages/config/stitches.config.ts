import { createStitches } from '@stitches/react';
import catpuccin from '@catppuccin/palette';

const latte = catpuccin.variants.latte;
const mocha = catpuccin.variants.mocha;
const frappe = catpuccin.variants.frappe;
const macchiato = catpuccin.variants.macchiato;

const { createTheme, styled, globalCss } = createStitches({
	theme: {
		colors: {
			backgroundColor: latte.base.hex,
			textColor: latte.text.hex,
			urlColor: latte.rosewater.hex,
			selectionColor: latte.surface2.hex,
			selectionText: latte.text.hex,
			cursor: latte.rosewater.hex,
			cursorText: latte.base.hex,
			activeBorderColor: latte.lavender.hex,
			inactiveBorderColor: latte.overlay0.hex,
			bellBorderColor: latte.yellow.hex,
			surface1: latte.surface1.hex,

			success: latte.green.hex,
			warning: latte.peach.hex,
			error: latte.maroon.hex,
			tags: latte.base.hex,

			subtext: latte.subtext1.hex,
			red: latte.red.hex,
			green: latte.green.hex,
			yellow: latte.yellow.hex,
			blue: latte.blue.hex,
			pink: latte.pink.hex,
			teal: latte.teal.hex,
			surface2: latte.surface2.hex,

			peach: latte.peach.hex,
			rosewater: latte.rosewater.hex,
			lavender: latte.lavender.hex,
			base: latte.base.hex,
			mauve: latte.mauve.hex,
			sapphire: latte.sapphire.hex,
		},
	},
});

const mochaTheme = createTheme({
	colors: {
		backgroundColor: mocha.base.hex,
		textColor: mocha.text.hex,
		urlColor: mocha.rosewater.hex,
		selectionColor: mocha.surface2.hex,
		selectionText: mocha.text.hex,
		cursor: mocha.rosewater.hex,
		cursorText: mocha.base.hex,
		activeBorderColor: mocha.lavender.hex,
		inactiveBorderColor: mocha.overlay0.hex,
		bellBorderColor: mocha.yellow.hex,
		surface1: mocha.surface1.hex,

		success: mocha.green.hex,
		warning: mocha.peach.hex,
		error: mocha.maroon.hex,
		tags: mocha.base.hex,

		subtext: mocha.subtext1.hex,
		red: mocha.red.hex,
		green: mocha.green.hex,
		yellow: mocha.yellow.hex,
		blue: mocha.blue.hex,
		pink: mocha.pink.hex,
		teal: mocha.teal.hex,
		surface2: mocha.surface2.hex,

		peach: mocha.peach.hex,
		rosewater: mocha.rosewater.hex,
		lavender: mocha.lavender.hex,
		base: mocha.base.hex,
		mauve: mocha.mauve.hex,
		sapphire: mocha.sapphire.hex,
	},
});

const frappeTheme = createTheme({
	colors: {
		backgroundColor: frappe.base.hex,
		textColor: frappe.text.hex,
		urlColor: frappe.rosewater.hex,
		selectionColor: frappe.surface2.hex,
		selectionText: frappe.text.hex,
		cursor: frappe.rosewater.hex,
		cursorText: frappe.base.hex,
		activeBorderColor: frappe.lavender.hex,
		inactiveBorderColor: frappe.overlay0.hex,
		bellBorderColor: frappe.yellow.hex,
		surface1: frappe.surface1.hex,

		success: frappe.green.hex,
		warning: frappe.peach.hex,
		error: frappe.maroon.hex,
		tags: frappe.base.hex,

		subtext: frappe.subtext1.hex,
		red: frappe.red.hex,
		green: frappe.green.hex,
		yellow: frappe.yellow.hex,
		blue: frappe.blue.hex,
		pink: frappe.pink.hex,
		teal: frappe.teal.hex,
		surface2: frappe.surface2.hex,

		peach: frappe.peach.hex,
		rosewater: frappe.rosewater.hex,
		lavender: frappe.lavender.hex,
		base: frappe.base.hex,
		mauve: frappe.mauve.hex,
		sapphire: frappe.sapphire.hex,
	},
});

const macchiatoTheme = createTheme({
	colors: {
		backgroundColor: macchiato.base.hex,
		textColor: macchiato.text.hex,
		urlColor: macchiato.rosewater.hex,
		selectionColor: macchiato.surface2.hex,
		selectionText: macchiato.text.hex,
		cursor: macchiato.rosewater.hex,
		cursorText: macchiato.base.hex,
		activeBorderColor: macchiato.lavender.hex,
		inactiveBorderColor: macchiato.overlay0.hex,
		bellBorderColor: macchiato.yellow.hex,
		surface1: macchiato.surface1.hex,

		success: macchiato.green.hex,
		warning: macchiato.peach.hex,
		error: macchiato.maroon.hex,
		tags: macchiato.base.hex,

		subtext: macchiato.subtext1.hex,
		red: macchiato.red.hex,
		green: macchiato.green.hex,
		yellow: macchiato.yellow.hex,
		blue: macchiato.blue.hex,
		pink: macchiato.pink.hex,
		teal: macchiato.teal.hex,
		surface2: macchiato.surface2.hex,

		peach: macchiato.peach.hex,
		rosewater: macchiato.rosewater.hex,
		lavender: macchiato.lavender.hex,
		base: macchiato.base.hex,
		mauve: macchiato.mauve.hex,
		sapphire: macchiato.sapphire.hex,
	},
});

export {
	mochaTheme,
	styled,
	latte,
	mocha,
	catpuccin,
	globalCss,
	frappe,
	frappeTheme,
	macchiato,
	macchiatoTheme,
};
