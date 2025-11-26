import './globals.css';
import ApolloWrapper from '@/components/ApolloWrapper';
import MockProvider from '@/mocks/MockProvider';

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
