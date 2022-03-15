import { Form } from '../../elements/Form/Form'
import type { RegisterCardProps as Props } from './types'

export const RegisterCardForm = ({ setMenuOpen }: Props): JSX.Element => (
    <>
        <h1>RegisterCardForm</h1>
        <Form />
        <button onClick={() => setMenuOpen(true)}>Open Menu</button>
    </>
)