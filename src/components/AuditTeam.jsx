

const AuditTeam = () => {
    return (
        <div className="bg-white rounded-t-xl overflow-hidden text-black w-full h-full text-sm">
            <table className="w-full h-full">
                <tr className="border-b-2 bg-tableHeadBg">
                    <th colSpan={2} className="py-4 font-semibold">Audit team</th>
                </tr>

                <tr className="bg-gray-200">
                    <td className="py-4 font-semibold text-center">Lead Auditor</td>
                    <td className="font-semibold text-center">Audit Team</td>
                </tr>

                <tr className="border-gray-200">
                    <td className="py-4 font-[300] text-center">Feyisara Ogunranti</td>
                    <td className="font-[300] text-center">
                        Feyisara Ogunranti
                    </td>
                </tr>

                <tr className="border-gray-200">
                    <td className="font-[300] text-center"></td>
                    <td className="py-4 font-[300] text-center">
                        Taofeeq Are
                    </td>
                </tr>

                <tr className="border-gray-200">
                    <td className="font-[300] text-center"></td>
                    <td className=" py-4 font-[300] text-center">
                        Eniola Ayodele
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default AuditTeam