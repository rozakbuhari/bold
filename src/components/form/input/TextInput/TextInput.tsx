import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Input, PublicInputProps } from '../Input/Input'

export type InputStatus = '' | 'error'

export interface TextInputProps extends PublicInputProps, WithStylesProps {
    status?: InputStatus
    password?: boolean
}

export const createStyles = (theme) => ({
    input: {
        backgroundColor: theme.color.white,
        border: 'solid 1px ' + theme.color.gray80,
        borderRadius: theme.baseRadius,
        fontFamily: theme.font.textFamily,
        fontSize: '0.75rem',
        lineHeight: '1',
        padding: '0.5rem 1rem',
        width: '100%',
        '::placeholder': {
            color: theme.color.gray80,
        },
        ':disabled': {
            backgroundColor: theme.color.background,
        },
        ':not(:disabled):hover': {
            borderColor: theme.color.gray60,
        },
        ':not(:disabled):focus': {
            borderColor: theme.color.primary,
            outline: 'none',
        },
        ':not(:disabled):active': {
            borderColor: theme.color.primary,
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
        },
    },
    error: {
        border: 'solid 1px ' + theme.color.red,
    },
})

@withStyles
export class TextInput extends React.Component<TextInputProps> {

    public input: Input

    focus() {
        this.input.focus()
    }

    blur() {
        this.input.blur()
    }

    render() {
        const { css, password, status, theme, ...rest } = this.props
        const styles = createStyles(theme)

        const classes = css(styles.input,
            status === 'error' && styles.error)

        return (
            <Input
                ref={input => this.input = input}
                {...rest}
                className={classes}
                type={password ? 'password' : 'text'}
            />
        )
    }

}
