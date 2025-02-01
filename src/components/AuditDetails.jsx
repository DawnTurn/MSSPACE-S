

const AuditDetails = () => {
    return (
        <div className="rounded-t-2xl text-black bg-white text-sm">
            <table className="w-full">
                <tr className="border-b-2 border-gray-200">
                    <td className="h-[4.5rem] px-10 border-r-2 font-semibold">Business Registration</td>
                    <td className="h-[4.5rem] px-10 font-[300] w-[75%]">RC 1655343</td>
                </tr>

                <tr className="border-b-2 border-gray-200">
                    <td className="h-[4.5rem] px-10 border-r-2 font-semibold">Audit Report Number</td>
                    <td className="h-[4.5rem] px-10 font-[300]">To be filled by MQA</td>
                </tr>

                <tr className="border-b-2 border-gray-200">
                    <td className="h-[4.5rem]"></td>
                    <td className="h-[4.5rem]"></td>
                </tr>
            </table>

            <div className="h-[4.5rem] w-full bg-tableRowBg flex items-center justify-between px-10">
                <div className="flex items-center gap-10">
                    <p className="font-semibold">Audit Type</p>
                    <p className="font-[300]">initial Certification - Stage 2 Audit</p>
                </div>

                <div className="flex items-center gap-6">
                    <p className="font-semibold">Audit Date</p>
                    <p className="font-[300]">26th july 2024</p>
                </div>
            </div>

            <table className="w-full">
                <tr className="border-b-2 border-gray-200">
                    <td className="h-[4.5rem] px-10 border-r-2 font-semibold">ISO Standard Applicable</td>
                    <td className="h-[4.5rem] px-10 font-[300] w-[75%]">ISO 9001 2015</td>
                </tr>

                <tr className="border-b-2 border-gray-200">
                    <td className="h-[4.5rem]"></td>
                    <td className="h-[4.5rem]"></td>
                </tr>

                <tr className="border-b-2 border-gray-200">
                    <td className="h-[4.5rem] px-10 border-r-2 font-semibold">Scope of Certification</td>
                    <td className="h-[4.5rem] px-10 font-[300]">
                        Viva, located at Plot 33, Janet Duniya Street, beside Sefcon court, AMVE, Apo, Abuja provides services for the treatment of infertility using assisted reproductive technology (ART) to seeking couples.
                    </td>
                </tr>

                <tr>
                    <td className="h-[4.5rem] ps-10 border-r-2 font-semibold">Physical Scope of Certification <br /> <span className="font-[300]">(Street/City/Postcode)</span></td>
                    <td className="h-[4.5rem] px-10 font-[300]">
                        Plot 33 janet Duniya Street, beside Sefcon Court, AMVE, Apo, Abuja.
                    </td>
                </tr>
            </table>
        </div>
    );
};
export default AuditDetails;
