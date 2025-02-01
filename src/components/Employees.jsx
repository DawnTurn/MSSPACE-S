

const Employees = () => {
    return (
        <div className="bg-white rounded-t-xl overflow-hidden text-black w-full h-full text-sm">
            <table className="w-full h-full">
                <tr className="border-b-2 bg-tableHeadBg">
                    <th colSpan={2} className="py-4 font-semibold">No of Employees</th>
                </tr>

                <tr>
                    <td className="py-4 font-semibold px-16">General Shift</td>
                    <td className="font-[300] px-16">Write Numbers</td>
                </tr>

                <tr className="bg-gray-200">
                    <td className="py-4 font-semibold px-16">Shift 2</td>
                    <td className="font-[300] px-16">Write Numbers</td>
                </tr>

                <tr>
                    <td className="py-4 font-semibold px-16">Shift 3</td>
                    <td className="font-[300] px-16">Write Numbers</td>
                </tr>

                <tr className="bg-gray-200">
                    <td className="py-4 font-semibold px-16">Temporary site</td>
                    <td className="font-[300] px-16">Write Numbers</td>
                </tr>
            </table>
        </div>
    )
}

export default Employees