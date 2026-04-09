interface SchemaMarkupProps {
  type: 'city' | 'service' | 'fleet' | 'route' | 'local-route';
  data: Record<string, unknown>;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    const schemas: Record<string, unknown>[] = [];

    // TaxiService schema (always present)
    schemas.push({
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "Sree Travels",
      "telephone": "+919204714249",
      "email": "info@sreetravel.com",
      "url": "https://sreetravel.com",
      "logo": "https://sreetravel.com/logo.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dimna Road, Mango",
        "addressLocality": "Jamshedpur",
        "addressRegion": "Jharkhand",
        "postalCode": "831018",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 22.8046,
        "longitude": 86.2029,
      },
      "areaServed": data.areaServed || "Jharkhand",
      "priceRange": data.priceRange || "₹999 - ₹25,000",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
    });

    // AggregateRating
    schemas.push({
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "itemReviewed": {
        "@type": "TaxiService",
        "name": "Sree Travels",
        "url": "https://sreetravel.com",
      },
      "ratingValue": "4.8",
      "reviewCount": data.reviewCount || "2847",
      "bestRating": "5",
      "worstRating": "1",
    });

    // BreadcrumbList schema
    if (data.breadcrumbs && Array.isArray(data.breadcrumbs)) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": (data.breadcrumbs as { name: string; url: string }[]).map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url ? `https://sreetravel.com${item.url}` : undefined,
        })),
      });
    }

    // FAQ Schema if FAQs provided
    if (data.faqs && Array.isArray(data.faqs)) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": (data.faqs as { question: string; answer: string }[]).map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      });
    }

    // Route-specific schema
    if (type === 'route' && data.from && data.to) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Trip",
        "name": `${data.from} to ${data.to} Cab Service`,
        "description": `Book cab from ${data.from} to ${data.to}. Distance: ${data.distance}km. Starting fare: ₹${data.fare}`,
        "provider": {
          "@type": "TaxiService",
          "name": "Sree Travels",
          "telephone": "+919204714249",
          "url": "https://sreetravel.com",
        },
      });
    }

    // Service-specific schema
    if (type === 'service' && data.serviceName) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${data.serviceName} - Sree Travels`,
        "description": data.serviceDescription || `${data.serviceName} service in ${data.areaServed}`,
        "provider": {
          "@type": "TaxiService",
          "name": "Sree Travels",
          "telephone": "+919204714249",
        },
        "areaServed": data.areaServed,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": data.price || "999",
        },
      });
    }

    // Fleet/Product schema
    if (type === 'fleet' && data.vehicleName) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${data.vehicleName} Cab Rental - Sree Travels`,
        "description": data.vehicleDescription || `Hire ${data.vehicleName} in ${data.areaServed}`,
        "brand": { "@type": "Brand", "name": "Sree Travels" },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": data.price || "12",
          "unitText": "per km",
          "availability": "https://schema.org/InStock",
        },
      });
    }

    return schemas;
  };

  return (
    <>
      {generateSchema().map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
