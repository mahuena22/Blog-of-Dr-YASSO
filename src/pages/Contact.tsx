import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Veuillez entrer votre nom").max(100),
  email: z.string().trim().email("Veuillez entrer un email valide").max(255),
  subject: z.string().trim().min(1, "Veuillez entrer un sujet").max(200),
  message: z.string().trim().min(1, "Veuillez entrer votre message").max(2000),
});

const ContactPage = () => {
  useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Message envoyé avec succès !");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass = (field: string) =>
    `w-full bg-background border ${errors[field] ? "border-destructive" : "border-border"} rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-secondary transition-colors`;

  return (
    <Layout>
      <section className="pt-32 pb-12 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3 animate-fade-in">Contactez-nous</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground animate-fade-in-up">Restons en contact</h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="section-fade-in space-y-8">
              <div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Nos coordonnées</h3>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: "Adresse", value: "Natitingou, Atacora, Bénin" },
                    { icon: Phone, label: "Téléphone", value: "+229 XX XX XX XX" },
                    { icon: Mail, label: "Email", value: "contact@dryasso.bj" },
                  ].map((c, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center shrink-0">
                        <c.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{c.label}</p>
                        <p className="font-medium text-foreground">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 section-fade-in">
              <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Envoyez-nous un message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <input placeholder="Votre nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass("name")} />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input placeholder="Votre email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass("email")} />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <input placeholder="Sujet" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass("subject")} />
                    {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <textarea placeholder="Votre message" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass("message")} />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" className="gradient-gold text-primary font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                    Envoyer <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
