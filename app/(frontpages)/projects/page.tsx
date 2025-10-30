import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import OtherHeader from '@/components/OtherHeader';
import { Sprout, GraduationCap, ShoppingCart, Users, TrendingUp } from 'lucide-react';

const ProjectPage = () => {
  const projects = [
    {
      icon: Sprout,
      title: 'Youth Agribusiness Initiative ',
      description: 'Supporting 500 young farmers with modern equipment and sustainable farming techniques, increasing crop yields by 150%.',
      impact: '500 farmers, 600 jobs created',
      amount: '$200k to be funded',
      status: 'in process',
      category: 'Agriculture',
    },
    {
      icon: Users,
      title: 'Youth Entrepreneurs Network ',
      description: 'Empowering 300 youths to start and scale their businesses with microloans and business training programs.',
      impact: '300 youths, 1,500 indirect beneficiaries',
      amount: '$150k to be funded',
      status: 'in process',
      category: 'Business',
    },
    // {
    //   icon: Smartphone,
    //   title: 'Tech Innovation Hub',
    //   description: 'Funding early-stage tech startups and providing mentorship to build the next generation of African tech companies.',
    //   impact: '50 startups, 800 tech jobs',
    //   amount: '$5M funded',
    //   status: 'Active',
    //   category: 'Technology',
    // },
    {
      icon: GraduationCap,
      title: 'Education Support Program ',
      description: 'Providing student loans and scholarships to youth pursuing technical and entrepreneurial education.',
      impact: '300 students supported',
      amount: '$25k to be funded',
      status: 'in process',
      category: 'Education',
    },
    {
      icon: ShoppingCart,
      title: 'Market Vendor Empowerment',
      description: 'Supporting traditional market vendors with capital to expand their businesses and adopt digital payment systems.',
      impact: '50 vendors, 50 markets',
      amount: '$125k to be funded',
      status: 'in process',
      category: 'Commerce',
    },
    {
      icon: TrendingUp,
      title: 'Youth Cooperative Network ',
      description: 'Building financial cooperatives that provide savings and loan services to rural youth entrepreneurs.',
      impact: '10 cooperatives, 500 members',
      // amount: '$  funded',
      status: 'in process',
      category: 'Finance',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-primary text-primary-foreground';
      case 'Completed':
        return 'bg-accent text-accent-foreground';
      case 'Expanding':
        return 'bg-sunset text-sunset-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <OtherHeader
        title="Transforming Communities"
        description="Discover the impact we are going to make across communities through strategic investments in youth-led initiatives that drive economic growth and social transformation."
      />

      {/* Stats Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Projected Projects</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-muted-foreground">Communities</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-sunset mb-2">$500k</div>
              <div className="text-muted-foreground">Total Investment</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-ocean mb-2">100,000+</div>
              <div className="text-muted-foreground">Lives To Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Future Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each project represents our commitment to sustainable development and youth empowerment across the Globe.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-warm card-hover border border-border">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-500/100 to-orange-500/100 rounded-full flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-primary mb-1">Impact</div>
                        <div className="text-sm text-muted-foreground">{project.impact}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-accent mb-1">Investment</div>
                        <div className="text-sm text-muted-foreground">{project.amount}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500/70 via-slate-600/100 to-green-800/100 text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join thousands of young entrepreneurs who have transformed their communities through our funding and support programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-background text-primary px-8 py-4 rounded-lg font-semibold hover:bg-background/90 transition-all duration-300 hover:scale-105">
              Apply for Funding
            </button>
            <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectPage;