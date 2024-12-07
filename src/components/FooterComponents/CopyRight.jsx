
import '../../CSS/CopyRight.css'

function CopyRight() {

    const date = new Date().getFullYear()



    return (
        <div className='copy_right'>
            <p>
                Copyright ©<span>{date}</span> All rights reserved | This template is made with &#x2665;&#xfe0f; by <span><a href="https://wa.link/dtipwm">HabibiHappyCode</a></span>
            </p>
        </div>
    )
}

export default CopyRight
