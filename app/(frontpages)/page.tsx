import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import { ArrowRight, Users, TrendingUp, Globe, Heart, Phone, SaveAllIcon } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const Home= () => {
  const projects = [
    {
      title: 'Agribusiness Initiative',
      location: 'Funding',
      impact: '500 farmers supported',
      amount: '$200k to fund',
      description: 'To Empower young farmers with modern techniques and equipment',
      // color: 'from-primary to-primary-glow',
      color:'bg-gradient-to-r from-green-500/100 via-green-600/100 to-green-900/100'
    },
    {
      title: 'Youth Entrepreneurs Network',
      location: 'Funding',
      impact: '300 youths to empower',
      amount: '$150k to fund',
      description: 'Supporting youth-led businesses across communities',
      color:'bg-gradient-to-r from-yellow-300/100 via-yellow-500/100 to-yellow-600/100'
    },
    {
      title: 'Small And Medium Enterprise',
      location: 'Funding',
      impact: '50 startups to fund',
      amount: '$125k to fund',
      description: 'Building the next generation of community tech companies',
      color: 'bg-gradient-to-r from-orange-300/100 via-orange-500/100 to-orange-600/100'
    },
    {
      title: 'Education Support Program',
      location: 'Funding',
      impact: '300 students to empower',
      amount: '$25k to fund',
      description: 'Providing scholarships and educational loans',
      color: 'bg-gradient-to-r from-slate-500/100 via-slate-600/100 to-green-900/100',
    },
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Youths To Empower' },
    { icon: TrendingUp, value: '500K+', label: 'Loans To Disburse' },
    { icon: Globe, value: '15', label: 'Communities' },
    { icon: Heart, value: '100,000+', label: 'Lives To Impact' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src='/img/picture01.jpg'
                alt="Happy Community customers celebrating success"
                className="rou, empowering thousands nded-2xl shadow-deep w-full h-[500px] object-cover"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full animate-float" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-800 to-slate-800 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            </div>
            <div className="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Empowering Community Youths Through
                <span className="bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent"> Microfinance</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                YOUTHCCUL is more than a financial institution – we&apos;re a movement dedicated to unlocking the entrepreneurial potential of community youth. Starting 2025, we are providing accessible microfinance solutions that transform dreams into thriving businesses across the globe.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-hero inline-flex items-center gap-2">
                Learn Our Story
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Transforming Communities
              <span className="bg-gradient-to-r from-yellow-300/100 via-yellow-500/100 to-yellow-600/100 bg-clip-text text-transparent"> Across The Globe</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how our strategic investments are creating lasting impact in communities and empowering thousands of young entrepreneurs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-background rounded-2xl p-6 shadow-warm card-hover group">
                <div className={`w-full h-32 bg-gradient-to-br ${project.color} rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <div className="text-center text-background">
                    <div className="text-2xl font-bold">{project.amount}</div>
                    <div className="text-sm opacity-90">{project.impact}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <div className="text-sm font-medium text-primary mb-3">{project.location}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="bg-gradient-to-r from-yellow-500/100 via-yellow-600/100 to-yellow-700/100 inline-flex items-center gap-2 px-8 py-3 rounded-md text-white">
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Financial Solutions for
              <span className="bg-gradient-to-r from-yellow-300/100 via-yellow-500/100 to-yellow-600/100 bg-clip-text text-transparent"> Every Dream</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From startup capital to business expansion, we provide comprehensive financial services tailored to the unique needs of entrepreneurs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/100 via-green-600/100 to-green-700/100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Small and Long Term Loans</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Flexible microloans from $50 upward with competitive interest rates and flexible payment schedules.
              </p>
              {/* <div className="text-sm text-primary font-medium">Interest rates from 8%</div> */}
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-yellow-100/20 to-yellow-200/30 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/100 via-orange-600/100 to-orange-700/100 rounded-full flex items-center justify-center mx-auto mb-6">
                <SaveAllIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Save-gaurding of Funds</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Savings, deposite,term deposite, time deposite, daily saving and international transfer of funds for the community
              </p>
              <div className="text-sm text-accent font-medium">Grant funding available</div>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-100/20 to-green-200/30 rounded-2xl card-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-500/100 via-slate-600/100 to-slate-700/100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mobile Banking</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Create and save money to your account through your mobile devices.
              </p>
              {/* <div className="text-sm text-sunset font-medium">Up to $500K funding</div> */}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-hero inline-flex items-center gap-2">
              Explore All Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-800/100 via-slate-700/100 to-yellow-500/100 text-primary-foreground community-pattern">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join YOUTHCCUL and Build Your Future Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Don&apos;t let limited access to capital hold back your entrepreneurial dreams. Join thousands of successful community entrepreneurs who have transformed their communities through our loans, savings and training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
              Get Started Today
              <ArrowRight size={20} />
            </Link>
            <Link href="/about" className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;