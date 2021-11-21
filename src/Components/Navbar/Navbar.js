import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = props => {

    const [showList, setShowList] = useState(false);

    const toggleClassHandler = () => {
        setShowList((prevState) => {
            return !prevState
        })
    }

    const classWithActive = `${styles['nav-links']} ${showList && styles.active}`

    return <nav className={styles.navbar}>
        <div className={styles.logo}>
            <p>Responsive</p>
        </div>
        <div className={styles.toggle}>
            <i className='bx bx-menu' onClick={toggleClassHandler}></i>
        </div>
        <ul className={classWithActive}>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Services</a></li>
            <li><a href='/'>Pricing</a></li>
        </ul>
    </nav>
}

export default Navbar;
