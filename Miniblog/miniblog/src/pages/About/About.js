// CSS
import { Link } from "react-router-dom"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o mini <span>Blog</span>
      </h2>
      <p>
        Este projeto consiste em um blog feito com React no front-end e firebase 
        no back-end.
      </p>
      <Link to="/post/create" className="btn">
        Criar Post
      </Link>
    </div>
  )
}

export default About