import { Container } from "react-bootstrap";
import {Col} from 'react-bootstrap'
import { useState } from "react";

interface Inputp {
  Calc: (value: number) => void;
  Premium?: (value: number) => void;
}

function Input (props: Inputp) {
    
    const [Versumme, setVersumme] = useState("");
    const [Schaden, setSchaden] = useState("");
    const [Hauswert, setHausw] = useState("");
    const [Prämie, setPrämie] = useState("");
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const versummeNumber = parseFloat(Versumme);
        const hauswertNumber = parseFloat(Hauswert);
        const schadenNumber = parseFloat(Schaden);
        const prämieNumber = parseFloat(Prämie);

        if (hauswertNumber === 0) {
            return;
        } else {
            const returnvalue = (versummeNumber / hauswertNumber * schadenNumber);
            props.Calc(returnvalue);
            props.Premium && props.Premium(prämieNumber);
        }
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>, setValue: React.Dispatch<React.SetStateAction<string>>) {
        const value = event.target.value;
        const isValidInput = /^\d*$/.test(value);
        if (isValidInput) {
            setValue(value);
        }
    }

    return (
        <Container fluid>
            <Col className='col' id='colform'>
                <form onSubmit={handleSubmit}>
                    <Col className='mor'>
                        <input type="text" placeholder="Versicherungssumme eingeben" value={Versumme} onChange={(event) => handleInputChange(event, setVersumme)}/>
                    </Col>
                    <Col className='mor'>
                        <input type="text" placeholder="Schaden eingeben" value={Schaden} onChange={(event) => handleInputChange(event, setSchaden)}/>
                    </Col>
                    <Col className='mor'>
                        <input type="text" placeholder="Hauswert eingeben" value={Hauswert} onChange={(event) => handleInputChange(event, setHausw)}/>
                    </Col>{
                        props.Premium && (
                            <Col className="mor">
                        <input type="text" placeholder="Prämie eingeben" value={Prämie} onChange={(event) => handleInputChange(event, setPrämie)}/>
                    </Col>
                            
                        )
                    }

                    
                    <input type="submit" value="submit" />
                </form>
            </Col>
        </Container>
    )
}

export default Input;