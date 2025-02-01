

const AuditManDaysReport = () => {
    return (
        <div className="rounded-t-2xl text-black bg-white mt-10 text-sm">
            <div className="h-[4.5rem] w-full flex items-center border-b-2 gap-32 px-10">
                <div className="flex items-center gap-12">
                    <p className="font-semibold">Audit Man Days (Planned)</p>
                    <p className="font-[300]">20</p>
                </div>

                <div className="flex items-center gap-6">
                    <p className="font-semibold">Audit Man Days (Actual)</p>
                    <p className="font-[300]">20</p>
                </div>
            </div>

            <table className="w-full">
                <tr className="border-b-2 border-gray-200">
                    <td className="h-[4.5rem] px-10 border-r-2 font-semibold">Difference in Man Days(If any)</td>
                    <td className="h-[4.5rem] px-10 font-[300] w-[75%]">Write Details</td>
                </tr>

                <tr className="border-b-2 border-gray-200">
                    <td className="h-[4.5rem] px-10 border-r-2 font-semibold">Justify Difference</td>
                    <td className="h-[4.5rem] px-10 font-[300]">Write Details</td>
                </tr>

                <tr className="">
                    <td className="h-[4.5rem] px-10 border-r-2 font-semibold">Stage 1 Audit NC Closure Status</td>
                    <td className="h-[4.5rem] px-10 font-[300]">Write Details</td>
                </tr>
            </table>
        </div>
    )
}

export default AuditManDaysReport