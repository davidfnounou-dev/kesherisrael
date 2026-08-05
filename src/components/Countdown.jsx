import { useEffect, useState } from 'react'
import { campaign } from '../campaign'

function getPhase(now, start, end) {
  if (now < start) return 'before'
  if (now < end) return 'active'
  return 'closed'
}

function getTimeParts(msRemaining) {
  const clamped = Math.max(0, msRemaining)
  const totalSeconds = Math.floor(clamped / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { days, hours, minutes, seconds }
}

function Countdown({ t }) {
  const start = new Date(campaign.startDate)
  const end = new Date(campaign.endDate)
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const phase = getPhase(now, start, end)
  const target = phase === 'before' ? start : end
  const { days, hours, minutes, seconds } = getTimeParts(target - now)

  const title =
    phase === 'before' ? t.countdownBeforeTitle : phase === 'active' ? t.countdownActiveTitle : t.countdownClosedTitle

  return (
    <div className={`countdown countdown-${phase}`}>
      <span className="countdown-title">{title}</span>

      {phase !== 'closed' && (
        <div className="countdown-timer">
          <div className="countdown-unit">
            <span className="countdown-value">{days}</span>
            <span className="countdown-label">{t.countdownDays}</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-value">{String(hours).padStart(2, '0')}</span>
            <span className="countdown-label">{t.countdownHours}</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-value">{String(minutes).padStart(2, '0')}</span>
            <span className="countdown-label">{t.countdownMinutes}</span>
          </div>
          <div className="countdown-unit">
            <span className="countdown-value">{String(seconds).padStart(2, '0')}</span>
            <span className="countdown-label">{t.countdownSeconds}</span>
          </div>
        </div>
      )}

      {phase === 'active' && (
        <a className="btn btn-primary countdown-cta" href="#donar">
          {t.heroCta}
        </a>
      )}
      {phase === 'before' && <p className="countdown-note">{t.countdownBeforeNote}</p>}
      {phase === 'closed' && <p className="countdown-note">{t.countdownClosedNote}</p>}
    </div>
  )
}

export default Countdown
