
const AuditReportHeader = () => {
    return (
        <div className="flex justify-between items-center py-12">
            <h1 className="text-2xl font-semibold">Audit report</h1>
            <button>
                <a href="#" className='flex items-center bg-button-background gap-2 py-1 pe-6 ps-4 rounded-3xl text-sm'>
                    <i class='bx bxs-chevron-left-circle text-xl'></i>
                    <span className="pt-[3px]">back</span>
                </a>
            </button>
        </div>
    )
}

export default AuditReportHeader