import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/home/Hero';
import FeatureSection from '@/components/home/FeatureSection';
import HowItWorks from '@/components/home/HowItWorks';
import CommunitySection from '@/components/home/CommunitySection';
import ImpactCounter from '@/components/home/ImpactCounter';
import CategoryGrid from '@/components/home/CategoryGrid';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <FeatureSection />

      {/* Categories Grid */}
      <section className="container">
        <h2 className="text-center mb-8">Catégories d'objets</h2>
        <CategoryGrid />
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Environmental Impact Counter */}
      <section className="bg-primary-50 py-16">
        <div className="container">
          <h2 className="text-center mb-12">Notre impact collectif</h2>
          <ImpactCounter 
            repairs={1247}
            co2Saved={42560}
            wasteSaved={18750}
          />
        </div>
      </section>

      {/* Community Section */}
      <CommunitySection />
      
      {/* Call To Action */}
      <section className="bg-accent-500 py-16">
        <div className="container text-center">
          <h2 className="text-black mb-6">Prêt à donner une seconde vie à vos objets ?</h2>
          <p className="text-black mb-8 max-w-3xl mx-auto">
            Rejoignez notre communauté et contribuez à construire un monde plus durable en réparant plutôt qu'en remplaçant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/register" className="btn btn-primary">
              Créer un compte
            </Link>
            <Link href="/repair-requests/new" className="btn btn-outline">
              Créer une demande de réparation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
