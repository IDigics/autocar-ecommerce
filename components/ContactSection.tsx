interface ContactSectionProps {
  title?: string;
  description?: string;
  contacts?: Array<{ icon: string; title: string; value: string }>;
  links?: Array<{ href: string; text: string }>;
}

export default function ContactSection({
  title = "Contactez-nous",
  description = "Notre équipe est à votre disposition pour répondre à toutes vos questions",
  contacts = [],
  links = [],
}: ContactSectionProps) {
  return (
    <section className="bg-white py-16 rounded-2xl">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0D1B2A] mb-4">{title}</h2>
        <p className="text-[#71797E] mb-8">{description}</p>
        {contacts.length > 0 && (
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contacts.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{contact.icon}</div>
                <h3 className="font-semibold text-[#0D1B2A]">
                  {contact.title}
                </h3>
                <p className="text-[#71797E]">{contact.value}</p>
              </div>
            ))}
          </div>
        )}
        {links.length > 0 && (
          <div className="flex justify-center gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="bg-[#FFD700] text-black px-6 py-2 rounded-full font-medium hover:bg-[#e6c200] transition-colors"
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
