type JsonLdProps = {
  schema: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ schema }: JsonLdProps) {
  // Escapa "<" para que ningún texto pueda cerrar el <script> antes de tiempo
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
