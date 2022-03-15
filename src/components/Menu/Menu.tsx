import type { MenuProps as Props } from './types'

export const Menu = ({ setMenuOpen }: Props): JSX.Element => (
    <>
        <h1>Menu</h1>
        <button onClick={()=>setMenuOpen(false)}>Close menu</button>
    </>
)