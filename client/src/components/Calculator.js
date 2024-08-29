// src/components/Calculator.js
import React, { useState } from "react";
import { Dropdown,Form, Button, Row, Col } from "react-bootstrap";

const Calculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
        setResult("");
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input)); // Note: eval should be used cautiously
        } catch (error) {
            setResult("Error");
        }
    };

    return (

        <Dropdown>
            <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="calculator-button"
            >
                Calculator
            </Dropdown.Toggle>

            <Dropdown.Menu className="p-3">

           
            <Form>
                <Form.Control
                    as="textarea"
                    value={input}
                    readOnly
                    rows={2}
                    className="mb-2"
                    placeholder="Enter calculation"
                />
                <Form.Control
                    as="textarea"
                    value={result}
                    readOnly
                    rows={2}
                    className="mb-3"
                    placeholder="Result"
                />
                <Row>
                    <Col>
                        <Button onClick={() => handleClick("1")}>1</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleClick("2")}>2</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleClick("3")}>3</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleClick("+")}>+</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => handleClick("4")}>4</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleClick("5")}>5</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleClick("6")}>6</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleClick("-")}>-</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => handleClick("7")}>7</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleClick("8")}>8</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleClick("9")}>9</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleClick("*")}>*</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => handleClick("0")}>0</Button>
                    </Col>
                    <Col>
                        <Button onClick={() => handleClick(".")}>.</Button>
                    </Col>
                    <Col>
                        <Button onClick={handleClear}>C</Button>
                    </Col>
                    <Col>
                        <Button onClick={handleCalculate}>=</Button>
                    </Col>
                </Row>
            </Form>
        </Dropdown.Menu>
      </Dropdown >
  );
};

export default Calculator;
