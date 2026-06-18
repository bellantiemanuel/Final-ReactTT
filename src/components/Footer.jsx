// Footer con informacion de la tienda y equipo de trabajo
// Usa Container, Row y Col de react-bootstrap para el layout responsivo
// FiMail de react-icons para el icono de correo
import { Container, Row, Col } from 'react-bootstrap'
import { FiMail } from 'react-icons/fi'

const equipo = [
  {
    id: 1,
    nombre: 'Emanuel',
    email: 'emagod@gmail.com',
    puesto: 'Web Master',
    foto: '/images/ema.webp'
  },
  {
    id: 2,
    nombre: 'Laura',
    email: 'laurita@gmail.com',
    puesto: 'SEO',
    foto: '/images/lau.webp'
  },
  {
    id: 3,
    nombre: 'Tomas',
    email: 'tomisin@gmail.com',
    puesto: 'Junior',
    foto: '/images/tomi.webp'
  }
]

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <section className="footer-info">
          <h2>TechStore</h2>
          <p>
            Somos una tienda especializada en productos tecnologicos, accesorios y
            soluciones digitales para hogares, estudiantes y profesionales.
          </p>
          <p>Ciudad Autónoma de Buenos Aires - contacto@techstore.com</p>
        </section>

        <section className="footer-team" aria-label="Equipo de TechStore">
          <Row>
            {equipo.map((persona) => (
              <Col md={4} key={persona.id}>
                <article className="team-card">
                  <img src={persona.foto} alt={`Foto de ${persona.nombre}`} />
                  <div>
                    <h3>{persona.nombre}</h3>
                    <p>{persona.puesto}</p>
                    <a href={`mailto:${persona.email}`}>
                      <FiMail size={14} /> {persona.email}
                    </a>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </section>

        <p className="copyright">© 2026 TechStore - Todos los derechos reservados</p>
      </Container>
    </footer>
  )
}

export default Footer
