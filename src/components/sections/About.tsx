import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Award, Clock, Users } from 'lucide-react';

export const About = () => {
  const achievements = [
    {
      icon: Building,
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered elevator solutions across various sectors'
    },
    {
      icon: Users,
      number: '50+',
      label: 'Expert Team',
      description: 'Certified professionals with extensive industry experience'
    },
    {
      icon: Clock,
      number: '15+',
      label: 'Years Experience',
      description: 'Decades of expertise in elevator technology and safety'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Safety Record',
      description: 'Impeccable safety record with zero major incidents'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            About Exskon Elevator
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Trusted Elevator Partner
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            For over 15 years, Exskon Elevator has been at the forefront of vertical transportation 
            solutions, combining cutting-edge technology with unwavering commitment to safety.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a mission to revolutionize vertical transportation, Exskon Elevator 
                has grown from a small local company to a leading provider of elevator solutions. 
                Our journey began with a simple belief: safety should never be compromised.
              </p>
              <p>
                Today, we serve commercial, residential, and industrial clients with comprehensive 
                elevator services. Our team of certified professionals brings together decades of 
                experience, innovative technology, and an unwavering commitment to excellence.
              </p>
              <p>
                Every project we undertake is guided by our core principle: "Safety Our Priority." 
                This isn't just our tagline—it's the foundation of every decision we make, every 
                service we provide, and every relationship we build.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg">Learn More About Us</Button>
            </div>
          </div>

          <div className="bg-hero-gradient rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Why Choose Exskon?</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <span>Comprehensive safety-first approach to all projects</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <span>Latest technology and industry-leading equipment</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <span>24/7 emergency support and maintenance services</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <span>Certified technicians and rigorous quality standards</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
                <span>Competitive pricing with transparent cost structure</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{achievement.number}</div>
                  <div className="font-semibold text-foreground mb-2">{achievement.label}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};