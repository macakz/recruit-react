import type { MenuProps as Props } from './types'
import { FaArrowLeft } from "react-icons/fa";

export const Menu = ({ setMenuOpen }: Props): JSX.Element => (
    <div className='container'>
        <div className='header'>
            <a onClick={() => setMenuOpen(false)}>
                <FaArrowLeft className='icon' />
            </a>
            Menu
        </div>
        <div className='menuContent'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in doloribus eveniet nobis vero deserunt a. Iste, atque ut autem accusantium quod officiis numquam magnam dicta, odit expedita maiores consequatur?
        </div>

    </div>
)