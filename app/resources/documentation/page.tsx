// app/resources/documentation/page.tsx
export default function Documentation() {
  return (
    <section className="max-w-5xl mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      <p className="text-lg text-gray-700">
        Find API specs, integration guides, and data model details here.
        {/* You can embed links to PDFs, Swagger UI, etc. */}
      </p>
    </section>
  );
}