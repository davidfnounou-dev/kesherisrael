import { useState } from 'react'
import { donationInfo } from '../donationInfo'

function Donate({ lang, t }) {
  const [copied, setCopied] = useState(null) // 'yappy' | 'ach' | null

  const proofMessage =
    lang === 'en'
      ? "Hi! I just donated to Kesher Israel and I'm attaching my proof of payment."
      : '¡Hola! Acabo de donar a Kesher Israel y adjunto mi comprobante de pago.'

  const whatsappUrl = `https://wa.me/${donationInfo.whatsappNumber}?text=${encodeURIComponent(proofMessage)}`

  const achText = [
    `${t.donateAchBankField}: ${donationInfo.bank}`,
    `${t.donateAchTypeField}: ${donationInfo.accountType}`,
    `${t.donateAchNumberField}: ${donationInfo.accountNumber}`,
    `${t.donateAchHolderField}: ${donationInfo.accountHolder}`,
  ].join('\n')

  const copyToClipboard = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      // Fallback for browsers without clipboard permission
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <section className="donate" id="donar">
      <h2 className="donate-title">{t.donateTitle}</h2>
      <p className="donate-subtitle">{t.donateSubtitle}</p>

      <div className="donate-grid">
        <div className="donate-card">
          <h3 className="donate-card-title">{t.donateYappyLabel}</h3>
          <img className="donate-qr-image" src="/yappy-qr.png" alt="Código QR de Yappy" />
          <p className="donate-value">{donationInfo.yappyPhone}</p>
          <p className="donate-instructions">{t.donateYappyInstructions}</p>
          <button
            type="button"
            className="btn btn-copy"
            onClick={() => copyToClipboard(donationInfo.yappyPhone, 'yappy')}
          >
            {copied === 'yappy' ? t.donateCopied : t.donateCopyPhone}
          </button>
        </div>

        <div className="donate-card">
          <h3 className="donate-card-title">{t.donateAchLabel}</h3>
          <dl className="donate-details">
            <div className="donate-detail-row">
              <dt>{t.donateAchBankField}</dt>
              <dd>{donationInfo.bank}</dd>
            </div>
            <div className="donate-detail-row">
              <dt>{t.donateAchTypeField}</dt>
              <dd>{donationInfo.accountType}</dd>
            </div>
            <div className="donate-detail-row">
              <dt>{t.donateAchNumberField}</dt>
              <dd>{donationInfo.accountNumber}</dd>
            </div>
            <div className="donate-detail-row">
              <dt>{t.donateAchHolderField}</dt>
              <dd>{donationInfo.accountHolder}</dd>
            </div>
          </dl>
          <button type="button" className="btn btn-copy" onClick={() => copyToClipboard(achText, 'ach')}>
            {copied === 'ach' ? t.donateCopied : t.donateCopyAch}
          </button>
        </div>
      </div>

      <div className="donate-proof">
        <h3 className="donate-proof-title">{t.donateProofTitle}</h3>
        <p className="donate-proof-text">{t.donateProofText}</p>
        <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          {t.donateProofButton}
        </a>
      </div>
    </section>
  )
}

export default Donate
