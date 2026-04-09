import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-deep-black text-primary-foreground/70">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-4">
            Dr Désiré <span className="text-secondary">YASSO</span>
          </h3>
          <p className="text-sm leading-relaxed mb-6">
            Pour une 4<sup>e</sup> circonscription plus forte et plus unie.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-primary transition-all duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Liens rapides</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Accueil", path: "/" },
              { label: "Qui est Dr Yasso ?", path: "/a-propos" },
              { label: "Actualités", path: "/actualites" },
              { label: "Contact", path: "/contact" },
              { label: "Nous soutenir", path: "/soutenir" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-secondary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3"><MapPin size={16} className="text-secondary shrink-0" /> Natitingou, Atacora, Bénin</li>
            <li className="flex items-center gap-3"><Phone size={16} className="text-secondary shrink-0" /> +229 XX XX XX XX</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-secondary shrink-0" /> contact@dryasso.bj</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading text-lg font-semibold text-primary-foreground mb-4">Restez informé</h4>
          <p className="text-sm mb-4">Recevez les dernières actualités de Dr Yasso.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-lg px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-secondary"
            />
            <button className="gradient-gold text-primary px-4 py-2.5 rounded-r-lg text-sm font-semibold hover:opacity-90 transition-opacity">
              OK
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8 py-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Dr Désiré YASSO. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
