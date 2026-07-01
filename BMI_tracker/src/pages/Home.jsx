import BMIForm from "../components/BMIForm"
import BMIResult from "../components/BMIResult"
import HistoryTable from "../components/HistoryTable"
function Home()
{
    return(<div>
    <h1>BMI TRACKER</h1>
    <BMIForm />
    
    </div>

    <BMIResult />

    <HistoryTable />
</div>)
}



export default Home;