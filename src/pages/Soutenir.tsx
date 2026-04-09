import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Layout from "@/components/Layout";
import { Heart, Share2, Users, HandHeart } from "lucide-react";

const supportCards = [
  { icon: HandHeart, title: "Don financier", desc: "Contribuez financièrement au développement de la 4e circonscription. Chaque contribution compte.", action: "Faire un don" },
  { icon: Users, title: "Devenir bénévole", desc: "Rejoignez notre équipe de bénévoles et participez activement aux actions sur le terrain.", action: "S'inscrire" },
  { icon: Share2, title: "Relayer notre message", desc: "Partagez nos actions et notre vision sur vos réseaux sociaux pour amplifier notre impact.", action: "Partager" },
  { icon: Heart, title: "Parrainer un projet", desc: "Adoptez un projet spécifique (éducation, santé, infrastructure) et suivez son avancement.", action: "Parrainer" },
];

const Soutenir = () => {
  useScrollAnimation();

  return (
    <Layout>
      <section className="pt-32 pb-12 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3 animate-fade-in">Engagement</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">Nous soutenir</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Votre soutien est essentiel pour construire une 4<sup>e</sup> circonscription plus forte. Découvrez comment vous pouvez contribuer.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {supportCards.map((card, i) => (
              <div
                key={i}
                className="section-fade-in hover-lift bg-card border border-border rounded-2xl p-8 text-center group"
              >
                <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <card.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{card.desc}</p>
                <button className="gradient-gold text-primary font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
                  {card.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="section-fade-in mb-16">
            <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">Notre impact</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">En chiffres</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "5 000+", label: "Familles aidées" },
              { num: "12", label: "Projets réalisés" },
              { num: "2 000+", label: "Kits scolaires" },
              { num: "3", label: "Centres de santé" },
            ].map((s, i) => (
              <div key={i} className="section-fade-in">
                <p className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-2">{s.num}</p>
                <p className="text-primary-foreground/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Soutenir;
