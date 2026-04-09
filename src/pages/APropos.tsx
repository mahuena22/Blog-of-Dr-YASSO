import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Layout from '@/components/Layout'
import img1 from '@/assets/img1.jpeg'
import portrait from '@/assets/portrait.jpg'
import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react'

const timeline = [
    { year: '1975', event: "Naissance à Natitingou, département de l'Atacora" },
    {
        year: '1997',
        event: "Diplôme de Licence en Droit à l'Université d'Abomey-Calavi",
    },
    { year: '2002', event: 'Obtention du Master en Sciences Politiques' },
    { year: '2008', event: 'Doctorat en Sciences Politiques et Gouvernance' },
    {
        year: '2010',
        event: "Début de l'engagement communautaire actif dans l'Atacora",
    },
    {
        year: '2015',
        event: "Fondation d'une association pour le développement local",
    },
    {
        year: '2020',
        event: "Lancement de projets d'infrastructure dans la 4e circonscription",
    },
    {
        year: '2026',
        event: 'Candidat pour représenter la 4e circonscription électorale',
    },
]

const values = [
    {
        icon: GraduationCap,
        title: 'Excellence académique',
        desc: 'Un parcours universitaire brillant, couronné par un Doctorat en Sciences Politiques, qui lui confère une expertise unique en matière de gouvernance locale.',
    },
    {
        icon: Briefcase,
        title: 'Expérience professionnelle',
        desc: "Plus de 15 ans d'expérience dans l'administration publique et le développement communautaire au service des populations de l'Atacora.",
    },
    {
        icon: Award,
        title: 'Leadership reconnu',
        desc: 'Reconnu par ses pairs et les populations pour son intégrité, sa vision et sa capacité à fédérer autour de projets communs.',
    },
    {
        icon: Heart,
        title: 'Engagement humanitaire',
        desc: "Fondateur de plusieurs initiatives sociales en faveur de l'éducation des enfants, de la santé maternelle et de l'autonomisation des femmes.",
    },
]

const APropos = () => {
    useScrollAnimation()

    return (
        <Layout>
            {/* Hero */}
            <section className="pt-32 pb-20 gradient-hero">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="animate-fade-in-up">
                            <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
                                Biographie
                            </p>
                            <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                                Dr Désiré{' '}
                                <span className="text-secondary">YASSO</span>
                            </h1>
                            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-4">
                                Né à Natitingou au cœur de l'Atacora, Dr Désiré
                                YASSO est un homme de conviction et d'action.
                                Docteur en Sciences Politiques, il a consacré sa
                                carrière à l'étude et à la mise en œuvre de
                                politiques publiques efficaces au service du
                                développement local.
                            </p>
                            <p className="text-primary-foreground/70 text-lg leading-relaxed">
                                Son engagement profond envers les communautés de
                                Natitingou et Toucountouna l'a conduit à initier
                                de nombreux projets transformateurs dans les
                                domaines de l'éducation, de la santé et des
                                infrastructures.
                            </p>
                        </div>
                        <div
                            className="animate-fade-in-up flex justify-center"
                            style={{ animationDelay: '0.2s' }}>
                            <div className="relative">
                                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-secondary rounded-2xl" />
                                <img
                                    src={img1}
                                    alt="Dr Désiré YASSO"
                                    className="relative rounded-2xl shadow-2xl w-80 md:w-96 object-cover"
                                    width={800}
                                    height={1024}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values/Engagements */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="section-fade-in text-center mb-16">
                        <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                            Compétences & Valeurs
                        </p>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                            Ce qui le distingue
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className="section-fade-in hover-lift flex gap-6 bg-card border border-border rounded-2xl p-8">
                                <div className="w-14 h-14 rounded-full gradient-gold flex items-center justify-center shrink-0">
                                    <v.icon
                                        size={24}
                                        className="text-primary"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                                        {v.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {v.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-muted">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="section-fade-in text-center mb-16">
                        <p className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                            Parcours
                        </p>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                            Une vie d'engagement
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, i) => (
                            <div
                                key={i}
                                className="section-fade-in flex gap-6 mb-8 last:mb-0">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-secondary shrink-0 mt-1" />
                                    {i < timeline.length - 1 && (
                                        <div className="w-0.5 flex-1 bg-secondary/30 mt-2" />
                                    )}
                                </div>
                                <div className="pb-8">
                                    <p className="text-secondary font-bold text-sm mb-1">
                                        {item.year}
                                    </p>
                                    <p className="text-foreground">
                                        {item.event}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default APropos
