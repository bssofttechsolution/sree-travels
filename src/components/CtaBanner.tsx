interface CtaBannerProps {
  title: string;
  subtitle?: string;
  whatsappMessage?: string;
}

export default function CtaBanner({ title, subtitle, whatsappMessage = 'Hi Sree Travels, I want to book a cab' }: CtaBannerProps) {
  const waLink = `https://wa.me/919204714249?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="cta-banner">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <div className="cta-buttons">
        <a href="tel:+919204714249" className="btn-dark">
          📞 Call +91 92047 14249
        </a>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-white" aria-label="Book a cab on WhatsApp now">
          💬 WhatsApp Now
        </a>
        <a href="mailto:info@sreetravel.com" className="btn-dark">
          ✉️ info@sreetravel.com
        </a>
      </div>
    </div>
  );
}
