import { namedColors } from './palettes/namedColors'

const {
  alto,
  white,
  black,
  transparent,
  stormGray,
  codGray,
  gallery,
  westSide,
  midnightBlue,
  christi,
  resolutionBlue,
  colonialWhite,
  dustyGray,
  graySuit,
  wildSand,
  mineShaft,
  emperor,
  lochmara,
  outerSpace
} = namedColors

const cssVariables = `
  --white: ${white};
  --black: ${black};
  --transparent: ${transparent};

  --calendarHeaderColor: ${codGray};
  --calendarDayGridBackground: ${white};
  --calendarDayGridBorderBottom: ${gallery};
  --calendarEventColor: ${white};
  --calendarEventBackground: ${westSide};
  --calendarStartBackground: ${midnightBlue};
  --calendarPastBackground: ${christi};
  --calendarNextEventBackground: ${resolutionBlue};
  --calendarTodayBackground: ${colonialWhite};
  --calendarPreviousMonthColor: ${dustyGray};
  --calendarNextMonthColor: ${dustyGray};

  --dayPickerBackground: ${white};
  --dayPickerHeaderColor: ${codGray};
  --dayPickerDayGridBackground: ${white};
  --dayPickerDayGridBorder: ${gallery};
  --dayPickerDayGridBackgroundHover: ${midnightBlue};
  --dayPickerDayGridColorHover: ${white};
  --dayPickerDayGridColorTaken: ${black};
  --dayPickerDayGridBackgroundTaken: ${alto};
  --dayPickerDayGridBackgroundPast: ${alto};
  --dayPickerDayGridBackgroundNextEvent: ${alto};
  --dayPickerDayGridBackgroundToday: ${colonialWhite};
  --dayPickerDayGridColorPreviousMonth: ${dustyGray};
  --dayPickerDayGridColorNextMonth: ${dustyGray};

  --tableLabelColor: ${dustyGray};
  --tableLabelStrongColor: ${stormGray};
  --tableBorderColor: ${graySuit};
  --tableEvenRowBackground: ${white};
  --tableOddRowBackground: ${wildSand};
  --tableHeaderBackground: ${white};
  --tableHeaderColor: ${mineShaft};
  --tableBodyColor: ${mineShaft};
  --tableBodyLinkColor: ${emperor};
  --tableBodyLinkHoverColor: ${black};

  --paginationActiveColor: ${white};
  --paginationActiveBackground: ${lochmara};
  --paginationHoverColor: ${white};
  --paginationHoverBackground: ${lochmara};
  --paginationLinkColor: ${outerSpace};

  --inputColor: ${black};
  --inputBackground: ${white};
  --inputBorderColor: ${white};
  --inputDisabledBackground: ${gallery};
  --inputPlaceholderColor: ${white};
  --inputHoverBorderColor: ${lochmara};
  --inputFocusBorderColor: ${lochmara};
  --inputIconColor: ${outerSpace};

  --dialogBackground: ${white};
  --dialogBorderColor: ${outerSpace};
`

const cssVariablesPalette = `
  .primary {
    --buttonContainedBackgroundColor: var(--palette-primary-common-main);
    --buttonContainedColor: var(--palette-primary-common-contrastText);
    --buttonContainedHoverBackgroundColor: var(--palette-primary-common-dark);
    --buttonContainedHoverColor: var(--palette-primary-common-contrastText);

    --buttonOutlinedColor: var(--palette-primary-common-main);
    --buttonOutlinedHoverBackgroundColor: var(--palette-primary-common-dark);
    --buttonOutlinedHoverColor: var(--palette-primary-common-contrastText);
  }

  .secondary {
    --buttonContainedBackgroundColor: var(--palette-secondary-common-main);
    --buttonContainedColor: var(--palette-secondary-common-contrastText);
    --buttonContainedHoverBackgroundColor: var(--palette-secondary-common-dark);
    --buttonContainedHoverColor: var(--palette-secondary-common-contrastText);

    --buttonOutlinedColor: var(--palette-secondary-common-main);
    --buttonOutlinedHoverBackgroundColor: var(--palette-secondary-common-dark);
    --buttonOutlinedHoverColor: var(--palette-secondary-common-contrastText);
  }

  .success {
    --buttonContainedBackgroundColor: var(--palette-success-common-main);
    --buttonContainedColor: var(--palette-success-common-contrastText);
    --buttonContainedHoverBackgroundColor: var(--palette-success-common-dark);
    --buttonContainedHoverColor: var(--palette-success-common-contrastText);

    --buttonOutlinedColor: var(--palette-success-common-main);
    --buttonOutlinedHoverBackgroundColor: var(--palette-success-common-dark);
    --buttonOutlinedHoverColor: var(--palette-success-common-contrastText);
  }

  .warning {
    --buttonContainedBackgroundColor: var(--palette-warning-common-main);
    --buttonContainedColor: var(--palette-warning-common-contrastText);
    --buttonContainedHoverBackgroundColor: var(--palette-warning-common-dark);
    --buttonContainedHoverColor: var(--palette-warning-common-contrastText);

    --buttonOutlinedColor: var(--palette-warning-common-main);
    --buttonOutlinedHoverBackgroundColor: var(--palette-warning-common-dark);
    --buttonOutlinedHoverColor: var(--palette-warning-common-contrastText);
  }

  .danger {
    --buttonContainedBackgroundColor: var(--palette-danger-common-main);
    --buttonContainedColor: var(--palette-danger-common-contrastText);
    --buttonContainedHoverBackgroundColor: var(--palette-danger-common-dark);
    --buttonContainedHoverColor: var(--palette-danger-common-contrastText);

    --buttonOutlinedColor: var(--palette-danger-common-main);
    --buttonOutlinedHoverBackgroundColor: var(--palette-danger-common-dark);
    --buttonOutlinedHoverColor: var(--palette-danger-common-contrastText);
  }

  .info {
    --buttonContainedBackgroundColor: var(--palette-info-common-main);
    --buttonContainedColor: var(--palette-info-common-contrastText);
    --buttonContainedHoverBackgroundColor: var(--palette-info-common-dark);
    --buttonContainedHoverColor: var(--palette-info-common-contrastText);

    --buttonOutlinedColor: var(--palette-info-common-main);
    --buttonOutlinedHoverBackgroundColor: var(--palette-info-common-dark);
    --buttonOutlinedHoverColor: var(--palette-info-common-contrastText);
  }

  .light {
    --buttonContainedBackgroundColor: var(--palette-light-common-main);
    --buttonContainedColor: var(--palette-light-common-contrastText);
    --buttonContainedHoverBackgroundColor: var(--palette-light-common-dark);
    --buttonContainedHoverColor: var(--palette-light-common-contrastText);

    --buttonOutlinedColor: var(--palette-light-common-main);
    --buttonOutlinedHoverBackgroundColor: var(--palette-light-common-dark);
    --buttonOutlinedHoverColor: var(--palette-light-common-contrastText);
  }

  .dark {
    --buttonContainedBackgroundColor: var(--palette-dark-common-main);
    --buttonContainedColor: var(--palette-dark-common-contrastText);
    --buttonContainedHoverBackgroundColor: var(--palette-dark-common-dark);
    --buttonContainedHoverColor: var(--palette-dark-common-contrastText);

    --buttonOutlinedColor: var(--palette-dark-common-main);
    --buttonOutlinedHoverBackgroundColor: var(--palette-dark-common-dark);
    --buttonOutlinedHoverColor: var(--palette-dark-common-contrastText);
  }
`

export default `${cssVariables}${cssVariablesPalette}`
