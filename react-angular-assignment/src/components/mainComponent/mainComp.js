import "./mainComp.css";
import data from "../../data/data.json";

const MainComp = () => {

    const tabledata = data.data;


    return (
        <div className="main-comp">
            <div className="table-container">
            <table>

                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>office</th>
                    <th>Salary</th>
                    <th>Start-Date</th>
                    <th>extn</th>
                </tr>

                {
                    tabledata.map((t) => (


                        <tr>
                            <td>{t.id}</td>
                            <td>{t.name}</td>
                            <td>{t.position}</td>
                            <td>{t.office}</td>
                            <td>{t.salary}</td>
                            <td>{t.start_date}</td>
                            <td>{t.extn}</td>
                        </tr>



                    ))
                }

            </table>
            </div>
        </div>
    );
}

export default MainComp;