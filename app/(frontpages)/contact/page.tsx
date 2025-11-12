"use client"
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import OtherHeader from '@/components/OtherHeader';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['YOUTHCCUL Building', 'Commercial Avenue, Bamenda', 'Northwest Region, Cameroon'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+237 683 165 717', '+90 533 881 64 44'],
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: ['+237 683 165 717', 'Available 24/7'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@youthccul.org'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 4:00 PM', 'Saturday: 8:00 AM - 2:00 PM', 'Sunday: Online'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <OtherHeader
        title="Let&apos;s Build Africa&apos;s Future Together"
        description=" Ready to start your entrepreneurial journey? Get in touch with our team and discover how YOUTHCCUL can help you achieve your business goals."
      />

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your business idea or how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-hero w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500/100 to-slate-700/100 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <div className="space-y-1">
                        {item.details.map((detail, idx) => (
                          <div key={idx} className="text-muted-foreground">{detail}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-foreground text-center mx-auto px-6 mb-6">Youthccul is committed to empowering African communities by providing accessible microfinance solutions<br/> that help individuals build sustainable businesses and achieve economic independence.
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground">
              Located in the heart of Bamenda, we&apos;re easily accessible to serve you better
            </p>
          </div>
          
          {/* Google Maps Placeholder */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=5.955632,10.147481&z=17&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="YOUTHCCUL Headquarters - Food Market, Bamenda"
            />

            {/* Floating info badge */}
            <div className="absolute top-4 left-4 bg-background/80 rounded-md p-3 backdrop-blur-sm flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <div className="text-sm font-semibold text-foreground">YOUTHCCUL Headquarters</div>
                <div className="text-xs text-muted-foreground">Food Market, Bamenda</div>
              </div>
            </div>

            {/* Open in Google Maps button */}
            <div className="absolute bottom-4 right-4">
              <a
                href="https://www.google.com/maps?q=5.955632,10.147481"
                target="_blank"
                rel="noreferrer"
                className="btn-accent"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/70 via-slate-600/100 to-green-800/100 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Don&apos;t wait for opportunities – create them. Join the YOUTHCCUL family and become part of Africa&apos;s entrepreneurial revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-all duration-300 hover:scale-105">
              Apply for Funding
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;