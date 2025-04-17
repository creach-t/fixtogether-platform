import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Donnez une seconde vie à vos objets
            </h1>
            <p className="text-xl text-gray-700 max-w-lg">
              Rejoignez notre communauté et connectez-vous avec des réparateurs passionnés près de chez vous. Ensemble, réparons au lieu de remplacer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/repair-requests/new" className="btn btn-primary text-center py-3 px-6">
                Créer une demande de réparation
              </Link>
              <Link href="/how-it-works" className="btn btn-outline text-center py-3 px-6">
                Comment ça marche
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-x-12 gap-y-4 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary-600">10,250+</p>
                <p className="text-gray-600">Objets réparés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">2,800+</p>
                <p className="text-gray-600">Réparateurs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">42 tonnes</p>
                <p className="text-gray-600">CO2 économisé</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            {/* Replace with actual image - this is a placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
              <div className="text-primary-500 text-xl font-medium">
                Image de réparation (placeholder)
              </div>
            </div>
            {/* Uncomment when you have a real image */}
            {/* <Image 
              src="/images/hero-repair.jpg" 
              alt="Personne réparant un objet" 
              fill
              className="object-cover"
              priority
            /> */}
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-500 mb-8">Ils nous font confiance</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 opacity-70">
            {/* Replace with actual partner logos */}
            {['ADEME', 'Fablab', 'Réseau Envie', 'Spareka', 'Emmaüs'].map((partner, index) => (
              <div key={index} className="flex items-center justify-center h-12">
                <div className="text-gray-400 font-medium">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-24 left-4 w-24 h-24 rounded-full bg-accent-200 opacity-20 -z-10"></div>
      <div className="absolute bottom-12 right-8 w-40 h-40 rounded-full bg-primary-200 opacity-20 -z-10"></div>
    </section>
  );
};

export default Hero;
