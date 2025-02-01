import phoenixLogo from '../assets/pheonix-logo.png'
import downloadBtn from '../assets/downloadBtn.png'
import AuditDetails from './AuditDetails'
import AuditTeam from './AuditTeam'
import Employees from './Employees'
import AuditManDaysReport from './AuditManDaysReport'

const AuditHead = () => {
    return (
        <div className='text-white bg-auditContainerBg rounded-xl px-8 py-8'>
            <div className="flex justify-between items-start">
                <div className='flex gap-12'>
                    <div className='flex flex-col items-center'>
                        <img src={phoenixLogo} width={100} alt="a logo of a phoenix" />
                        <p className='text-sm pt-3'>Phoenix</p>
                    </div>
                    <div className='self-end'>
                        <h1 className='font-[500] text-5xl'>Internal audit</h1>
                        <h2 className='text-2xl font-[400]'>ISO 9001/14001/45001</h2>
                        <h3 className='text-2xl font-[400]'>Stage II</h3>
                    </div>
                </div>
                <button className='flex items-center py-3 px-4 gap-2 bg-downloadBtnBg rounded-3xl'>
                    <img src={downloadBtn} width={15} alt="a download button logo" />
                    <span className='text-[.7rem]'>Download report</span>
                </button>
            </div>
            <p className='flex justify-end gap-5 pb-5'>
                <span className='font-sm'>Management Representative</span>
                <span className='font-[100]'>Dr Stephen Hati</span>
            </p>

            <AuditDetails/>

            <div className='pt-10 flex gap-10'>
                <AuditTeam/>
                <Employees/>
            </div>

            <AuditManDaysReport/>
        </div>
    )
}

export default AuditHead