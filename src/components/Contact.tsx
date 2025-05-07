
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({ name: '', email: '', subject: '', message: '' });
    // We could add a toast notification here
  };

  return (
    <section id="contact" className="section-container relative overflow-hidden bg-muted/30 dark:bg-muted/10">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_20%_80%,rgba(var(--primary-rgb),0.06),transparent_40%)]"></div>
      </div>

      <div className="mb-12 text-center">
        <span className="inline-block px-3 py-1 text-sm font-medium bg-background rounded-full mb-4">Contact</span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Have a project in mind or just want to chat? Feel free to reach out.
          I'm currently looking for new opportunities and my inbox is always open.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden border-primary/10 dark:border-primary/20">
          <div className="bg-gradient-to-br from-primary/10 to-transparent p-6">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p className="text-muted-foreground text-sm">
              Let's connect! Here's how you can reach me directly.
            </p>
          </div>
          
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:sahanchamara456@gmail.com" className="font-medium hover:text-primary transition-colors">
                    sahanchamara456@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/10 dark:bg-accent/20">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+1234567890" className="font-medium hover:text-accent transition-colors">
                    (94) 778 557 750
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a href="https://github.com/SahanChamara" className="font-medium hover:text-primary transition-colors">
                    github.com/SahanChamaea
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-accent/10 dark:bg-accent/20">
                  <Linkedin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sahan-chamara/" className="font-medium hover:text-accent transition-colors">
                    linkedin.com/in/sahan-chamara
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map or location */}
            <div className="mt-8 bg-muted/50 dark:bg-muted/30 aspect-[4/3] rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <p className="font-medium mb-1">Based in</p>
                <p className="text-lg font-semibold">Galle, LK</p>
                <p className="text-sm text-muted-foreground mt-1">Available for remote work worldwide</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-primary/10 dark:border-primary/20">
          <div className="bg-gradient-to-br from-accent/10 to-transparent p-6">
            <h3 className="text-xl font-semibold mb-2">Send Me a Message</h3>
            <p className="text-muted-foreground text-sm">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <CardContent className="p-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Your email" 
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Subject of your message" 
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full group relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
