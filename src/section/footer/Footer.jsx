import styles from './Footer.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Gaurav Kumar. <br />
            All right reserved.
        </p>
    </section>
  )
}

export default Footer
