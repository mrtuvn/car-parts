import Container from '@components/ui/container';

import { Metadata } from 'next';
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'


export const preferredRegion = 'home'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Kysely',
};

export default async function Page({
  params: { lang },
}: {
  params: {
    lang: string;
  };
}) {
  return (
    <>
      <Container>
      <main className="relative flex min-h-screen flex-col items-center justify-center">

        <h5 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-1xl font-medium tracking-tight text-transparent md:text-4xl">
          Sample kysely DB ORM postgres connect via vercel
        </h5>
        <Suspense fallback={<TablePlaceholder />}>
          <Table />
        </Suspense>

      </main>
      </Container>
    </>
  );
}
