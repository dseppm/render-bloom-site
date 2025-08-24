import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Settings, Hammer, RotateCcw, Headphones } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Hammer,
      title: 'Installation',
      description: 'Complete elevator installation services for new construction and existing buildings.',
      features: ['New construction', 'Retrofit installations', 'Code compliance', 'Professional planning']
    },
    {
      icon: Settings,
      title: 'Maintenance',
      description: 'Comprehensive maintenance programs to keep your elevators running smoothly.',
      features: ['Preventive maintenance', 'Regular inspections', 'Parts replacement', 'Performance optimization']
    },
    {
      icon: RotateCcw,
      title: 'Modernization',
      description: 'Upgrade your existing elevators with the latest technology and safety features.',
      features: ['Technology upgrades', 'Safety improvements', 'Energy efficiency', 'Aesthetic enhancements']
    },
    {
      icon: Headphones,
      title: 'Emergency Service',
      description: '24/7 emergency response to minimize downtime and ensure passenger safety.',
      features: ['24/7 availability', 'Rapid response', 'Emergency repairs', 'Temporary solutions']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From installation to maintenance, we provide comprehensive elevator solutions 
            that prioritize safety, efficiency, and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="default" className="group">
            View All Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};