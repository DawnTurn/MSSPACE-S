import chevronRightSvg from '../assets/Vector.svg'

const AuditDescription = () => {
    return (
        <div className='mt-16'>
            <h2 className="font-semibold mb-5">Audit Description</h2>
            
            <table className="w-full text-center bg-white shadow-md">
                <tr className="border-b-2 bg-descriptionHeadBg">
                    <th className="h-[4.5rem] font-semibold">Non conformity type</th>
                    <th className="h-[4.5rem] font-semibold">Non Conformuty Description</th>
                    <th className="h-[4.5rem] font-semibold">Remark</th>
                </tr>

                <tr className="">
                    <th className="h-[4.5rem] text-[.8rem] font-[300] px-10 w-[20em]">
                        <span className="bg-descriptionHeadBg rounded-3xl px-5 py-3 flex gap-8 justify-center">
                            Select 
                            <img src={chevronRightSvg} width={10} alt="" />
                        </span>
                    </th>
                    <th className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has <br />
                         roots in a piece of classical Latin literature from 45 BC,</th>
                    <th className="h-[4.5rem] text-[.8rem] font-[300]">Regulatory Infractions</th>
                </tr>

                <tr className="bg-tableListChildBg">
                    <th className="h-[4.5rem] text-[.8rem] font-[300] px-10 w-[20em]">
                        <span className="bg-descriptionHeadBg rounded-3xl px-5 py-3 flex gap-8 justify-center">
                            Select 
                            <img src={chevronRightSvg} width={10} alt="" />
                        </span>
                    </th>
                    <th className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has <br />
                         roots in a piece of classical Latin literature from 45 BC,</th>
                    <th className="h-[4.5rem] text-[.8rem] font-[300]">Regulatory Infractions</th>
                </tr>

                <tr className="">
                    <th className="h-[4.5rem] text-[.8rem] font-[300] px-10 w-[20em]">
                        <span className="bg-descriptionHeadBg rounded-3xl px-5 py-3 flex gap-8 justify-center">
                            Select 
                            <img src={chevronRightSvg} width={10} alt="" />
                        </span>
                    </th>
                    <th className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has <br />
                         roots in a piece of classical Latin literature from 45 BC,</th>
                    <th className="h-[4.5rem] text-[.8rem] font-[300]">Regulatory Infractions</th>
                </tr>
            </table>
        </div>
    )
}

export default AuditDescription