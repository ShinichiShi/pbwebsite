export const metadata = {
  title: 'API Documentation',
};

export default function SwaggerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}