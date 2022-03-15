import type { RegisterCardFormProps as Props } from './types'

export const RegisterCardForm = ({ setMenuOpen }: Props):JSX.Element => (
    <>
        <h1>RegisterCardForm</h1>
        <button onClick={()=>setMenuOpen(true)}>Open Menu</button>
    </>
)