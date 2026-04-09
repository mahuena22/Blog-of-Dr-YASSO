import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Heart, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";
import portrait from "@/assets/portrait.jpg";
import community from "@/assets/community.jpg";
import development from "@/assets/development.jpg";

const Index = () => {
  useScrollAnimation();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <p className="text-secondary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-in">
            4<sup>e</sup> Circonscription Électorale — Natitingou & Toucountouna
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Dr Désiré <span className="text-secondary">YASSO</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Pour une 4<sup>e</sup> circonscription plus forte et plus unie. Ensemble, bâtissons l'avenir de l'Atacora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/a-propos"
              className="gradient-gold text-primary font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Découvrir son parcours <ArrowRight size={18} />
            </Link>
            <Link
              to="/soutenir"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:bg-primary-foreground/10 transition-colors"
            >
              Nous soutenir
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-secondary rounded-full" />
          </div>
        </div>
      </section>

      {/* Presentation */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-fade-in grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">Qui est-il ?</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Un homme au service de <span className="text-secondary">sa communauté</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dr Désiré YASSO est un fils de l'Atacora, profondément engagé dans le développement de sa région. Docteur en sciences politiques, il met son expertise et sa passion au service des populations de Natitingou et Toucountouna.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Son parcours exceptionnel, alliant formation académique de haut niveau et engagement communautaire, fait de lui un leader naturel pour la 4<sup>e</sup> circonscription électorale.
              </p>
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
              >
                En savoir plus <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-secondary rounded-2xl" />
              <img
                src={portrait}
                alt="Dr Désiré YASSO"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
                loading="lazy"
                width={800}
                height={1024}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-fade-in text-center mb-16">
            <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">Nos valeurs</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              Les piliers de notre engagement
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Proximité", desc: "Être à l'écoute des populations et répondre à leurs besoins réels au quotidien." },
              { icon: BookOpen, title: "Éducation", desc: "Promouvoir l'accès à une éducation de qualité pour tous les enfants de la circonscription." },
              { icon: Heart, title: "Solidarité", desc: "Renforcer les liens communautaires et soutenir les plus vulnérables." },
              { icon: MapPin, title: "Développement", desc: "Impulser des projets d'infrastructure et de modernisation pour l'Atacora." },
            ].map((v, i) => (
              <div
                key={i}
                className="section-fade-in hover-lift bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 text-center group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3">{v.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-fade-in text-center mb-16">
            <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">Zones concernées</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              La 4<sup>e</sup> <span className="text-secondary">Circonscription</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { img: community, city: "Natitingou", desc: "Chef-lieu du département de l'Atacora, carrefour économique et culturel majeur du Nord-Bénin." },
              { img: development, city: "Toucountouna", desc: "Commune riche de sa culture et de ses traditions, au cœur des montagnes de l'Atacora." },
            ].map((zone, i) => (
              <div key={i} className="section-fade-in hover-lift group rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={zone.img}
                    alt={zone.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={1200}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 font-heading text-2xl font-bold text-primary-foreground">
                    {zone.city}
                  </h3>
                </div>
                <div className="p-6 bg-card">
                  <p className="text-muted-foreground leading-relaxed">{zone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent news */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="section-fade-in flex items-end justify-between mb-12">
            <div>
              <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">Actualités</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Dernières nouvelles</h2>
            </div>
            <Link to="/actualites" className="hidden md:inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
              Toutes les actualités <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { date: "5 Avril 2026", title: "Inauguration du nouveau centre de santé de Natitingou", excerpt: "Un pas de plus vers l'amélioration de l'accès aux soins pour les populations de la 4e circonscription." },
              { date: "28 Mars 2026", title: "Rencontre avec les jeunes de Toucountouna", excerpt: "Dr Yasso échange avec la jeunesse sur les défis de l'emploi et de la formation professionnelle." },
              { date: "15 Mars 2026", title: "Projet d'adduction d'eau potable lancé", excerpt: "Un projet majeur pour apporter l'eau potable à plus de 5 000 habitants des zones rurales." },
            ].map((article, i) => (
              <Link
                key={i}
                to="/actualites"
                className="section-fade-in hover-lift bg-card rounded-2xl overflow-hidden shadow-sm group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-2 gradient-gold" />
                <div className="p-6">
                  <p className="text-secondary text-xs font-semibold tracking-wider uppercase mb-3">{article.date}</p>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="md:hidden text-center mt-8">
            <Link to="/actualites" className="inline-flex items-center gap-2 text-secondary font-semibold">
              Toutes les actualités <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-blue rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <div className="section-fade-in max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ensemble, construisons l'avenir de <span className="text-secondary">l'Atacora</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Votre soutien compte. Rejoignez le mouvement pour une 4<sup>e</sup> circonscription plus forte, plus unie et plus prospère.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/soutenir"
                className="gradient-gold text-primary font-semibold px-10 py-4 rounded-full hover:opacity-90 transition-opacity text-lg"
              >
                Nous soutenir
              </Link>
              <Link
                to="/contact"
                className="border-2 border-secondary text-secondary font-semibold px-10 py-4 rounded-full hover:bg-secondary/10 transition-colors text-lg"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
