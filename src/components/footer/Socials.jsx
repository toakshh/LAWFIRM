import Insta from "../../assets/svg/insta.svg"
import Fb from '../../assets/svg/fb.svg'
import twitter from '../../assets/svg/twitter.svg'
import pintrest from '../../assets/svg/pintrest.svg'



const Socials = () => {
    const accounts= [
        {
            id: "instagram",
            logo: Insta,
            ref: "instagram.com",
        },
        {
            id: "facebook",
            logo: Fb,
            ref: "facebook.com",
        },
        {
            id: "Twitter",
            logo: twitter,
            ref: "twitter.com",
        },
        {
            id: "Pinterest",
            logo: pintrest,
            ref: "pinterest.com",
        },
    ]
  return (
    <div style={{display:'flex',gap:'20px'}}>

        {
            accounts.map(account=>{
                return (<a key={account.id} href={account.ref}><img src={account.logo} alt={account.id} /></a>)
            })
        }
    </div>
  )
}

export default Socials