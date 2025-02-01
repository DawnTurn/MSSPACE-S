

const AuditAttendanceList = () => {
    return (
        <div className="text-sm">
            <h2 className="font-semibold pt-16 pb-7">Audit Attendance List</h2>
            <table className="w-full text-center bg-white shadow-md">
                <tr className="border-b-2 bg-attendantListHeadingBg">
                    <th className="h-[4.5rem] font-semibold">Auditee Name</th>
                    <th className="h-[4.5rem] font-semibold">Designation</th>
                    <th className="h-[4.5rem] font-semibold">Opening Meeting</th>
                    <th className="h-[4.5rem] font-semibold">Closing Meeting</th>
                </tr>

                <tr className="">
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Ojemeni Onyinye C</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Head of Admin</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Yes</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Yes</td>
                </tr>

                <tr className="bg-tableListChildBg">
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Ojemeni Onyinye C</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Head of Admin</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Yes</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Yes</td>
                </tr>

                <tr className="">
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Ojemeni Onyinye C</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Head of Admin</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Yes</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Yes</td>
                </tr>

                <tr className="bg-tableListChildBg">
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Ojemeni Onyinye C</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Head of Admin</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Yes</td>
                    <td className="h-[4.5rem] text-[.8rem] font-[300]">Yes</td>
                </tr>
            </table>
        </div>
    )
}

export default AuditAttendanceList