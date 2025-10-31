import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import OtherHeader from '@/components/OtherHeader';
import { PiggyBank, Users, BookOpen, TrendingUp, Shield, LucideBanknote } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: LucideBanknote,
      title: 'Loans',
      description: 'We provide Short and Long term loans from $50 upward, designed specifically for young entrepreneurs starting or scaling their businesses.',
      features: ['loan interest rate are minimal from 1% to 1.4%','interest on overdraft minimal  2.5% to 3.5%','Competitive interest rates', 'Flexible repayment terms', 'Online Loan Application', 'Quick approval process'],
      color: 'from-slate-500/100 to-slate-800/100',
    },
    {
      icon: PiggyBank,
      title: 'Savings & Deposite Accounts',
      description: 'Build your financial future with our high-yield savings accounts and join cooperative groups for collective economic empowerment.',
      features: ['Interest on savings 6.6%','High interest rates on savings', 'Mobile banking access','Low deposite charge','Group savings programs', 'Financial planning tools','Daily Savings'],
      color: 'from-green-500/100 to-green-800/100',
    },
    {
      icon: Users,
      title: 'Youth Empowerment Funds',
      description: 'Special funding programs designed to support innovative youth-led initiatives across agriculture, technology, and social impact sectors.',
      features: ['Free training programs','Loans with low interest rates', 'Mentorship included', 'Network access', 'Technical support'],
      color: 'from-yellow-500/100 to-yellow-700/100',
    },
    {
      icon: TrendingUp,
      title: 'Community Development Support',
      description: 'Large-scale funding for community projects that create jobs and drive economic development in rural and urban communities.',
      features: ['Project-loans', 'Impact measurement', 'Community partnerships', 'Sustainable development focus'],
      color: 'from-blue-500/100 to-blue-800/100',
    },
    {
      icon: BookOpen,
      title: 'Term and Time Deposite',
      description: 'Save guarding members deposite with the objective of receiving 7.5% to 10% interest rate anually',
      features: [ 'Online and offline Banking', 'High Interest Rate', 'Flexible Deposite and Withdrawer Terms'],
      color: 'from-orange-500/100 to-orange-800/100',
    },
    {
      icon: Shield,
      title: 'Microinsurance Services',
      description: 'Protect your deposite and loans with affordable charges alocated to it.',
      features: ['Loan coverage', 'Saving Coverage', 'Cash coverage'],
      color: 'from-red-500/100 to-red-800/100',
    },
  ];

  // const loanProducts = [
  //   {
  //     name: 'Starter Loan',
  //     amount: '$500 - $2,000',
  //     term: '6-12 months',
  //     rate: '8-12% annually',
  //     target: 'New entrepreneurs',
  //   },
  //   {
  //     name: 'Growth Loan',
  //     amount: '$2,000 - $10,000',
  //     term: '12-24 months',
  //     rate: '10-15% annually',
  //     target: 'Existing businesses',
  //   },
  //   {
  //     name: 'Scale Loan',
  //     amount: '$10,000 - $50,000',
  //     term: '24-48 months',
  //     rate: '12-18% annually',
  //     target: 'Established businesses',
  //   },
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
        <OtherHeader
          title="Financial Solutions for Youths"
          description="Comprehensive financial services designed to empower young entrepreneurs at every stage of their business journey."
        />

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup capital to business expansion, we provide the financial tools and support you need to succeed
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-warm card-hover border border-border group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Products */}
      {/* <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Loan Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the loan product that best fits your business needs and growth stage
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {loanProducts.map((product, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-warm card-hover text-center">
                <h3 className="text-2xl font-bold text-primary mb-4">{product.name}</h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Amount</div>
                    <div className="text-lg font-bold text-foreground">{product.amount}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Term</div>
                    <div className="text-lg font-bold text-foreground">{product.term}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Interest Rate</div>
                    <div className="text-lg font-bold text-foreground">{product.rate}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">Target</div>
                    <div className="text-lg font-bold text-foreground">{product.target}</div>
                  </div>
                </div>
                <button className="btn-accent w-full">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Simple Application Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get funded in 4 easy steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply Online', description: 'Fill out our simple online application form' },
              { step: '02', title: 'Documentation', description: 'Submit required business documents' },
              { step: '03', title: 'Review & Approval', description: 'Our team reviews your application within 48 hours' },
              { step: '04', title: 'Get Funded', description: 'Receive funds directly to your account' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/100 to-yellow-500/100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500/70 via-slate-600/100 to-green-800/100 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            {/* Join thousands of successful African entrepreneurs who have grown their businesses with YOUTHCCUL. */}
            Join our awaiting list to get notified on the lunch of YOUTHCCUL and start applying for loans,Savings and Investment opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-all duration-300 hover:scale-105">
              Apply for a Loan
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;