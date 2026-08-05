import Countdown from './Countdown'

function Campaign({ t }) {
  return (
    <section className="campaign" id="campana">
      <span className="campaign-eyebrow">{t.campaignEyebrow}</span>
      <h2 className="campaign-title">{t.campaignTitle}</h2>
      <p className="campaign-description">{t.campaignDescription}</p>
      <Countdown t={t} />
    </section>
  )
}

export default Campaign
