import { donationInfo } from '../donationInfo'

function Donate({ lang, t }) {
  const proofMessage =
    lang === 'en'
      ? "Hi! I just donated to Kesher Israel and I'm attaching my proof of payment."
      : '¡Hola! Acabo de donar a Kesher Israel y adjunto mi comprobante de pago.'

  const whatsappUrl = `https://wa.me/${donationInfo.whatsappNumber}?text=${encodeURIComponent(proofMessage)}`

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
