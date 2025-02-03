'use client';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading API Documentation...</p>
    </div>
  ),
});

export default function ApiDoc() {
  return (
    <div className="swagger-wrapper">
      <SwaggerUI
        url={`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/docs`}
        docExpansion="list"
        defaultModelExpandDepth={5}
        defaultModelsExpandDepth={5}
      />
      <style jsx global>{`
        .swagger-ui .wrapper {
          padding: 0;
          max-width: none;
        }
        .swagger-ui .info {
          margin: 20px 0;
        }
        body {
          background: white;
        }
      `}</style>
    </div>
  );
}