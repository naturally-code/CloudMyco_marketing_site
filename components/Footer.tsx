// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const sections = [
    {
      title: "Product",
      links: [{ href: "/product/overview", label: "Overview" }],
    },
    {
      title: "Resources",
      links: [
        { href: "/resources/documentation", label: "Documentation" },
        { href: "/resources/api-references", label: "API References" },
      ],
    },
    {
      title: "Contact",
      links: [
        { href: "/about", label: "About" },
        { href: "/mission", label: "Mission" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {sections.map((sec) => (
          <div key={sec.title}>
            <h4 className="text-white font-semibold mb-3">{sec.title}</h4>
            <ul className="space-y-2">
              {sec.links.map((ln) => (
                <li key={ln.href}>
                  <Link
                    href={ln.href}
                    className="hover:text-white transition-colors"
                  >
                    {ln.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Existing copyright line */}
      <div className="mt-8 text-center text-sm">
        © {new Date().getFullYear()} CloudMyco. Open source under Apache 2.0.
      </div>
    </footer>
  );
}