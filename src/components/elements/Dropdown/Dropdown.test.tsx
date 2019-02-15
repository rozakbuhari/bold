import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { withTheme } from '../../../test'
import { Button } from '../Button'

import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownItem'
import { DropdownMenu } from './DropdownMenu'

// tslint:disable jsx-no-lambda

const createDropdown = () => (
    <Dropdown
        renderTarget={({ ref }) =>
            <Button
                label='Menu'
                innerRef={ref}
            />}
    >
        {() => (
            <DropdownMenu>
                <DropdownItem>Item #1</DropdownItem>
                <DropdownItem>Item #2</DropdownItem>
            </DropdownMenu>
        )}
    </Dropdown>
)

it('should render correctly', () => {
    render(withTheme(createDropdown()))

    expect(document.body).toMatchSnapshot()
})

it('should open menu on click', () => {
    const { getByText } = render(withTheme(createDropdown()))

    fireEvent.click(getByText('Menu'))

    expect(document.body).toMatchSnapshot()

})
