import { useState, useMemo } from "react";
import { Mail, Phone, Download, Copy, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, contactInfo } from "@/data/portfolio";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [emailCopied, setEmailCopied] = useState(false);

  // Create schema dynamically based on current language
  const contactFormSchema = useMemo(() => z.object({
    name: z.string().min(2, t(translations.contact.validation.nameMin)),
    email: z.string().email(t(translations.contact.validation.emailInvalid)),
    subject: z.string().min(3, t(translations.contact.validation.subjectMin)),
    message: z.string().min(10, t(translations.contact.validation.messageMin))
  }), [t]);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setEmailCopied(true);
      toast({
        title: t(translations.contact.emailCopied),
        duration: 2000
      });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const onSubmit = (data: ContactFormValues) => {
    // Open mailto link with form data
    const subject = encodeURIComponent(data.subject);
    const fromLabel = t(translations.contact.mailtoFrom);
    const body = encodeURIComponent(
      `${fromLabel}: ${data.name} (${data.email})\n\n${data.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t(translations.contact.title)}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {t(translations.contact.subtitle)}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t(translations.contact.name)}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t(translations.contact.email)}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t(translations.contact.subject)}</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-subject" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t(translations.contact.message)}</FormLabel>
                        <FormControl>
                          <Textarea rows={6} {...field} data-testid="input-message" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg" data-testid="button-send">
                    {t(translations.contact.send)}
                  </Button>
                </form>
              </Form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-8 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {t(translations.contact.availableFor)}
                  </h3>
                  <p className="text-base text-muted-foreground">
                    {t(translations.contact.remote)}
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-base text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-3 rounded-md"
                    data-testid="link-contact-email"
                  >
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="flex-1">{contactInfo.email}</span>
                  </a>

                  <Button
                    variant="outline"
                    className="w-full justify-start gap-3"
                    onClick={copyEmail}
                    data-testid="button-copy-email"
                  >
                    {emailCopied ? (
                      <Check className="w-4 h-4 text-primary" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    {t(translations.contact.copyEmail)}
                  </Button>

                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-base text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-3 rounded-md"
                    data-testid="link-contact-phone"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span>{contactInfo.phone}</span>
                  </a>
                </div>

                <div className="pt-4">
                  <Button
                    className="w-full gap-2"
                    size="lg"
                    onClick={() => window.open("/api/download-cv", "_blank")}
                    data-testid="button-download-cv-footer"
                  >
                    <Download className="w-4 h-4" />
                    {t(translations.hero.downloadCV)}
                  </Button>
                </div>
              </Card>

              {/* OIQ Badge */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {t(translations.contact.oiqMemberNumber)}
                  </p>
                  <p className="text-2xl font-mono font-bold text-primary">
                    #{contactInfo.oiqNumber}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t(translations.contact.oiqDesignation)}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
