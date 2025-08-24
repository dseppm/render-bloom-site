import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, CheckCircle, AlertTriangle, Users } from 'lucide-react';
import safetyImage from '@/assets/safety-maintenance.jpg';

export const Safety = () => {
  const safetyFeatures = [
    {
      icon: Shield,
      title: 'Advanced Safety Systems',
      description: 'State-of-the-art safety mechanisms and emergency protocols.'
    },
    {
      icon: CheckCircle,
      title: 'Code Compliance',
      description: 'Full compliance with local and international safety standards.'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Assessment',
      description: 'Comprehensive risk evaluation and mitigation strategies.'
    },
    {
      icon: Users,
      title: 'Certified Technicians',
      description: 'Highly trained and certified safety professionals.'
    }
  ];

  const certifications = [
    'ASME A17.1',
    'EN 81',
    'ISO 25745',
    'OSHA Compliant'
  ];

  return (
    <section id="safety" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <Badge variant="secondary" className="mb-6">
              Safety First Approach
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Safety Our Priority, <span className="text-primary">Always</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              At Exskon Elevator, safety isn't just a slogan—it's the foundation of everything we do. 
              Our commitment to safety drives our innovative solutions, rigorous testing, and 
              comprehensive maintenance programs.
            </p>

            {/* Safety Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {safetyFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Certifications & Standards</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="outline">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden border-0 shadow-elegant">
              <img
                src={safetyImage}
                alt="Safety maintenance professional working on elevator"
                className="w-full h-96 object-cover"
              />
              <CardContent className="p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-lg">Professional Safety Standards</CardTitle>
                  <CardDescription>
                    Our certified technicians follow strict safety protocols and use 
                    industry-leading equipment for all installations and maintenance.
                  </CardDescription>
                </CardHeader>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};