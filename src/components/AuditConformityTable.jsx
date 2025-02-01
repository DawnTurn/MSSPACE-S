import React from 'react'

const AuditConformityTable = () => {
    return (
        <div className='py-16'>
            <table className="w-full text-center bg-white shadow-md">
                <tr className="border-b-2 bg-descriptionHeadBg">
                    <th className="h-[4.5rem] font-semibold px-6">Clause</th>
                    <th className="h-[4.5rem] font-semibold">Criteria</th>
                    <th className="h-[4.5rem] font-semibold">Conformity Status</th>
                    <th className="h-[4.5rem] font-semibold">Evidence</th>
                </tr>

                <tr className="">
                    <td className="h-[4.5rem] text-[.8rem] font-[300]"><span className='bg-descriptionHeadBg py-3 px-4 rounded-xl'>4</span></td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        <br />
                        It has roots in a piece of classical Latin literature from 45 BC,
                    </td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300] text-errorTextColor">Not Conformity</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        <br />
                        It has roots in a piece of classical Latin literature from 45 BC,
                    </td>
                </tr>

                <tr className="bg-tableListChildBg">
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        <span className='bg-descriptionHeadBg py-3 px-3 rounded-xl'>4.1</span>
                    </td>

                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        <br />
                        It has roots in a piece of classical Latin literature from 45 BC,
                    </td>

                    <td className="h-[4.5rem] text-[.8rem] font-[300] text-successTextColor">Conformity</td>

                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        <br />
                        It has roots in a piece of classical Latin literature from 45 BC,
                    </td>
                </tr>

                <tr className="">
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        <span className='bg-descriptionHeadBg py-3 px-3 rounded-xl'>4.2</span>
                        </td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        <br />
                        It has roots in a piece of classical Latin literature from 45 BC,
                    </td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300] text-partialTextColor">Opportunity fo improvement</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        <br />
                        It has roots in a piece of classical Latin literature from 45 BC,
                    </td>
                </tr>

                <tr className="bg-tableListChildBg">
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        <span className='bg-descriptionHeadBg py-3 px-3 rounded-xl'>4.3</span>
                    </td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        <br />
                        It has roots in a piece of classical Latin literature from 45 BC,
                    </td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300] text-successTextColor">Conformity</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        <br />
                        It has roots in a piece of classical Latin literature from 45 BC,
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default AuditConformityTable