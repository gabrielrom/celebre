import CelebreButton from '../../../../components/CelebreButton/CelebreButton';
import Box from '../../../../components/Box/Box';
import styles from './InterestedCard.module.css';
import whatsappLogo from '../../../../assets/whatsapp-icon.svg';
import { Phone } from 'lucide-react';

function InterestedCard({ phone, phoneHref, whatsappHref }) {
  return (
    <Box className={styles.card} style={{ gap: '0px' }}>
      <h3 className={styles.title}>Interessado?</h3>
      <p className={styles.subtitle}>
        Entre em contato conosco para agendar uma visita ou tirar suas dúvidas.
      </p>

      <a href={phoneHref} className={`${styles.link} ${styles.phoneLink}`}>
        <CelebreButton 
          title={`Ligar Agora ${phone ?? ''}`}
          icon={<Phone />}
          iconGap={8}
          iconPosition="left"
          style={{ fontSize: '14px', '--icon-size': '16px', minHeight: '45px' }}
        />
      </a>

      <a href={whatsappHref} className={styles.link} target="_blank" rel="noreferrer">
        <CelebreButton
          title="Chamar no Whatsapp"
          icon={<img src={whatsappLogo} alt="Whatsapp" />}
          iconGap={8}
          iconPosition="left"
          backgroundColor="var(--success-color)"
          style={{ fontSize: '14px', '--icon-size': '16px', minHeight: '45px' }}
        />
      </a>
    </Box>
  );
}

export default InterestedCard;
