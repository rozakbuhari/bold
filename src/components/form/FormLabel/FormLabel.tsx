import { Interpolation } from 'emotion'
import React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../styles'
import { Omit } from '../../../util/types'

export interface FormLabelProps extends WithStylesProps,
    Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'style'> {
    label: React.ReactNode
    required?: boolean
    style?: Interpolation
}

@withStyles
export class FormLabel extends React.PureComponent<FormLabelProps> {

    render() {
        const { css, label, required, theme, style, ...rest } = this.props
        const styles: Styles = {
            label: {
                fontWeight: 'bold',
            },
            marker: {
                color: theme.pallete.status.danger.main,
                marginLeft: '0.25rem',
            },
        }

        return (
            <label className={css(styles.label, style)} {...rest}>
                {label}

                {required &&
                    <span title='Campo obrigatório' className={css(styles.marker)}>&#42;</span>
                }
            </label>
        )
    }

}
