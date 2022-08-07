import {createStitches} from '@stitches/react';
import catpuccin from '@catppuccin/palette';

const latte = catpuccin.variants.latte;
const mocha = catpuccin.variants.mocha;

const {createTheme, styled} = createStitches({
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
		}
	}
});

const darkTheme = createTheme({
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

	}
});