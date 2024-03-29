/* eslint-disable @next/next/no-img-element */
import React from "react";
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
                  <ImageCustom src="logo-black.svg" width="94" height="30" alt="Unberry Talent Intelligence Platform" />
                </div>
              </th>
              <th>
                <div className={styles.iconHeadBox}>
                  <ImageCustom src="t-icon1.svg" alt="" height="80" width="70" />
                </div>
              </th>
              <th>
                <div className={styles.iconHeadBox}>
                  <ImageCustom src="t-icon2.svg" alt="" height="70" width="51" />
                </div>
              </th>
              <th>
                <div className={styles.iconHeadBox}>
                  <ImageCustom src="shl.svg" alt="" height="80" width="70" />
                </div>
              </th>
              <th>
                <div className={styles.iconHeadBox}>
                  Other Coding <br /> Test Platforms
                </div>
              </th>
            </tr>
            <tr>
              <td className={styles.tdFirst}>

                <div className={styles.iconBox}>
                  <ImageCustom src="t-envelope.svg" alt="" layout="fill" />
                </div>
                Cognition tests via Game Based Assessments
              </td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}>
                <ImageCustom src="right.svg" alt="" height="20" width="20" />
              </td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>

            </tr>
            <tr>
              <td className={styles.tdFirst}>
                <div className={styles.iconBox}>
                  <ImageCustom src="t-note.svg" alt="" layout="fill" />
                </div>
                Immersive Workplace Simulations and Interactive Caselets
              </td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}><ImageCustom src="right.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
            </tr>
            <tr>
              <td className={styles.tdFirst}>
                <div className={styles.iconBox}>
                  <ImageCustom src="t-device.svg" alt="" layout="fill" />
                </div>
                AI based Writing, Speech assessment
              </td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}><ImageCustom src="right.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
            </tr>
            <tr>
              <td className={styles.tdFirst}>
                <div className={styles.iconBox}>
                  <ImageCustom src="t-chats.svg" alt="" layout="fill" />
                </div>
                Recorded videos; rate and evaluate
              </td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}>
                <ImageCustom src="right.svg" alt="" height="20" width="20" /> <br />
                (Q4&apos;22)
              </td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="right.svg" alt="" height="20" width="20" /></td>
            </tr>
            <tr>
              <td className={styles.tdFirst}>
                <div className={styles.iconBox}>
                  <ImageCustom src="t-device.svg" alt="" layout="fill" />
                </div>
                GPT backed Chat Proficiency Analyser
              </td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}>
                <ImageCustom src="right.svg" alt="" height="20" width="20" /> <br />
                (Q4)
              </td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /> </td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
            </tr>
            <tr>
              <td className={styles.tdFirst}>
                <div className={styles.iconBox}>
                  <ImageCustom src="t-chats.svg" alt="" layout="fill" />
                </div>
                Ready APIs and SDK for integrations
              </td>
              <td className={`${styles.textCenter} ${styles.unberrySec}`}><ImageCustom src="right.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
              <td className={styles.textCenter}><ImageCustom src="wrong.svg" alt="" height="20" width="20" /></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
