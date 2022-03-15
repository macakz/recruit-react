import { Form } from '../../elements/Form/Form'
import type { RegisterCardProps as Props } from './types'

export const RegisterCard = ({ setMenuOpen }: Props): JSX.Element => (
    <>
        <button onClick={() => setMenuOpen(true)}>Open Menu</button>
        <h1>RegisterCard</h1>
        <Form />
    </>
)