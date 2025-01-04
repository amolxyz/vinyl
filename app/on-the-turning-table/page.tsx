import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'On the turning table',
  description: 'On the turning table',
};

export default function AboutPage() {
  return (
    <div className="mt-12 space-y-12 font-mono max-w-[700px] mx-auto">
      <h1 className="text-xl">ON THE TURNING TABLE</h1>

      <section className="space-y-4">
        <p className="leading-relaxed">
          A personal collection of vinyl records, showcasing a diverse range of artists and albums. Exploring the unique stories and sounds captured in each record, from classic hits to modern masterpieces.
        </p>
      </section>
    </div>
  );
}
