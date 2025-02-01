import AuditAttendanceList from "./components/AuditAttendanceList"
import AuditConformityTable from "./components/AuditConformityTable"
import AuditDescription from "./components/AuditDescription"
import AuditFindings from "./components/AuditFindings"
import AuditHead from "./components/AuditHead"
import AuditReportHeader from "./components/AuditReportHeader"
import AuditSummary from "./components/AuditSummary"
import Nav from "./components/Nav"

const App = () => {
    return (
        <div className="w-full bg-background">
            <Nav/>
            <main className="max-w-screen-xl px-7 mx-auto">
                <AuditReportHeader/>
                <AuditHead/>
                <AuditAttendanceList/>
                <AuditFindings/>
                <AuditSummary/>
                <AuditDescription/>
                <AuditConformityTable/>
            </main>
        </div>
    )
}

export default App