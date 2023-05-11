import { Col, Row, Table } from "react-bootstrap";

function Footer(){


    return (
        <div> 
        
        <footer className="footer" >
            <Table responsive="md" className="custom-table">
                <thead>
                    <tr>
                        <th scope="col">Kontakt</th>
                        <th scope="col">Github</th>
                        <th scope="col">Copyright</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>luc.zwyssig@lernende.bbw.ch</td>
                        <td>Username: lucZwyssig</td>
                        <td>Luc Zwyssig</td>
                    </tr>
                    <tr>
                        <td>luc.zwyssig@stud.kbw.ch</td>
                        <td>Repo: Projekt-Versicherungsrechner</td>
                        <td>cc cr</td>
                    </tr>
                </tbody>
            </Table>
        </footer>
        </div>
        
      );
    }
export default Footer;