import Link from "next/link";

interface Contact {
  icon: string;
  title: string;
  value: string;
}

interface LinkItem {
  href: string;
  text: string;
}

interface ContactSectionProps {
  title?: string;
  description?: string;
  contacts?: Contact[];
  links?: LinkItem[];
}

const defaultContacts = [
  { icon: "📧", title: "Email", value: "support@autocarz.com" },
  { icon: "📞", title: "Téléphone", value: "+33 1 XX XX XX XX" },
  { icon: "💬", title: "Chat", value: "Disponible 24h/7j" },
];

const defaultLinks = [
  { href: "/privacy", text: "Politique de Confidentialité" },
  { href: "/terms", text: "Conditions d'Utilisation" },
  { href: "/cookies", text: "Politique des Cookies" },
];

export default function ContactSection({
  title = "Besoin d'aide ?",
  description = "Notre équipe est là pour vous aider",
  contacts = defaultContacts,
  links = defaultLinks,
}: ContactSectionProps) {
  return (
    <div className="bg-gradient-to-r from-[#0D1B2A] to-[#1a2a3a] text-white rounded-2xl p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {contacts.map((contact, index) => (
          <div key={index} className="text-center">
            <div className="w-12 h-12 bg-[#FFD700] rounded-xl flex items-center justify-center mx-auto mb-3">
              {contact.icon}
            </div>
            <h5 className="font-semibold mb-1">{contact.title}</h5>
            <p className="text-sm text-gray-300">{contact.value}</p>
          </div>
        ))}
      </div>

      <div className="pt-6 border-t border-gray-600 flex flex-wrap justify-center gap-4">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-[#FFD700] hover:text-white transition-colors text-sm"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
