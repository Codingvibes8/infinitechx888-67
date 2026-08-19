import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Scriptorcode delivered exactly what we needed. Our site is faster, looks incredible, and our conversion rate has doubled since launch.",
    name: "Sarah Jenkins",
    role: "Marketing Director, TechFlow",
  },
  {
    quote:
      "The team was highly professional and communicative throughout the entire process. The custom design perfectly captures our brand identity.",
    name: "Michael Chen",
    role: "Founder, InnovateHQ",
  },
  {
    quote:
      "We were struggling with slow load times on our old WordPress site. The new Next.js build is lightning fast and our SEO rankings improved immediately.",
    name: "Emma Davis",
    role: "E-commerce Manager, StyleLoom",
  },
  {
    quote:
      "Unbelievable attention to detail. They didn't just build a website, they built a powerful tool for our business growth.",
    name: "David Rodriguez",
    role: "CEO, NexaCorp",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border/40 bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-card border-border/40 card-shine hover:border-primary/40 transition-colors">
                      <CardContent className="flex flex-col h-full p-6">
                        <div className="flex gap-1 mb-4 text-primary">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary" />
                          ))}
                        </div>
                        <blockquote className="flex-1 mb-6 text-sm leading-relaxed text-foreground">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-auto">
                          <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 text-foreground border-border/40 hover:bg-primary/10 hover:text-primary hover:border-primary/40" />
              <CarouselNext className="static translate-y-0 text-foreground border-border/40 hover:bg-primary/10 hover:text-primary hover:border-primary/40" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
