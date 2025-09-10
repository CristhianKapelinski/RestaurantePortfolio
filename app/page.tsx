"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChefHat, Clock, MapPin, Phone, Instagram, Facebook, Star, Wheat, UtensilsCrossed, Heart } from "lucide-react"

const menuItems = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    description: "Massa artesanal com molho cremoso, pancetta e queijo parmesão",
    price: "R$ 42,00",
    category: "Massas",
    featured: true,
    image: "/spaghetti-carbonara-elegant-plating.jpg",
  },
  {
    id: 2,
    name: "Risotto ai Funghi",
    description: "Risotto cremoso com cogumelos porcini e trufa branca",
    price: "R$ 48,00",
    category: "Massas",
    featured: false,
    image: "/mushroom-risotto-elegant-plating.jpg",
  },
  {
    id: 3,
    name: "Osso Buco",
    description: "Tradicional osso buco milanês com polenta cremosa",
    price: "R$ 65,00",
    category: "Carnes",
    featured: true,
    image: "/osso-buco-italian-dish-elegant-plating.jpg",
  },
  {
    id: 4,
    name: "Tiramisu della Casa",
    description: "Sobremesa clássica com café espresso e mascarpone",
    price: "R$ 18,00",
    category: "Sobremesas",
    featured: false,
    image: "/tiramisu-elegant-dessert-plating.jpg",
  },
  {
    id: 5,
    name: "Chianti Classico",
    description: "Vinho tinto italiano selecionado, safra 2020",
    price: "R$ 85,00",
    category: "Bebidas",
    featured: false,
    image: "/chianti-wine-bottle-elegant.jpg",
  },
  {
    id: 6,
    name: "Bruschetta Trio",
    description: "Três variações: tomate e manjericão, burrata e prosciutto",
    price: "R$ 28,00",
    category: "Entradas",
    featured: false,
    image: "/bruschetta-trio-elegant-plating.jpg",
  },
]

const testimonials = [
  {
    name: "Maria Silva",
    rating: 5,
    comment: "Experiência incrível! A carbonara estava perfeita e o atendimento excepcional.",
    date: "2 semanas atrás",
  },
  {
    name: "João Santos",
    rating: 5,
    comment: "Ambiente aconchegante e comida autêntica. Voltarei com certeza!",
    date: "1 mês atrás",
  },
  {
    name: "Ana Costa",
    rating: 5,
    comment: "O melhor restaurante italiano da cidade. Ingredientes frescos e sabor único.",
    date: "3 semanas atrás",
  },
]

