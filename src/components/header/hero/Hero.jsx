import style from "./Hero.module.css";
import person from "../../../assets/svg/Heroimg.svg"
const Hero = () => {
  return (
    <div className={style.heroMain}>
        <div className={style.text}>
            <div>
                <h1>You don&apos;t have to</h1>
                <h1>Fight them Alone.</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            </div>
            <form className={style.form}>
                <input className={style.email} type="email" placeholder="Enter your email address"/>
                <button className={style.button} onClick={(e)=>e.preventDefault()}>Let&apos;s talk</button>
            </form>
        </div>
         <div className={style.header__img}>
        <img src={person} alt="person" />
        </div>
     </div>
  )
}

export default Hero