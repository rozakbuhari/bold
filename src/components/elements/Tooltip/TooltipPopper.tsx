import { Interpolation } from 'emotion'
import React from 'react'

import { Theme, useStyles } from '../../../styles'

export interface TooltipPopperProps {
  text: string
  style?: Interpolation
}

export function TooltipPopper(props: TooltipPopperProps) {
  const { style, text } = props
  const { classes, css } = useStyles(styles)
  const { classes: sizeClasses } = useStyles(sizeStyles)

  const size = text && text.length > 60 ? 'big' : 'small'

  return <div className={css(classes.base, sizeClasses[size], style)}>{text}</div>
}

export const styles = (theme: Theme) => ({
  base: {
    borderRadius: theme.radius.popper,
    maxWidth: theme.breakpoints.size.lg,
    background: theme.pallete.gray.c20,
    color: theme.pallete.gray.c100,
    fontWeight: 'bold',
    lineHeight: 1.5,
  } as React.CSSProperties,
})

export const sizeStyles = () => ({
  small: {
    textAlign: 'center',
    padding: '0.5rem',
  } as React.CSSProperties,
  big: {
    textAlign: 'left',
    padding: '1rem',
    maxWidth: 277,
  } as React.CSSProperties,
})