export default function LaTavolaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  const categories = ["Todos", "Entradas", "Massas", "Carnes", "Sobremesas", "Bebidas"]

  const filteredItems =
    selectedCategory === "Todos" ? menuItems : menuItems.filter((item) => item.category === selectedCategory)

  const whatsappMessage = encodeURIComponent("Olá! Gostaria de fazer uma reserva no La Tavola. Poderia me ajudar?")

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)] text-primary"
          >
            La Tavola
          </motion.div>

          <div className="hidden md:flex space-x-8 font-[family-name:var(--font-dm-sans)]">
            <a href="#inicio" className="hover:text-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#cardapio" className="hover:text-primary transition-colors">
              Cardápio
            </a>
            <a href="#galeria" className="hover:text-primary transition-colors">
              Galeria
            </a>
            <a href="#contato" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="md:hidden bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/elegant-italian-restaurant-interior-warm-lighting.jpg')`,
            }}
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-balance"
          >
            Sabores que <span className="text-primary">conquistam</span> sua noite
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-muted-foreground font-[family-name:var(--font-dm-sans)] text-pretty"
          >
            20 anos de tradição em massas artesanais e culinária italiana autêntica
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-[family-name:var(--font-dm-sans)]"
              onClick={() => window.open(`https://wa.me/55997160368?text=${whatsappMessage}`, "_blank")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Reservar Mesa
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-[family-name:var(--font-dm-sans)] bg-transparent"
              onClick={() => document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" })}
            >
              <UtensilsCrossed className="mr-2 h-5 w-5" />
              Ver Cardápio
            </Button>
          </motion.div>
        </div>

        {/* Floating WhatsApp Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            size="lg"
            className="rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-lg"
            onClick={() => window.open(`https://wa.me/55997160368?text=${whatsappMessage}`, "_blank")}
          >
            <Phone className="h-6 w-6" />
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)] text-primary">
              Nossa História
            </h2>
            <p className="text-lg md:text-xl mb-12 text-card-foreground font-[family-name:var(--font-dm-sans)] text-pretty leading-relaxed">
              Há duas décadas, a família Rossi trouxe para o Brasil os segredos culinários passados de geração em
              geração. No La Tavola, cada prato é preparado com ingredientes selecionados e o amor pela tradição
              italiana autêntica.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wheat className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">Tradição</h3>
                <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                  Receitas familiares preservadas há gerações
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">Qualidade</h3>
                <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                  Ingredientes frescos e selecionados diariamente
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">Paixão</h3>
                <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                  Cada prato preparado com amor e dedicação
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="cardapio" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-primary">
              Nosso Cardápio
            </h2>
            <p className="text-lg text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              Sabores autênticos da Itália em cada prato
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="font-[family-name:var(--font-dm-sans)]"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {item.featured && (
                      <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Destaque</Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] text-card-foreground">
                        {item.name}
                      </h3>
                      <span className="text-lg font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-4 font-[family-name:var(--font-dm-sans)] text-pretty">
                      {item.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-primary">
              Nosso Ambiente
            </h2>
            <p className="text-lg text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              Um espaço acolhedor para momentos especiais
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "/elegant-restaurant-interior-warm-lighting.jpg",
              "/italian-pasta-being-prepared-in-kitchen.jpg",
              "/wine-cellar-with-italian-wines.jpg",
              "/romantic-dinner-table-setting.jpg",
              "/chef-preparing-fresh-pasta.jpg",
              "/elegant-restaurant-bar-area.jpg",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
              >
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Galeria ${index + 1}`}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-primary">
              O que dizem nossos clientes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-card-foreground mb-4 font-[family-name:var(--font-dm-sans)] text-pretty">
                      &quot;{testimonial.comment}&quot;
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold font-[family-name:var(--font-space-grotesk)]">{testimonial.name}</span>
                      <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-primary">
              Faça sua Reserva
            </h2>
            <p className="text-lg text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              Venha viver essa experiência única
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">
                    Formulário de Reserva
                  </h3>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Seu nome" className="font-[family-name:var(--font-dm-sans)]" />
                      <Input placeholder="Telefone" className="font-[family-name:var(--font-dm-sans)]" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input type="date" className="font-[family-name:var(--font-dm-sans)]" />
                      <Input placeholder="Nº de pessoas" className="font-[family-name:var(--font-dm-sans)]" />
                    </div>
                    <Textarea placeholder="Observações especiais" className="font-[family-name:var(--font-dm-sans)]" />
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-[family-name:var(--font-dm-sans)]"
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(`https://wa.me/55997160368?text=${whatsappMessage}`, "_blank")
                      }}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Reservar pelo WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">Endereço</h4>
                  <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                    Rua das Flores, 123
                    <br />
                    Vila Madalena, São Paulo - SP
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">Horário</h4>
                  <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                    Terça a Domingo
                    <br />
                    18h às 23h
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 font-[family-name:var(--font-space-grotesk)]">Contato</h4>
                  <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                    (55) 99716-0368
                    <br />
                    cristhianavila.aluno@unipampa.edu.br
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h4 className="font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">Siga-nos</h4>
                <div className="flex space-x-4">
                  <Button size="sm" variant="outline" className="p-2 bg-transparent">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="sm" variant="outline" className="p-2 bg-transparent">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    size="sm"
                    className="p-2 bg-green-600 hover:bg-green-700"
                    onClick={() => window.open(`https://wa.me/55997160368?text=${whatsappMessage}`, "_blank")}
                  >
                    <Phone className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-space-grotesk)] text-primary">
                La Tavola
              </h3>
              <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)] text-pretty">
                20 anos de tradição em massas artesanais e culinária italiana autêntica. Sabores que conquistam sua
                noite.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">Links Rápidos</h4>
              <div className="space-y-2 font-[family-name:var(--font-dm-sans)]">
                <a href="#inicio" className="block text-muted-foreground hover:text-primary transition-colors">
                  Início
                </a>
                <a href="#sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
                <a href="#cardapio" className="block text-muted-foreground hover:text-primary transition-colors">
                  Cardápio
                </a>
                <a href="#contato" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-[family-name:var(--font-space-grotesk)]">Newsletter</h4>
              <p className="text-muted-foreground mb-4 font-[family-name:var(--font-dm-sans)]">
                Receba promoções exclusivas no seu e-mail
              </p>
              <div className="flex gap-2">
                <Input placeholder="Seu e-mail" className="flex-1 font-[family-name:var(--font-dm-sans)]" />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Inscrever</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              © 2024 La Tavola. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
