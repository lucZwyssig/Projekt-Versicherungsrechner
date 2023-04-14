import { Col, Row } from "react-bootstrap";

function Footer(){


    return(
        <Row className="row">
            <Col className="col-12 col-sm-12">
            
        <footer id="footer">

        <table>
            <tr>
                <th>
                    Kontakt
                </th>
                <th>
                    Github
                </th>
                <th>
                    Copyright
                </th>
            </tr>
            <tr>
                <td>
                    luc.zwyssig@lernende.bbw.ch
                </td>
                <td>
                    Username: lucZwyssig
                </td>
                <td>
                    Luc Zwyssig
                </td>
            </tr>
            <tr>
                <td>
                    luc.zwyssig@stud.kbw.ch
                </td>
                <td>
                    Repo: Projekt-Versicherungsrechner
                </td>
                <td>
                    cc cr
                </td>
            </tr>

          
        </table>

      </footer>
      </Col>
      </Row>
    )
}
export default Footer;