
export default function App1() {
    let std = [{ name: 'hamza', rollno: "12", depart: "SE" },
    { name: "suleman", rollno: "13" }]
    return (
        <div className="App">
            <table className="table">
                <tr className='row'>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Department</th>
                </tr>
                <tr>
                    <td>{std[0].name}</td>
                    <td>{std[0].rollno}</td>
                    <td>{std[0].depart}</td>
                </tr>
            </table>
        </div>
    )
}