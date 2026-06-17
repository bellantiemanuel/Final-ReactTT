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
      <section className="footer-info">
        <h2>TechStore</h2>
        <p>
          Somos una tienda especializada en productos tecnologicos, accesorios y
          soluciones digitales para hogares, estudiantes y profesionales.
        </p>
        <p>Ciudad Autónoma de Buenos Aires - contacto@techstore.com</p>
      </section>

      <section className="footer-team" aria-label="Equipo de TechStore">
        {equipo.map((persona) => (
          <article className="team-card" key={persona.id}>
            <img src={persona.foto} alt={`Foto de ${persona.nombre}`} />
            <div>
              <h3>{persona.nombre}</h3>
              <p>{persona.puesto}</p>
              <a href={`mailto:${persona.email}`}>{persona.email}</a>
            </div>
          </article>
        ))}
      </section>

      <p className="copyright">© 2026 TechStore - Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer
