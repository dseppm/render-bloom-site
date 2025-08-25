import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';


export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 86886 62615', '+91 93477 41152'],
      note: '24/7 Emergency Line'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['exskonelevator@gmail.com'],
      note: 'Quick Response Guaranteed'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['D.No.1-1, Sowndarya Theatre Road', 'Parvathipuram Manyam District - 535501 (AP)'],
      note: 'Visit Our Showroom'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Emergency: 24/7'],
      note: 'Always Available'
    }
  ];


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };







  const handleSubmit = async () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.serviceType ||
      !formData.message
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Fields',
        text: 'Please fill in all required fields.',
        confirmButtonColor: '#d33',
      });
      return;
    }

    Swal.fire({
      title: 'Submitting...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType,
        message: formData.message,
      };

      await emailjs.send(
        'service_jcv6agd',     // e.g. 'service_gmail'
        'template_2x7lj8n',    // e.g. 'template_x7b9k2'
        templateParams,
        'eab1qSVwVFP1QyQBD'      // e.g. '9xKJH7sdfgH8sdfg'
      );

      await Swal.fire({
        icon: 'success',
        title: 'Submitted!',
        text: 'Your message has been sent successfully.',
        timer: 2000,
        showConfirmButton: false,
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      });

      // Optional redirect
      // window.location.href = '/thank-you';

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Something went wrong. Please try again later.',
        confirmButtonColor: '#d33',
      });
    }
  };


  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today for a free consultation. Our team is ready to discuss your
            elevator needs and provide customized solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-elegant">
        <CardHeader>
          <CardTitle className="text-2xl">Send Us a Message</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                First Name <span className="text-destructive">*</span>
              </label>
              <Input
                placeholder="John"
                value={formData.firstName}
                onChange={(e) => handleChange('firstName', e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Last Name <span className="text-destructive">*</span>
              </label>
              <Input
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => handleChange('lastName', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Email <span className="text-destructive">*</span>
            </label>
            <Input
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Phone <span className="text-destructive">*</span>
            </label>
            <Input
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Service Type <span className="text-destructive">*</span>
            </label>
            <select
              className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
              value={formData.serviceType}
              onChange={(e) => handleChange('serviceType', e.target.value)}
            >
              <option value="">Select a service</option>
              <option>New Installation</option>
              <option>Maintenance</option>
              <option>Modernization</option>
              <option>Emergency Repair</option>
              <option>Consultation</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Message <span className="text-destructive">*</span>
            </label>
            <Textarea
              placeholder="Tell us about your project or requirements..."
              rows={4}
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
            />
          </div>

          <Button size="lg" className="w-full" onClick={handleSubmit}>
            Send Message
          </Button>
        </CardContent>
      </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Our team is standing by to help with all your elevator needs.
                Reach out through any of the methods below.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                          <Badge variant="outline" className="mt-2">
                            {info.note}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Notice */}
            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-destructive mb-2">Emergency Service</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  If you're experiencing an elevator emergency, call our 24/7 hotline immediately.
                </p>
                <Button variant="destructive" size="sm">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};