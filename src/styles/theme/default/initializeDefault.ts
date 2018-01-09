import cssGlobal from '../../cssGlobal'
import normalizeCss from '../../normalizeCss'
import { Theme } from '../Theme'

export default function initializeDefault(theme: Theme) {
    cssGlobal(normalizeCss)
    cssGlobal({
        html: {
            fontSize: theme.font.textSize,
            fontFamily: theme.font.textFamily,
            boxSizing: 'border-box',
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit',
        },
        hr: {
            backgroundColor: theme.color.gray10,
            border: 'none',
            height: 1,
            margin: '1rem 0',
        },
        'h1, h2, h3, h4, h5, h6': {
            fontFamily: theme.font.titleFamily,
        },
    })
}
