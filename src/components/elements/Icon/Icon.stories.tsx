import { select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Cell, Grid } from '../Grid'
import { Text } from '../Text'

import { IconMap, Icons } from './generated/Icons'
import { Icon, IconColor } from './Icon'

const colors: IconColor[] = ['none', 'normal', 'secondary', 'disabled', 'primary', 'danger', 'info', 'alert', 'success']

const options: Icons[] = Object.keys(IconMap) as Icons[]

storiesOf('Components|Icon', module)
  .add('default', () => <Icon icon={select('icon', options, 'adjust') as Icons} />)
  .add('all icons', () => (
    <Grid gap={1} wrap>
      {Object.keys(IconMap).map((key: any) => (
        <Cell key={key} style={{ width: '120px' }}>
          <div style={{ background: '#f2f2f2', padding: '1rem', textAlign: 'center' }}>
            <Icon icon={key} fill={select('fill', colors, 'normal')} stroke={select('stroke', colors, 'none')} />
            <br />
            <Text style={{ wordWrap: 'break-word' }}>{key}</Text>
          </div>
        </Cell>
      ))}
    </Grid>
  ))
