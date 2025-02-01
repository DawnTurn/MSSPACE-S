

const AuditFindings = () => {
    return (
        <div className="mt-16">
            <h2 className="font-semibold mb-3">Number of Audit Findings</h2>

            <div className="flex gap-10">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-10">
                        <div className='font-[300]'>
                            <span className='py-4 px-7 bg-minorBg rounded-l-lg'>Minor</span>
                            <span className='py-4 px-5 bg-white rounded-r-lg'>22</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="grant-certification" name='grant-certification'/>
                                <label for="grant-certification" className="text-[.7rem]">Grant Certification</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="grant-certification2" name='grant-certification2'/>
                                <label for="grant-certification2" className="text-[.7rem]">Grant Certification <span className="text-labelColor1">Subject to the action needed for the comment (s) raised</span></label>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-10">
                        <div className='font-[300]'>
                            <span className='py-4 px-7 bg-majorBg rounded-l-lg'>Major</span>
                            <span className='py-4 px-5 bg-white rounded-r-lg'>09</span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="suspend" name='suspend'/>
                                <label for="suspend" className="text-[.7rem] text-labelColor2">Suspend and Special visit required</label>
                            </div>

                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="withdrawal" name='withdrawal'/>
                                <label for="withdrawal" className="text-[.7rem] text-labelColor3">Immediately withdrawal of certification</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[45%]">
                    <h2 className="mb-2">Remark</h2>
                    <div className="bg-white w-full h-full rounded-md"></div>
                </div>
            </div>
        </div>
    )
}

export default AuditFindings