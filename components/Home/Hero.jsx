import { Button } from '../ui/button';
import { ChevronRight, Cloud, Sparkles } from 'lucide-react';
import { ModeToggle } from '../ModeToggle';
import Link from 'next/link';

export default function Hero() {

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 md:px-8 bg-background overflow-hidden">
        <div className='absolute top-4 right-4'>
            <ModeToggle />
        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none ">
            {[1, 2, 3, 4, 5].map(i => (
            <div 
                key={i}
                className="absolute opacity-10 animate-float"
                style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${15 + i * 5}s`
                }}
            >
                <Cloud size={40 + i * 10} />
            </div>
            ))}
        </div>
      
        <div className="relative mx-auto flex items-center justify-center w-full max-w-4xl flex-col text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 text-primary text-sm font-medium animate-pulse">
                <Sparkles size={16} />
                <span>World's Fastest Disappearing Act</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
                The Future of Cloud Storage
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl  mb-10 leading-relaxed">
                Upload your files with confidence. We'll take them, delete them instantly, 
                and thank you for trusting us with absolutely nothing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-5">
                <Link href={`/app`}>
                    <Button 
                        size="lg"
                    >
                            Upload & Delete <ChevronRight size={20} />
                    </Button>
                </Link>
                <Link href="#why-nothing-matters">
                    <Button 
                        variant="outline" 
                        size="lg"
                    >
                        Learn Why Nothing Matters
                    </Button>
                </Link>
            </div>

            <div className='mb-15'>
                Cloud Storage so secure, even you can't access it.
            </div>

            {/* Trust indicators */}
            <div className="text-xs text-muted-foreground">
                Trusted by over 10,000 satisfied customers with nothing to lose
            </div>
        </div>
    </section>
  );
}