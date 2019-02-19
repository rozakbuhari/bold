import { Interpolation } from 'emotion'
import React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'

export type TagType = 'normal' | 'danger' | 'info' | 'success' | 'alert'

export interface TagProps extends WithStylesProps {
    type?: TagType
    style?: Interpolation
}

@withStyles
export class Tag extends React.PureComponent<TagProps> {
    static defaultProps: TagProps = {
        type: 'normal',
    }

    render() {
        const { css, theme, type, style } = this.props
        const styles: Styles = {
            tag: {
                padding: '0.25rem',
                fontWeight: 'bold',
                borderRadius: 4,
                whiteSpace: 'nowrap',
            },
        }
        const typeStyles: { [key in TagType]: any } = {
            normal: {
                background: theme.pallete.gray.c80,
            },
            danger: {
                background: theme.pallete.status.danger.main,
                color: theme.pallete.status.danger.onColor,
            },
            info: {
                background: theme.pallete.status.info.main,
                color: theme.pallete.status.info.onColor,
            },
            success: {
                background: theme.pallete.status.success.main,
                color: theme.pallete.status.success.onColor,
            },
            alert: {
                background: theme.pallete.status.alert.main,
                color: theme.pallete.status.alert.onColor,
            },
        }

        return (
            <span className={css(styles.tag, typeStyles[type], style)}>{this.props.children}</span>
        )
    }
}
