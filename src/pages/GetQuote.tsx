import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Footer } from '@/components/ui/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Calculator, Clock, Shield, CheckCircle } from 'lucide-react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    buildingType: '',
    floors: '',
    capacity: '',
    services: [],
    timeline: '',
    budget: ''
  });

  const projectTypes = [
    'New Installation',
    'Modernization',
    'Maintenance Contract',
    'Emergency Repair',
    'Consultation'
  ];

  const buildingTypes = [
    'Residential Building',
    'Commercial Office',
    'Shopping Mall',
    'Hospital',
    'Hotel',
    'Industrial',
    'Educational Institution',
    'Government Building'
  ];

  const services = [
    { id: 'installation', label: 'Complete Installation' },
    { id: 'maintenance', label: 'Annual Maintenance Contract' },
    { id: 'modernization', label: 'Elevator Modernization' },
    { id: 'safety', label: 'Safety Inspection' },
    { id: 'emergency', label: '24/7 Emergency Support' },
    { id: 'consultation', label: 'Technical Consultation' }
  ];

  const features = [
    {
      icon: Calculator,
      title: 'Free Estimate',
      description: 'Get detailed pricing within 24 hours'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: 'Our team responds within 2 hours'
    },
    {
      icon: Shield,
      title: 'No Obligation',
      description: 'Free consultation with no commitment'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6">
              Get Your Quote
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Request a Free Quote
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a detailed estimate for your elevator project. Our experts will provide 
              customized solutions based on your specific requirements.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Project Details</CardTitle>
              <p className="text-muted-foreground text-center">
                Fill out the form below and we'll get back to you with a detailed quote
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input id="company" placeholder="ABC Corporation" />
                  </div>
                </div>
              </div>

              {/* Project Type */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Project Type *</h3>
                <RadioGroup value={formData.projectType} onValueChange={(value) => setFormData({...formData, projectType: value})}>
                  <div className="grid md:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <div key={type} className="flex items-center space-x-2 p-3 border border-border rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value={type} id={type} />
                        <Label htmlFor={type} className="cursor-pointer flex-1">{type}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Building Details */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Building Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="buildingType">Building Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select building type" />
                      </SelectTrigger>
                      <SelectContent>
                        {buildingTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="floors">Number of Floors *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select floors" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2-3">2-3 Floors</SelectItem>
                        <SelectItem value="4-6">4-6 Floors</SelectItem>
                        <SelectItem value="7-10">7-10 Floors</SelectItem>
                        <SelectItem value="11-20">11-20 Floors</SelectItem>
                        <SelectItem value="20+">20+ Floors</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="capacity">Elevator Capacity *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select capacity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6-8">6-8 Persons</SelectItem>
                        <SelectItem value="10-12">10-12 Persons</SelectItem>
                        <SelectItem value="13-16">13-16 Persons</SelectItem>
                        <SelectItem value="17-20">17-20 Persons</SelectItem>
                        <SelectItem value="20+">20+ Persons</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="elevators">Number of Elevators</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Elevator</SelectItem>
                        <SelectItem value="2">2 Elevators</SelectItem>
                        <SelectItem value="3">3 Elevators</SelectItem>
                        <SelectItem value="4+">4+ Elevators</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Services Required */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Services Required</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service.id} className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                      <Checkbox id={service.id} />
                      <Label htmlFor={service.id} className="cursor-pointer flex-1">
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline & Budget */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Project Timeline & Budget</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="timeline">Expected Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (Within 1 month)</SelectItem>
                        <SelectItem value="3months">Within 3 months</SelectItem>
                        <SelectItem value="6months">Within 6 months</SelectItem>
                        <SelectItem value="12months">Within 12 months</SelectItem>
                        <SelectItem value="planning">Still planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5-10">₹5-10 Lakhs</SelectItem>
                        <SelectItem value="10-25">₹10-25 Lakhs</SelectItem>
                        <SelectItem value="25-50">₹25-50 Lakhs</SelectItem>
                        <SelectItem value="50+">₹50+ Lakhs</SelectItem>
                        <SelectItem value="flexible">Budget Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional Requirements */}
              <div>
                <Label htmlFor="requirements">Additional Requirements/Comments</Label>
                <Textarea 
                  id="requirements"
                  placeholder="Please describe any specific requirements, accessibility needs, or additional details about your project..."
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button size="lg" className="px-12">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Submit Quote Request
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  We'll review your request and get back to you within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;