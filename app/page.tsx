export default function Home() {
  const services = [
    "Emergency Plumbing",
    "Boiler Installation",
    "Boiler Servicing",
    "Boiler Repairs",
    "Gas Engineer",
    "Plumbing & Heating",
    "Radiator Installation",
    "Leak Detection",
    "Tap Installation",
    "Central Heating",
    "Drain & Blockage Clearing",
    "Landlord Certificates",
  ];

  const features = [
    {
      title: "24/7 Availability",
      desc: "Our AI receptionist never sleeps. Answer customer queries at 3am or during the busiest rush - always on.",
      icon: "CLOCK",
    },
    {
      title: "Instant Booking",
      desc: "Customers can book a job or request a call-back instantly via voice, without waiting on hold.",
      icon: "CALENDAR",
    },
    {
      title: "Never Miss a Call",
      desc: "Every missed call is a missed job. The AI catches every enquiry and routes it to your team.",
      icon: "PHONE",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-28"
        style={{ background: "linear-gradient(135deg, #32373c 0%, #0693e3 100%)" }}
      >
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
          East End Plumbers
        </h1>
        <p className="text-xl text-blue-100 max-w-xl mb-8">
          East London&apos;s trusted plumbing and heating experts &mdash; available 24/7 for emergencies.
        </p>
        <a
          href="#widget"
          className="inline-block bg-white text-[#32373c] font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Try AI Receptionist
        </a>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#32373c]">
            Talk to Our AI Receptionist
          </h2>
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#32373c]">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[#0693e3] mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">&#10003;</span>
                </div>
                <p className="font-semibold text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#32373c]">
            Why an AI Receptionist?
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Stop losing jobs to unanswered calls. Let AI handle enquiries 24/7.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#32373c] mx-auto mb-4 flex items-center justify-center">
                  <span className="text-[#0693e3] font-bold text-sm">{f.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#32373c]">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #0693e3 0%, #32373c 100%)" }}
      >
        <h2 className="text-3xl font-extrabold text-white mb-4">
          Ready to grow your plumbing business?
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Book a free demo call and see the AI receptionist in action.
        </p>
        <a
          href="#book"
          className="inline-block bg-white text-[#0693e3] font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
        >
          Book a Demo Call
        </a>
      </section>

      <footer className="py-6 text-center text-gray-400 text-sm">
        &copy; 2026 East End Plumbers &middot; +44 20 8611 2591 &middot; London (East London &mdash; Hackney, Bow, E14, E20)
      </footer>
    </main>
  );
}
