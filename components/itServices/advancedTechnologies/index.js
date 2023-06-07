/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import right from "../../../assets/right.svg";
import tIcon1 from "../../../assets/t-icon1.svg";
import tIcon2 from "../../../assets/t-icon2.svg";
import tIcon3 from "../../../assets/t-icon3.svg";
import icon1 from "../../../assets/urge1.svg";
import wrong from "../../../assets/wrong.svg";
import tDevice from "../../../assets/t-device.svg";
import tEnvelope from "../../../assets/t-envelope.svg";
import tNote from "../../../assets/t-note.svg";
import tChats from "../../../assets/t-chats.svg";
import ImageCustom from "../../../common/ImageCustom";


// Styles here
import styles from "./styles.module.scss";

export default function AdvancedTechnologieSection(props) {
  return (
    <div className={styles.advancedTechnologieStyle}>
      <div className={`container-width ${styles.containerStyle}`}>
        <h2 className={styles.titleMain}>
          We use the most advanced technologies to provide a seamless experience
        </h2>

        <div className={styles.tableSection}>
          <table>
            <tr className={styles.header}>
              <th></th>
              <th className={styles.unberrySec}>
                <div className={styles.iconHeadBox}>
                  <ImageCustom src="logo-black.svg" width="94" height="30" alt="logo" />
                </div>
              </th>
              <th>
                <div className={styles.iconHeadBox}>
                  <Image src={tIcon1} alt="" height={80} width={70} />
                </div>
              </th>
              <th>
                <div className={styles.iconHeadBox}>
                  <Image src={tIcon2} alt="" height={70} width={51} />
                </div>
              </th>
              <th>
                <div className={styles.iconHeadBox}>
                  <Image src={tIcon3} alt="" height={60} width={70} />
                </div>
              </th>
            </tr>
            <tr>
              <td className={styles.tdFirst}>

                <div className={styles.iconBox}>
                  <Image src={tEnvelope} alt="" layout="fill" />
                </div>
                Cognition tests
              </td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}><Image src={right} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
            </tr>
            <tr>
              <td className={styles.tdFirst}>
                <div className={styles.iconBox}>
                  <Image src={tNote} alt="" layout="fill" />
                </div>
                Game based assessments, Immersive experiential caselets</td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}><Image src={right} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
            </tr>
            <tr>
              <td className={styles.tdFirst}>
                <div className={styles.iconBox}>
                  <Image src={tDevice} alt="" layout="fill" />
                </div>
                AI based Writing, Speech assessment</td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}><Image src={right} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
            </tr>
            <tr>
              <td className={styles.tdFirst}>
                <div className={styles.iconBox}>
                  <Image src={tChats} alt="" layout="fill" />
                </div>
                Recorded videos; rate and evaluate</td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}><Image src={right} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={right} alt="" height={20} width={20} /></td>
            </tr>
            <tr>
              <td className={styles.tdFirst}>
                <div className={styles.iconBox}>
                  <Image src={tDevice} alt="" layout="fill" />
                </div>
                AI based Live Chat Simulators</td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}><Image src={right} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
            </tr>
            <tr>
              <td className={styles.tdFirst}>
                <div className={styles.iconBox}>
                  <Image src={tChats} alt="" layout="fill" />
                </div>
                Ready APIs and SDK for integrations</td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}><Image src={right} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
              <td className={styles.textCenter}><Image src={wrong} alt="" height={20} width={20} /></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
