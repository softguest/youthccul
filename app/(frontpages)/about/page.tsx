"use client"
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { Users, Target, Heart, Globe, HandGrab, Handshake } from 'lucide-react';
import { Span } from 'next/dist/trace';

import { motion } from "framer-motion";
import OtherHeader from '@/components/OtherHeader';

const valuesSet = [
  {
    title: "Safety",
    description:
      "We ensure your money with us is safe by insuring members’ savings and all our loans.",
    icon: () => <span>🛡️</span>,
  },
  {
    title: "Customer Services",
    description:
      "We are committed to providing exceptional care to all our members and future members.",
    icon: () => <span>🤝</span>,
  },
  {
    title: "Reliability",
    description:
      "We strive to provide reliable financial services to our members at all times.",
    icon: () => <span>⚡</span>,
  },
  {
    title: "Innovation",
    description:
      "We embrace innovation and technology to continuously enhance our services.",
    icon: () => <span>💡</span>,
  },
  {
    title: "Integrity",
    description:
      "We operate with integrity and transparency in all our dealings.",
    icon: () => <span>✨</span>,
  },
  {
    title: "Professionalism",
    description:
      "Our competent staff are here to provide professional and sound financial services.",
    icon: () => <span>📊</span>,
  },
];


const AboutPage = () => {
  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in the power of community and collective growth. Every loan we provide strengthens the entire community ecosystem.',
    },
    {
      icon: Target,
      title: 'Youth Empowerment',
      description: 'Our focus is on empowering youths with the tools and capital they need to build sustainable businesses.',
    },
    {
      icon: Heart,
      title: 'Social Impact',
      description: 'Beyond profit, we measure success by the positive impact we create in communities across the Globe.',
    },
    {
      icon: Handshake,
      title: 'Partnership',
      description: 'We work towards uniting communities where economic opportunities are accessible to all young entrepreneurs.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <OtherHeader
        title="Empowering The Future"
        description="YOUTHCCUL was born from a vision to transform the economy landscape by empowering young entrepreneurs with accessible microfinance solutions."
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-800 to-slate-800 drop-shadow-lg mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2025 in Bamenda, Cameroon, YOUTHCCUL emerged from a simple yet powerful idea: youths shouldn&apos;t be limited by lack of access to capital. Our founders, themselves young entrepreneurs, experienced firsthand the challenges of securing funding for innovative business ideas.
                </p>
                <p>
                  we are starting in 2025 as a  cooperative credit union and will grow into a continent-wide movement, supporting over 10,000 young entrepreneurs across 15 communities. We are disbursing over $500k  in microloans, creating jobs for more than 100 people.
                </p>
                <p>
                   YOUTHCCUL will stands as a beacon of hope for youths, proving that with the right support, young minds can drive unprecedented economic growth and social transformation across the continent.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src='/img/team01.jpg'
                alt="communities celebrating success"
                className="rounded-2xl shadow-deep w-full h-[400px] object-cover"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-500/100 to-orange-500/100 rounded-full animate-float" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-700/100 to-slate-600/100 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-700/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center p-8 bg-gradient-to-br from-yellow-300/50 via-yellow-500 to-yellow-700 rounded-2xl shadow-warm card-hover">
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-white leading-relaxed">
                Our mission is to become the preferred and reliable credit union in Cameroon, by providing standard of excellent in membership care, employee engagement, social responsibility and building successful individuals, entities and society. 
              </p>
            </div>
            <div className="text-center p-8 bg-background rounded-2xl shadow-warm card-hover">
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our vision is to be the leading Credit union in Cameroon by providing rapid and accessible financial services to Communities, while leading as a morally conscious Financial Institution. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do and ensure we serve you with
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {valuesSet.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg 
                          hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center 
                                bg-gradient-to-br from-yellow-500 to-green-600 
                                rounded-full shadow-md">
                  <value.icon />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent blur-3xl opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl"
          >
            {[
              { value: "10,000+", label: "Young Entrepreneurs Funded" },
              { value: "$500K+", label: "Total Loans Disbursed" },
              { value: "15", label: "Communities" },
              { value: "100+", label: "Jobs Created" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;