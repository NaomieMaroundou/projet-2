import Link from "next/link"
import { Eye, Phone, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">TransparenCity</span>
            </div>
            <p className="text-stone-300 mb-4 max-w-md">
              Plateforme citoyenne gabonaise dédiée à la transparence et à la redevabilité publique. Ensemble,
              construisons un Gabon plus transparent.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-stone-300">
                <Phone className="w-4 h-4" />
                <span className="text-sm">062014189 • 066184742</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-stone-300">
              <li>
                <Link href="/carte" className="hover:text-orange-400 transition-colors">
                  Carte Interactive
                </Link>
              </li>
              <li>
                <Link href="/signaler" className="hover:text-orange-400 transition-colors">
                  Signaler un Problème
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-orange-400 transition-colors">
                  Tableau de Bord
                </Link>
              </li>
              <li>
                <Link href="/discussions" className="hover:text-orange-400 transition-colors">
                  Discussions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-stone-300">
              <li>
                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@transparencity.ga"
                  className="flex items-center gap-2 hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
          <p>&copy; 2024 TransparenCity Gabon. Tous droits réservés.</p>
          <p className="mt-2 text-sm">Projet citoyen pour la transparence publique au Gabon 🇬🇦</p>
        </div>
      </div>
    </footer>
  )
}
