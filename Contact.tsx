import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { useSupabase } from "@/hooks/use-supabase";

const Contact = () => {
  const supabase = useSupabase();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
    segment: "",
    message: "",
    lgpdConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.lgpdConsent) {
      toast.error("Por favor, aceite os termos de contato.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from("leads")
        .insert({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          company: formData.company || null,
          segment: formData.segment || null,
          message: formData.message || null,
          lgpd_consent: formData.lgpdConsent,
        });

      if (error) throw error;

      toast.success("Obrigado! Entraremos em contato ainda hoje.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        company: "",
        segment: "",
        message: "",
        lgpdConsent: false,
      });
    } catch (error) {
      console.error("Error saving lead:", error);
      toast.error("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-orbi bg-white">
      <div className="container-orbi">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Vamos conversar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Agende uma demonstração ou entre em contato conosco
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="space-y-6 p-8 rounded-xl bg-white border border-muted shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Seu nome"
                    className="bg-muted/30 hover:bg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail corporativo *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                    className="bg-muted/30 hover:bg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    placeholder="(11) 99999-9999"
                    className="bg-muted/30 hover:bg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="Nome da empresa"
                    className="bg-muted/30 hover:bg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="segment">Segmento</Label>
                  <Select
                    value={formData.segment}
                    onValueChange={(value) =>
                      setFormData({ ...formData, segment: value })
                    }
                  >
                    <SelectTrigger className="bg-muted/30 hover:bg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                      <SelectValue placeholder="Selecione um segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinica">Clínica</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                      <SelectItem value="servicos">Serviços</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Conte-nos sobre suas necessidades..."
                    rows={4}
                    className="bg-muted/30 hover:bg-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="lgpd"
                    checked={formData.lgpdConsent}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        lgpdConsent: checked as boolean,
                      })
                    }
                  />
                  <Label
                    htmlFor="lgpd"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Concordo em ser contatado(a) sobre as soluções da Orbi.
                    Usaremos seus dados para responder seu contato e agendar a
                    demonstração.
                  </Label>
                </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-foreground text-background hover:bg-foreground/90"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                  </Button>
              </form>
            </div>

            {/* Calendly Embed Placeholder */}
            <div className="rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 p-8 flex items-center justify-center min-h-[500px]">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <iframe
                  src="https://calendly.com/wictor-simoes/30min"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="min-h-[500px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
