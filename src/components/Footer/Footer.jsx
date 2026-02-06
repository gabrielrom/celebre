import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import instagramLogo from '../../assets/instagram-icon.svg';
import whatsappLogo from '../../assets/whatsapp-icon.svg';
import logoCelebre from '../../assets/logo-celebre.svg';
import styles from './Footer.module.css';

function Footer({ className }) {
  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.mainContent}>
        <div className={styles.brandSection}>
          <div className={styles.brandHeader}>
            <img src={logoCelebre} alt="Celebre" />
            <h2 className={styles.logoText}>Celebre</h2>
          </div>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="#" className={styles.socialLink} aria-label="WhatsApp">
              <img src={whatsappLogo} alt="WhatsApp" />
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Contato</h3>
          <div className={styles.contactList}>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>Av. Paulista, 1000 - São Paulo, SP</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>(11) 3456-7890</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} />
              <span>contato@celebre.com.br</span>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Horário de Atendimento</h3>
          <div className={styles.hoursList}>
            <div className={styles.hoursItem}>
              <span>Segunda a Sexta: 9h às 18h</span>
            </div>
            <div className={styles.hoursItem}>
              <span>Sábado: 9h às 14h</span>
            </div>
            <div className={styles.hoursItem}>
              <span>Domingo: Fechado</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        © 2026 Celebre. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
