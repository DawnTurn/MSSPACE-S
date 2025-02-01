import msSpaceLogo from '../assets/msspaceLogo.png'

const nav = () => {
    return (
        <div className='w-full bg-white sticky top-0 shadow-lg'>
            <div className='flex justify-between items-center max-w-screen-xl mx-auto px-7 py-6'>
                <img src={msSpaceLogo} width={140} alt="a logo of MSSPACE"/>

                <ul className='flex gap-10 font-light text-[.9rem]'>
                    <li><a href="#">Certification</a></li>
                    <li><a href="#">Mentorship</a></li>
                    <li><a href="#">Professional</a></li>
                    <li><a href="#">Learning</a></li>
                </ul>

                <a href="#" className='flex items-center bg-background py-1 ps-6 pe-4 rounded-3xl text-sm'>
                    Msspace
                    <i className="bx bx-chevron-right text-2xl"></i>
                </a>
            </div>
        </div>
    )
}

export default nav