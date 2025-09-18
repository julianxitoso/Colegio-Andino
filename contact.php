<?php include 'header.php'; ?>

<main>
  <section>
    <h1>Contáctanos</h1>
    <p>¡Nos encantaría saber de ti! Si tienes preguntas sobre inscripciones, instalaciones o nuestros programas, nuestro equipo está aquí para ayudarte.</p>
  </section>

  <section>
    <div class="contact-page-layout">
      <div class="contact-top-grid">
        <div class="contact-info-column">
          <h2>Visítanos</h2>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <p>Calle 8 # 22 - 19, Frente al parque libertador</p>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone-alt"></i>
            <p>310 8934092</a></p>
          </div>
          <div class="contact-item">
            <i class="fas fa-clock"></i>
            <p>Lunes a Viernes, 8:00 AM - 4:00 PM</p>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <p><a href="mailto:s.general@coldianaoese.edu.co">s.general@coldianaoese.edu.co</a></p>
          </div>
        </div>
        <div class="contact-form-column">
          <h2>Envíanos un Mensaje</h2>
          <form id="contactForm" novalidate>
            <div class="form-group">
              <label for="name">Nombre Completo</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" class="btn">Enviar Mensaje</button>
            <p id="formMessage" class="form-message" style="display: none;"></p>
          </form>
        </div>
      </div>
      <div class="map-section">
        <div class="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.459368948794!2d-76.60946668524119!3d2.441921998344192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3d3f11de7f09c9%3A0x82f4b3a6e6a17b2b!2sParque%20Libertador!5e0!3m2!1ses!2sco!4v1678886400000!5m2!1ses!2sco0"
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación del Colegio">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</main>

<?php include 'footer.php'; ?>