import React from 'react'


const CTA = (props) => {
  return (
    <div className="cta">
        <a className='btn'  target={props.target} href= {props.link1} download>{props.text1}</a>
        <a className='btn btn-primary'  target={props.target} href={props.link2}>{props.text2}</a>

    </div>
  )
}

export default CTA