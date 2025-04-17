import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Testimonials data
const testimonials = [
  {
    id: 1,
    content: "Grâce à FixTogether, j'ai trouvé un réparateur qui a sauvé mon ordinateur portable considéré comme irréparable par le service officiel. J'ai économisé 800€ et évité de produire plus de déchets électroniques !",
    author: {
      name: 'Sophie Martin',
      role: 'Graphiste freelance',
      avatar: '/placeholders/avatar1.jpg',
    },
  },
  {
    id: 2,
    content: "En tant que bricoleur passionné d'électronique, FixTogether me permet de partager mes compétences et d'aider les gens de mon quartier. C'est gratifiant de voir leurs sourires quand leurs objets fonctionnent à nouveau.",
    author: {
      name: 'Thomas Dubois',
      role: 'Réparateur amateur',
      avatar: '/placeholders/avatar2.jpg',
    },
  },
  {
    id: 3,
    content: "J'ai rejoint la plateforme pour développer mon activité de réparation. Aujourd'hui, j'ai une clientèle fidèle et un impact positif sur l'environnement. FixTogether m'a aidé à vivre de ma passion.",
    author: {
      name: 'Marie Leroux',
      role: 'Réparatrice professionnelle',
      avatar: '/placeholders/avatar3.jpg',
    },
  },
];

const CommunitySection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Notre communauté témoigne</h2>
          <p className="text-lg text-gray-600">
            Découvrez comment FixTogether transforme la façon dont nous prenons soin de nos objets, 
            à travers les expériences de nos membres.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for avatar - replace with actual image when available */}
                    <span className="text-gray-500 text-sm font-medium">
                      {testimonial.author.name.charAt(0)}
                    </span>
                    {/* Uncomment when you have real avatars */}
                    {/* <Image
                      src={testimonial.author.avatar}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    /> */}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.author.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Rejoignez une communauté engagée</h3>
              <p className="text-gray-600 mb-6">
                FixTogether rassemble plus de 3 000 réparateurs passionnés et 8 000 utilisateurs à travers la France. 
                Ensemble, nous construisons un monde où la réparation devient un réflexe, 
                plutôt que le remplacement systématique.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/auth/register" className="btn btn-primary">
                  Rejoindre la communauté
                </Link>
                <Link href="/community" className="btn btn-outline">
                  En savoir plus
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Community images - replace with actual images when available */}
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Image 1
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Image 2
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Image 3
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                Image 4
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
