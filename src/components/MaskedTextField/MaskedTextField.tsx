import React from 'react'
import ReactTextMask, { MaskedInputProps as ReactMaskedInputProps } from 'react-text-mask'

import { composeRefs } from '../../util/react'
import { Omit } from '../../util/types'
import { TextField, TextFieldProps } from '../TextField'

export type MaskType = ReactMaskedInputProps['mask']

export interface MaskedTextFieldProps extends Omit<ReactMaskedInputProps, 'style'>, TextFieldProps {}

export function MaskedTextField(props: MaskedTextFieldProps) {
  const { inputRef, style, ...rest } = props

  const renderInput = (ref: (inputElement: HTMLElement) => void, p: any) => {
    return <TextField style={style} inputRef={composeRefs(inputRef, ref)} {...p} />
  }

  return <ReactTextMask render={renderInput} {...rest} />
}
