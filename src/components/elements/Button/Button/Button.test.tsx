import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { Icon } from '../../Icon'

import { Button } from './Button'

describe('Button', () => {
    it('should render correctly with label', () => {
        const { container } = render(<Button>Button</Button>)
        expect(container).toMatchSnapshot()
    })

    it('should render correctly with icon', () => {
        const { container } = render(<Button><Icon icon='adjust' /></Button>)
        expect(container).toMatchSnapshot()
    })

    it('should render the default skin', () => {
        expect(render(<Button skin='default' kind='normal'>Button</Button>).container).toMatchSnapshot()
        expect(render(<Button skin='default' kind='primary'>Button</Button>).container).toMatchSnapshot()
        expect(render(<Button skin='default' kind='danger'>Button</Button>).container).toMatchSnapshot()
    })

    it('should render the ghost skin', () => {
        expect(render(<Button skin='ghost' kind='normal'>Button</Button>).container).toMatchSnapshot()
        expect(render(<Button skin='ghost' kind='primary'>Button</Button>).container).toMatchSnapshot()
        expect(render(<Button skin='ghost' kind='danger'>Button</Button>).container).toMatchSnapshot()
    })

    it('should render the outline skin', () => {
        expect(render(<Button skin='outline' kind='normal'>Button</Button>).container).toMatchSnapshot()
        expect(render(<Button skin='outline' kind='primary'>Button</Button>).container).toMatchSnapshot()
        expect(render(<Button skin='outline' kind='danger'>Button</Button>).container).toMatchSnapshot()
    })

    it('should have a "loading" animation when onClick return is a Promise', () => {
        const delayedFunction = () => {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 10)
            })
        }

        const { container } = render(<Button onClick={delayedFunction}>Button</Button>)
        const button = container.querySelector('button')
        expect(button.getAttribute('data-loading')).toBeFalsy()

        fireEvent.click(button)
        expect(button.getAttribute('data-loading')).toEqual('true')
    })

    it('should NOT have animation when onClick return is not a Promise', () => {
        const func = () => undefined
        const { container } = render(<Button onClick={func}>Button</Button>)
        const button = container.querySelector('button')
        expect(button.getAttribute('data-loading')).toBeFalsy()

        fireEvent.click(button)
        expect(button.getAttribute('data-loading')).toBeFalsy()
    })

    it('should accept the loading prop', () => {
        const { container } = render(<Button loading={true}>Button</Button>)
        expect(container).toMatchSnapshot()
    })
})
