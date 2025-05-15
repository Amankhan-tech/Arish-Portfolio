import React from 'react'
import emailIcon from '../../assets/contact/emailIcon.png'
import githubIcon from '../../assets/contact/githubIcon.png'
import linkedinIcon from '../../assets/contact/linkedinIcon.png'
import styles from './Contact.module.css'

const Contact = () => {
  return <footer className={styles.container} id='contact'>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={emailIcon} alt="Email" />
            <a href="mailto:arishwasim123@gmail.com">arishwasim123@gmail.com</a>
        </li>

        <li className={styles.link}>
            <img src={linkedinIcon} alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/arish-wasim-a09b5123a/">linkedin.com/arishwasim</a>
        </li>

        <li className={styles.link}>
            <img src={githubIcon} alt="Github" />
            <a href="https://github.com/wasimarish">github.com/wasimarish</a>
        </li>
        
    </ul>
  </footer>
}

export default Contact
