import './globals.css';
import ApolloWrapper from '@/components/ApolloWrapper';
import MockProvider from '@/mocks/MockProvider';
if (typeof window === "undefined" && process.env.NODE_ENV === "development") {
  import("@/mocks/server").then(({ server }) => {
    server.listen({ onUnhandledRequest: "warn" });
  });
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MockProvider>
          <ApolloWrapper>{children}</ApolloWrapper>
        </MockProvider>
      </body>
    </html>
  );
}
