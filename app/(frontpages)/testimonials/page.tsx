import Footer from '@/components/Footer';
import GalleryTwo from '@/components/GalleryTwo';
import Navigation from '@/components/Navigation';
import OtherHeader from '@/components/OtherHeader';
import VideoSection from '@/components/videos';
import { Sprout, GraduationCap, ShoppingCart, Users, TrendingUp } from 'lucide-react';

const TestimonialsPage = () => {
    const testimonialVideos = [
    { id: 1, src: '/videos/testimonial01.mp4', title: 'Customer Testimonial 1' },
    { id: 2, src: '/videos/tailor.mp4', title: 'Customer Testimonial 2' },
    { id: 3, src: '/videos/testimonial02.mp4', title: 'Customer Testimonial 3' },
    { id: 4, src: '/videos/tes03.mp4', title: 'Customer Testimonial 4' },
    { id: 5, src: '/videos/tes04.mp4', title: 'Customer Testimonial 5' },
    { id: 6, src: '/videos/diaspora.mp4', title: 'Customer Testimonial 6' },
    { id: 7, src: '/videos/us.mp4', title: 'Customer Testimonial 7' },
    { id: 8, src: '/videos/financial.mp4', title: 'How Diaspora Can Benefit 8' },
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

      <section className="bg-slate-950">
        <div className="container mx-auto">
          {/* <VideoSection /> */}
           <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
        Customer Testimonials
      </h2>
      
      {/* 5-column grid layout on desktop, scales down seamlessly for smaller screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {testimonialVideos.map((video) => (
              <div 
                key={video.id} 
                className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Aspect Ratio Wrapper forcing exact 9:16 dimension */}
                <div className="aspect-[9/16] w-full bg-black">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover"
                    aria-label={video.title}
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="container mx-auto">
          <GalleryTwo />
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

export default TestimonialsPage;