import React from 'react'
import{BsLinkedin} from "react-icons/bs"
import {AiOutlineGithub} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
const HeaderSocials = (props) => {
  return (
    <div className={props.className}>
        <a href="https://linkedin.com/in/ayowale-ojo-39934122a" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Starboyzs/Starboyzs.github.io" target = "_blank"><AiOutlineGithub/></a>
        <a href="https://twitter.com/Ayowale_Ojo_" target = "_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials