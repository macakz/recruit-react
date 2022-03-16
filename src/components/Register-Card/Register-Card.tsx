import { Form } from '../../elements/Form/Form'
import type { RegisterCardProps as Props } from './types'
import { FaBars } from "react-icons/fa";
import '../../App.css';

export const RegisterCard = ({ setMenuOpen }: Props): JSX.Element => (
    <div className='container'>
        <div className='header'>
            <a onClick={() => setMenuOpen(true)}>
                <FaBars className='icon' />
            </a>
            Register
        </div>
        <Form />
    </div>
)