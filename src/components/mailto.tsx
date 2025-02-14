import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './MailtoLink.css';
import INFO from '../data/user_es';

const MailtoLink = () => {
  return (
    <a href={`mailto:${INFO.main.email}`} className="mailtoCss">
      <FontAwesomeIcon icon={faPaperPlane} className="icon" />
      {INFO.main.email}
    </a>
  );
};

export default MailtoLink;
