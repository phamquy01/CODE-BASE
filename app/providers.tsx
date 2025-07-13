import NotificationProvider from '@/libs/contexts/NotificationContext';
import NextTopLoader from 'nextjs-toploader';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NotificationProvider>
        <NextTopLoader color="red" />
        {children}
      </NotificationProvider>
    </>
  );
}
