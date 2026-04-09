import React from 'react';
import Link from 'next/link';

interface BlogSectionProps {
  pageName: string;
  type: 'city' | 'route' | 'home';
}

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export default function BlogSection({ pageName, type }: BlogSectionProps) {
  // Pure functional generator to create deterministic blogs based on context
  const generateBlogs = (): BlogPost[] => {
    const today = new Date();
    
    // Helper to generate a date offset string
    const getDateStr = (offsetDays: number) => {
      const d = new Date(today);
      d.setDate(d.getDate() - offsetDays);
      return d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    if (type === 'city') {
      return [
        {
          title: `Top 5 Places to Visit in ${pageName} by Cab`,
          excerpt: `Discover the most beautiful and culturally rich spots in ${pageName}. Local drivers know the best times to avoid traffic...`,
          date: getDateStr(3),
          readTime: '4 min read',
          slug: `/blog/places-to-visit-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          title: `Why Sree Travels is the Best Cab Service in ${pageName}`,
          excerpt: `Looking for reliable travel? Read why locals and tourists consistently rate our verified cabs as the top choice in ${pageName}...`,
          date: getDateStr(8),
          readTime: '3 min read',
          slug: `/blog/best-cab-service-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          title: `Complete Guide to Booking Outstation Cabs from ${pageName}`,
          excerpt: `Everything you need to know about pricing, vehicle types, and safety when booking an outstation taxi starting from ${pageName}...`,
          date: getDateStr(15),
          readTime: '6 min read',
          slug: `/blog/outstation-guide-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          title: `Exploring ${pageName}: A Tourist's Perspective`,
          excerpt: `See ${pageName} through the eyes of a traveler. From local street food to hidden gems, our drivers take you there...`,
          date: getDateStr(22),
          readTime: '5 min read',
          slug: `/blog/exploring-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          title: `Corporate Travel in ${pageName}: Professional Car Rentals`,
          excerpt: `Ensuring punctuality and comfort for business executives. Why corporate clients trust our premium sedans for daily commutes...`,
          date: getDateStr(31),
          readTime: '4 min read',
          slug: `/blog/corporate-travel-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          title: `Navigating ${pageName} Airport Transfers Seamlessly`,
          excerpt: `Avoid the rush and hassle of airport lines. Learn how pre-booking your airport drop ensures peace of mind...`,
          date: getDateStr(45),
          readTime: '3 min read',
          slug: `/blog/airport-transfers-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        }
      ];
    } else if (type === 'route') {
      return [
        {
          title: `Best Restaurants on the ${pageName} Highway`,
          excerpt: `Make your road trip delicious. Our drivers highlight the cleanest, tastiest dhabas and restaurants along this route...`,
          date: getDateStr(5),
          readTime: '5 min read',
          slug: `/blog/restaurants-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          title: `How to Plan a Perfect Road Trip: ${pageName}`,
          excerpt: `Packing tips, departure times, and rest stops perfectly planned out for an unforgettable journey down this highway...`,
          date: getDateStr(11),
          readTime: '6 min read',
          slug: `/blog/road-trip-guide-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          title: `Why Hiring an SUV for ${pageName} is the Best Choice`,
          excerpt: `For long distances, comfort is key. See why the Innova or Ertiga makes the ${pageName} drive butter-smooth for families...`,
          date: getDateStr(18),
          readTime: '4 min read',
          slug: `/blog/suv-choice-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          title: `Weather and Best Time to Travel: ${pageName}`,
          excerpt: `Seasonal conditions drastically impact travel times. Know what to expect before you book your outstation cab...`,
          date: getDateStr(25),
          readTime: '4 min read',
          slug: `/blog/weather-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          title: `Comparing Train vs. Cab for ${pageName}`,
          excerpt: `Door-to-door convenience vs. train stations. A cost and time breakdown revealing why a private cab often wins...`,
          date: getDateStr(34),
          readTime: '7 min read',
          slug: `/blog/train-vs-cab-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        },
        {
          title: `Top Sightseeing Spots Between ${pageName}`,
          excerpt: `It's about the journey, not just the destination. Stunning viewpoints and historical markers you cannot miss on the drive...`,
          date: getDateStr(42),
          readTime: '5 min read',
          slug: `/blog/sightseeing-${pageName.toLowerCase().replace(/\s+/g, '-')}`,
        }
      ];
    } else {
      // Home
      return [
        {
          title: `The Ultimate Guide to Exploring Jharkhand by Cab`,
          excerpt: `From the serene waterfalls of Ranchi to the steel city of Jamshedpur, discover why a private cab is the ultimate travel hack...`,
          date: getDateStr(2),
          readTime: '8 min read',
          slug: `/blog/exploring-jharkhand`,
        },
        {
          title: `How to Choose the Right Cab for Your Family Trip`,
          excerpt: `Sedan vs Hatchback vs SUV? We break down exact luggage capacities and legroom constraints to help you decide...`,
          date: getDateStr(7),
          readTime: '4 min read',
          slug: `/blog/choose-right-cab`,
        },
        {
          title: `Top 10 Travel Destinations in Eastern India`,
          excerpt: `Our outstation cabs travel far. Explore Puri, Kolkata, and beyond with Sree Travels' interstate permits...`,
          date: getDateStr(14),
          readTime: '6 min read',
          slug: `/blog/top-10-destinations`,
        },
        {
          title: `Safety First: Sree Travels' Premium Standards`,
          excerpt: `Background-verified drivers, modernized fleet maintenance, and GPS tracking. How we keep you strictly safe...`,
          date: getDateStr(19),
          readTime: '3 min read',
          slug: `/blog/safety-standards`,
        },
        {
          title: `A Guide to our Fleet: Hatchback, Sedan, or SUV?`,
          excerpt: `Need budget travel or luxury comfort? A deep dive into the vehicles we operate and how they perform on highways...`,
          date: getDateStr(28),
          readTime: '5 min read',
          slug: `/blog/fleet-guide`,
        },
        {
          title: `Why We Are Rated Jharkhand's #1 Cab Service`,
          excerpt: `A look back at our journey since 2015. Customer testimonials, transparent pricing, and why we guarantee zero hidden fees...`,
          date: getDateStr(36),
          readTime: '4 min read',
          slug: `/blog/number-one-rated`,
        }
      ];
    }
  };

  const blogs = generateBlogs();

  return (
    <div className="content-block" style={{ marginTop: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Related <span className="gold-text">Articles</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>Read the latest travel guides and updates about {pageName}.</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, idx) => (
          <Link href={blog.slug} key={idx} className="blog-card glass-card">
            <div className="blog-meta">
              <span>{blog.date}</span>
              <span className="dot">•</span>
              <span>{blog.readTime}</span>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.excerpt}</p>
            <span className="read-more">Read Article <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
