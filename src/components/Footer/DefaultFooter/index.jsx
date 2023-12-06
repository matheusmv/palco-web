import HDivider from '../../Divider/HDivider';
import VDivider from '../../Divider/VDivider';
import LinkText from '../../Text/LinkText';
import NormalText from '../../Text/NormalText';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './styles.css';

function DefaultFooter() {
  return (
    <div className="DefaultFooterContainer">
      <footer className="DefaultFooter">
        <section className="DefaultFooterUpperSection">
          <LinkText className="FooterLink" content={'Termos de Uso'} />
          <VDivider className="FooterVDivider" />
          <LinkText className="FooterLink" content={'Política de Privacidade'} />
          <VDivider className="FooterVDivider" />
          <LinkText className="FooterLink" content={'Ferramenta de Consentimento de Cookies'} />
        </section>
        <HDivider />
        <section className="DefaultFooterLowerSection">
          <div className="DefaultFooterLowerSection-left">
            <NormalText
              className="FooterText"
              content={'Atlântico Avanti'}
              style={{ fontSize: '16px', fontWeight: 'bold' }}
            />
            <VDivider className="FooterVDivider" />
            <NormalText className="FooterText" content={'Loop do Sino'} />
          </div>
          <div className="DefaultFooterLowerSection-right">
            <div className="LanguageSelector">
              <ExpandMoreIcon className="LanguageSelector-icon" />
              <NormalText className="FooterText" content={'PORTUGUÊS (BR)'} style={{ fontWeight: 'bold' }} />
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default DefaultFooter;
