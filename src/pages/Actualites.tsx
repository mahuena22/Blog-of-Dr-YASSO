import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Layout from "@/components/Layout";
import community from "@/assets/community.jpg";
import development from "@/assets/development.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const articles = [
  { id: 1, date: "5 Avril 2026", category: "Santé", title: "Inauguration du nouveau centre de santé de Natitingou", excerpt: "Un pas de plus vers l'amélioration de l'accès aux soins pour les populations de la 4e circonscription. Le centre pourra accueillir jusqu'à 200 patients par jour.", img: community },
  { id: 2, date: "28 Mars 2026", category: "Jeunesse", title: "Rencontre avec les jeunes de Toucountouna", excerpt: "Dr Yasso échange avec la jeunesse sur les défis de l'emploi et de la formation professionnelle dans l'Atacora.", img: development },
  { id: 3, date: "15 Mars 2026", category: "Infrastructure", title: "Projet d'adduction d'eau potable lancé", excerpt: "Un projet majeur pour apporter l'eau potable à plus de 5 000 habitants des zones rurales de la circonscription.", img: heroBg },
  { id: 4, date: "1 Mars 2026", category: "Éducation", title: "Distribution de fournitures scolaires", excerpt: "Plus de 2 000 kits scolaires distribués dans les écoles primaires de Natitingou et Toucountouna.", img: community },
  { id: 5, date: "15 Février 2026", category: "Agriculture", title: "Soutien aux coopératives agricoles", excerpt: "Dr Yasso renforce son engagement auprès des agriculteurs en facilitant l'accès aux semences améliorées.", img: development },
  { id: 6, date: "1 Février 2026", category: "Communauté", title: "Forum communautaire de l'Atacora", excerpt: "Un espace d'échange pour recueillir les préoccupations des populations et co-construire des solutions durables.", img: heroBg },
];

const categories = ["Tous", "Santé", "Jeunesse", "Infrastructure", "Éducation", "Agriculture", "Communauté"];

const Actualites = () => {
  useScrollAnimation();
  const [filter, setFilter] = useState("Tous");

  const filtered = filter === "Tous" ? articles : articles.filter((a) => a.category === filter);

  return (
    <Layout>
      <section className="pt-32 pb-12 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3 animate-fade-in">Blog</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground animate-fade-in-up">Actualités</h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "gradient-gold text-primary"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((a) => (
              <article key={a.id} className="section-fade-in hover-lift bg-card rounded-2xl overflow-hidden shadow-sm border border-border group cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" width={1200} height={800} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">{a.category}</span>
                    <span className="text-xs text-muted-foreground">{a.date}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Actualites;
