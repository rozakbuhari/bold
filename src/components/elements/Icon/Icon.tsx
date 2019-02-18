import { Interpolation } from 'emotion'
import * as React from 'react'

import { TextColor, useStyles } from '../../../styles'
import { getTextColor, Theme } from '../../../styles/theme/createTheme'
import { Omit } from '../../../util/types'

import { IconMap, Icons } from './generated/Icons'

export type IconColor = TextColor | 'none'

export interface IconProps extends Omit<React.SVGAttributes<SVGElement>, 'style'> {
    icon: Icons
    fill?: IconColor
    stroke?: IconColor
    size?: number
    style?: Interpolation
}

export const getIconColor = (theme: Theme, color: IconColor) => {
    return !color || color === 'none' ? color : getTextColor(theme, color)
}

export const Icon = (props: IconProps) => {
    const { style, icon, fill, stroke, size, ...rest } = props
    const SelectedIcon = IconMap[icon]

    const { classes, css } = useStyles(theme => ({
        icon: {
            fill: fill ? getIconColor(theme, fill) : 'currentColor',
            stroke: stroke && getIconColor(theme, stroke),
            fontSize: size && size + 'rem',
        },
    }))

    return (
        <SelectedIcon
            role='img'
            aria-hidden='true'
            className={css(classes.icon, style)}
            {...rest}
        />
    )
}

Icon.defaultProps = {
    size: 1.5,
} as Partial<IconProps>
