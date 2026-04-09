'use client';

import { useState } from 'react';

interface BookingWidgetProps {
  defaultFrom?: string;
  defaultTo?: string;
  cityName?: string;
}

export default function BookingWidget({ defaultFrom = '', defaultTo = '', cityName = '' }: BookingWidgetProps) {
  const [activeTab, setActiveTab] = useState('one-way');
  const [from, setFrom] = useState(defaultFrom);
  const [to, setTo] = useState(defaultTo);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cabType, setCabType] = useState('sedan');

  const tabs = [
    { id: 'one-way', label: '🚗 One Way' },
    { id: 'round-trip', label: '🔄 Round Trip' },
    { id: 'local', label: '🏙️ Local' },
    { id: 'airport', label: '✈️ Airport' },
  ];

  const handleBookWhatsApp = () => {
    const tripType = tabs.find(t => t.id === activeTab)?.label || 'One Way';
    const message = `Hi Sree Travels, I want to book a cab.\n\n` +
      `🚖 Trip Type: ${tripType}\n` +
      `📍 From: ${from || 'Not specified'}\n` +
      `📍 To: ${to || 'Not specified'}\n` +
      `📅 Date: ${date || 'Not specified'}\n` +
      `⏰ Time: ${time || 'Not specified'}\n` +
      `🚗 Cab Type: ${cabType}\n` +
      `👤 Name: ${name || 'Not specified'}\n` +
      `📞 Phone: ${phone || 'Not specified'}`;
    
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919204714249?text=${encoded}`, '_blank');
  };

  return (
    <div className="booking-widget">
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.6rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '0.15rem' }}>
          Book Your Cab <span className="gold-text">Now</span>
        </h2>
        <p style={{ fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', color: 'var(--text-secondary)' }}>
          Instant confirmation • 24/7 Service • Verified Cabs
        </p>
      </div>

      <div className="booking-form-modern">
        <div className="form-group-modern">
          <label>Trip Type</label>
          <select value={activeTab} onChange={e => setActiveTab(e.target.value)}>
            {tabs.map(tab => (
              <option key={tab.id} value={tab.id}>{tab.label}</option>
            ))}
          </select>
        </div>
        <div className="form-group-modern">
          <label>Cab Type</label>
          <select value={cabType} onChange={e => setCabType(e.target.value)}>
            <option value="hatchback">Hatchback (4 seater)</option>
            <option value="sedan">Sedan (4 seater)</option>
            <option value="suv">SUV / Ertiga (6 seater)</option>
            <option value="innova">Innova (6-7 seater)</option>
            <option value="crysta">Innova Crysta (7 seater)</option>
            <option value="tempo">Tempo Traveller (12 seater)</option>
          </select>
        </div>
        <div className="form-group-modern">
          <label>Pickup Location</label>
          <input
            type="text"
            placeholder={`e.g. Airport, or ${cityName || 'City'}`}
            value={from}
            onChange={e => setFrom(e.target.value)}
          />
        </div>
        <div className="form-group-modern">
          <label>Drop Location</label>
          <input
            type="text"
            placeholder="e.g. Hotel, or Destination"
            value={to}
            onChange={e => setTo(e.target.value)}
          />
        </div>
        <div className="form-group-modern">
          <label>Pickup Date</label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="form-group-modern">
          <label>Pickup Time</label>
          <input
            type="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </div>
        <div className="form-group-modern">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-group-modern">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            inputMode="numeric"
          />
        </div>
      </div>

      <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
        <button className="btn-modern-whatsapp pulse-animation" onClick={handleBookWhatsApp} style={{ justifyContent: 'center', width: '100%' }}>
          <span>💬 Book on WhatsApp</span>
        </button>
        <a href="tel:+919204714249" className="btn-modern-primary" style={{ justifyContent: 'center', width: '100%', textDecoration: 'none' }}>
          <span>📞 Call +91 92047 14249</span>
        </a>
      </div>
    </div>
  );
}
