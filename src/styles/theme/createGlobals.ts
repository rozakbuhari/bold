import { Interpolation } from 'emotion'

import { Pallete } from './createPallete'
import { Typography } from './createTypography'

export type Global = Interpolation

export const createGlobals = (pallete: Pallete, typography: Typography): Global => {
    return {
        'html, body': {
            height: '100%',
            margin: 0,
        },
        html: {
            fontSize: typography.htmlFontSize,
            fontFamily: typography.fontFamily,
            boxSizing: 'border-box',
            color: pallete.text.main,
            lineHeight: 1,
        },
        body: {
            backgroundColor: pallete.surface.background,
            fontSize: typography.fontSize,
            lineHeight: typography.lineHeight,
            overflowY: 'scroll',
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit',
        },
        'div, button, input, optgroup, select, textarea': {
            lineHeight: 'inherit',
        },
        hr: {
            backgroundColor: pallete.divider,
            border: 'none',
            height: 1,
            margin: '1rem 0',
        },
        'h1': { margin: 0, fontSize: '1.75rem', lineHeight: '3rem' },
        'h2': { margin: 0, fontSize: '1.25rem', lineHeight: '2rem' },
        'h3': { margin: 0, fontSize: '1rem', lineHeight: '1.5rem' },
        'h4': { margin: 0, fontSize: '0.875rem', lineHeight: '1.5rem' },
        'h5': { margin: 0, fontSize: '0.8125rem', lineHeight: '1.5rem' },
        'h6': { margin: 0, fontSize: '0.75rem', lineHeight: '1rem' },
        p: {
            margin: '0',
            lineHeight: 1.5,
        },
        a: {
            cursor: 'pointer',
            color: pallete.primary.main,
            textDecoration: 'underline',
            fontWeight: 'bold',
            '&:hover': {
                textDecoration: 'none',
            },
        },
        mark: {
            background: pallete.highlight,
        },
        'input:required': {
            boxShadow: 'none',
        },
    }
}
