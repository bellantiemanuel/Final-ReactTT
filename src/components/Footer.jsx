// Footer con informacion de la tienda y equipo de trabajo
// El equipo se carga desde /data/nosotros.json en lugar de estar hardcodeado
// Usa Container, Row y Col de react-bootstrap para el layout responsivo
// FiMail de react-icons para el icono de correo
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FiMail } from 'react-icons/fi'

function Footer() {
  const [equipo, setEquipo] = useState([])

  // Carga el equipo desde el JSON publico al montar el componente
  // Si falla la carga (por ejemplo, archivo no encontrado), el equipo queda vacio
  useEffect(() => {
    fetch('/data/nosotros.json')
      .then((res) => res.json())
      .then(setEquipo)
      .catch(() => [])
  }, [])

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

        {equipo.length > 0 && (
          <section className="footer-team" aria-label="Equipo de TechStore">
            <Row>
              {equipo.map((persona) => (
                <Col md={3} key={persona.id}>
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
        )}

        <p className="copyright">© 2026 TechStore - Todos los derechos reservados</p>
      </Container>
    </footer>
  )
}

export default Footer
