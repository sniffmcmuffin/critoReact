import React from 'react'

import img_BackgroundWavyLines from '../../assets/images/background-wavy-lines.svg'

const SignUp = () => {
  return (
 <div>
    <section className="signup">
        <div className="container">
            <div className="content">
                <h2>Get News Updates By Signup</h2>
                <a className="btn-yellow" href="#">username@domain.com</a>
                <a className="btn-transparent" href="#">Subscribe<i className="fa-solid fa-arrow-pointer fa-rotate-90"></i></a>
            </div>
        </div>
        <img src={img_BackgroundWavyLines} alt="Wavey lines" className="background-lines3" />
    </section>
</div>
  )
}

export default SignUp