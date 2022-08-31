import { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

// questi sono le proprietà che il server si aspetta di ricevere
// ad ogni invio di prenotazione:
// name <-- string
// phone <-- string/number
// numberOfPeople <-- string/number
// smoking <-- boolean
// dateTime <-- date/string
// specialRequests <-- string

class ReservationForm extends Component {
  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: 1,
      smoking: false,
      dateTime: '',
      specialRequests: '',
    },
  }

  // il mio scopo è creare degli input field CONTROLLATI
  // controllati === con una two-way data binding
  // significa che inserendo i caratteri nei campi di testo io vado a modificare il mio state
  // significa anche che il valore del campo di testo viene LETTO in ogni momento dallo state

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center my-4">Prenota il tuo tavolo qui!</h2>
            <Form>
              <Form.Group>
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Inserisci il tuo nome"
                  value={this.state.reservation.name}
                  onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({
                      reservation: {
                        name: e.target.value,
                      },
                    })
                  }}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Numero di telefono</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Inserisci il tuo numero di telefono"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Numero di persone</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6+</option>
                </Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Check type="checkbox" label="Fumatori?" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Data e ora</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Richieste speciali</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  placeholder="Allergie, intolleranze, bambini..."
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ReservationForm
