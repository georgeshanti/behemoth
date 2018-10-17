import React, { Component } from 'react';
import styles from './style.module.css';

import meclogo from './img/mec_crest.png'
import excellogo from './img/logo_text_1.png'

class LogoHeader extends Component {

    render() {
        return(
            <div className={styles["logo-header"]}>
                <div className={styles["mec_logo_container"]}>
                    <img src={meclogo} />
                    <div className={styles["logo-text"]}>
                        <span>Govt. Model</span>
                        <span>Engineering</span>
                        <span>College, Kochi</span>
                    </div>
                </div>
                <div className={styles["excel_logo_container"]}>
                    <img src={excellogo} />
                </div>
            </div>
        );
    }
  }
  
  export default LogoHeader;