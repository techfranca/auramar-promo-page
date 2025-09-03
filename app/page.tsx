"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  Shield,
  Truck,
  RefreshCw,
  AlertTriangle, // Ícone adicionado para a nova seção
} from "lucide-react"
import YampiBuyButton from "@/components/YampiBuyButton"
import Image from "next/image"
import { Tag } from "lucide-react"

export default function FitnessLandingPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currentHeroImage, setCurrentHeroImage] = useState(0)
  const [currentBrownImage, setCurrentBrownImage] = useState(0)
  const [currentSizeChart, setCurrentSizeChart] = useState(0)

  const galleryImages = [
    "/mulher-usando-conjunto-fitness-verde-tamanho-g.png",
    "/mulher-usando-conjunto-fitness-marrom-tamanho-gg.png",
    "/mulher-treinando-com-conjunto-fitness-sem-transpar.png",
    "/conjunto-fitness-com-sustenta--o-real-para-seios-g.png",
    "/mulher-fazendo-agachamento-com-conjunto-fitness.png",
    "/conjunto-fitness-modelagem-que-valoriza-corpo-g-e-.png",
  ]

  const heroCarouselImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FV%201-PUXV9ub46zQ0WuH0RjeBAdbSoEH6x9.png", // FV 1.png - Main image, front view
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FV%202-yUSle1N36A3oc2lMTm795aJQqWB0ch.png", // FV 2.png - Torso detail view
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FV%203-XTXepi4egBRNvsu8nmdWezciCTAePK.png", // FV 3.png - Back view
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2848.JPG-vLdPRiIGtaXrp0YqjbCsOefs15wueN.jpeg", // IMG_2848.JPG - Gym mirror selfie
  ]

  const brownSetImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FM%201-hLkowUuMLIiOf48TQceQFfpAoLjH3p.png", // FM 1.png - Full body front view
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FM%202-OOVwpH3dNl9W1IvmdIYtrGP0HwsevG.png", // FM 2.png - Torso focus
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FM%203-iWHAnfJkVPEqX058CV9SHnieCrKgTE.png", // FM 3.png - Waistband demonstration
  ]

  const sizeChartImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tabela%20de%20medidas%20fitness%2001-EHj8nh3uCoN9jOsZgbexWH3nuAi4dl.png", // Tabela de medidas fitness 01.png - measurements in cm
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tabela%20de%20medidas%20fitness%2002-Ls0xyBAkLJDPwiv56M7vhsMs63ndui.png", // Tabela de medidas fitness 02.png - clothing sizes
  ]

  const testimonials = [
    {
      name: "Carol Muniz",
      text: "O conjunto é perfeito! O tecido é muito bom, não é transparência, forro duplo no short e top. O P ficou perfeito, visto 34 e deu certinho",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-uc1fseuZ1qca1Q02CUxlhKBzevhLhb.svg",
    },
    {
      name: "Rayne Ribeiro",
      text: "Excelente material, cores lindas e idêntico ao anúncio! Top e Short forrados, sem risco de ficar transparente. Veste super bem!!!",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-ECQNJLqGMGLaFxPzzu41tdQlcV3Awu.svg",
    },
    {
      name: "Pamella Bringhenti",
      text: "Amei essa compra, o material é ótimo. Gostei muito por que é forrado e nada transparente. Agora quero a cor azul 😍",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-XV6mwgEYdjoHWFdMGt1Gtlre7zL6nu.svg",
    },
    {
      name: "Josy Antunes",
      text: "Perfeito 😍😍😍 Bem embalado e não marca a 🐸 que já é um 10/10, vem com forro nos shorts e tops, portanto não tem transparência. Uso 42 e o G ficou certinho.",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-WHoijw0Rl0Lggc8dKi8R0CJkRioySr.svg",
    },
    {
      name: "Bianca Luz",
      text: "Material de ótima qualidade e zero de transparência",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-MA1mrPKCJ6coq7u5jBNhIOYGPwe9ih.svg",
    },
    {
      name: "Lilian Pereira",
      text: "Amei o conjunto, o short e o top são forrados, zero transparência. Identico a foto! Comprei a tarde e postaram no mesmo dia!!",
      rating: 5,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-xvYs8DjhExHeAvyfiPlaO9LKtt2P4V.svg",
    },
  ]

  const faqs = [
    {
      question: "O tecido fica transparente?",
      answer:
        "Não! Nosso tecido forrado garante zero transparência, mesmo nos movimentos mais intensos. Você pode treinar com total confiança.",
    },
    {
      question: "Serve bem em quem tem seios grandes?",
      answer:
        "Sim! O conjunto foi desenvolvido especialmente para oferecer sustentação real para todos os tamanhos, incluindo seios grandes. Muitas clientes G e GG compram e gostam bastante!",
    },
    {
      question: "Se não servir, posso trocar?",
      answer:
        "Claro! Você tem até 7 dias para trocar ou devolver sem complicação. Queremos que você se sinta segura e confortável.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer:
        "Enviamos em até 2 dias úteis após a confirmação do pagamento. O prazo de entrega varia de 3 a 7 dias úteis conforme sua região.",
    },
    {
      question: "Como acompanho meu pedido?",
      answer:
        "Assim que seu pedido for despachado, você receberá o código de rastreamento por E-mail para acompanhar a entrega.",
    },
    {
      question: "Tem frete para todo o Brasil?",
      answer: "Sim! Entregamos em todo o Brasil. O frete é calculado automaticamente no checkout conforme seu CEP.",
    },
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const nextHeroImage = () => {
    setCurrentHeroImage((prev) => (prev + 1) % heroCarouselImages.length)
  }

  const prevHeroImage = () => {
    setCurrentHeroImage((prev) => (prev - 1 + heroCarouselImages.length) % heroCarouselImages.length)
  }

  const nextBrownImage = () => {
    setCurrentBrownImage((prev) => (prev + 1) % brownSetImages.length)
  }

  const prevBrownImage = () => {
    setCurrentBrownImage((prev) => (prev - 1 + brownSetImages.length) % brownSetImages.length)
  }

  const nextSizeChart = () => {
    setCurrentSizeChart((prev) => (prev + 1) % sizeChartImages.length)
  }

  const prevSizeChart = () => {
    setCurrentSizeChart((prev) => (prev - 1 + sizeChartImages.length) % sizeChartImages.length)
  }

  const scrollToCheckout = () => {
    const offerSection = document.getElementById("oferta-especial-auramar")
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-xl md:text-4xl font-bold mb-4 text-balance">
              <span className="font-bold text-green-600 text-2xl md:text-4xl">
                SE VOCÊ COMPRAR 1 CONJUNTO FITNESS VERDE COM NUDE HOJE
              </span>
              , VAMOS INCLUIR
              <span className="font-bold underline"> 1 TOP FITNESS</span>
              <span className="font-bold underline"> e 1 SHORT FITNESS</span>
              <span className="font-bold underline"> GRÁTIS</span>! 🎁
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 text-pretty">
              🔥 Tudo isso por um valor simbólico — Qualidade premium, conforto e estilo por um preço que cabe no bolso.
            </p>
            {/* Chip discreto com alusão ao preço */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-600/20 bg-green-50 text-green-700 px-3 py-1 text-sm md:text-base">
                <Tag className="w-4 h-4" />
                Promo exclusiva: <strong>2 conjuntos a partir de R$129,90</strong>
              </span>
              <span className="hidden md:inline text-gray-300">|</span>
              <span className="hidden md:inline text-gray-500 text-sm md:text-base">
                ⚡ Estoque limitado
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={heroCarouselImages[currentHeroImage] || "/placeholder.svg"}
                  alt={`Modelo usando conjunto fitness ${currentHeroImage + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-[600px] md:h-[500px] lg:h-[600px] object-cover transition-all duration-300 aspect-[9/16]"
                  priority={currentHeroImage === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <button
                onClick={prevHeroImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextHeroImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {heroCarouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentHeroImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentHeroImage ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={brownSetImages[currentBrownImage] || "/placeholder.svg"}
                  alt={`Conjunto Marrom Grátis ${currentBrownImage + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-[600px] md:h-[500px] lg:h-[600px] object-cover transition-all duration-300 aspect-[9/16]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-red-600 to-red-500 text-white p-4 rounded-t-lg">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black mb-1">🎁 LEVE GRÁTIS 🎁</div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-3 rounded-b-lg">
                <div className="text-center">
                  <div className="text-sm">Você não paga nada por ele, comprando HOJE!</div>
                </div>
              </div>

              <button
                onClick={prevBrownImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextBrownImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
                {brownSetImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBrownImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentBrownImage ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Zero Transparência</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Sustentação real</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>{"Modelo que não enrola"}</span>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full md:w-auto text-center"
            >
              GARANTIR MINHA PROMO
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Por que nossos conjuntos são diferentes?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Tecido forrado, com zero transparência",
                description: "Desenvolvido especialmente para não ficar transparente em nenhum movimento",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-TkUG4WEDS40hhnnPMepmUA3XaqGAXY.svg",
              },
              {
                title: "Sustentação real para seios",
                description: "Suporte adequado, sem precisar usar bojo por dentro",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-TdaoBJyhJdW8w8dXWZYd5OJewf57BS.svg",
              },
              {
                title: "Modelagem que valoriza",
                description: "Corte pensado para realçar e valorizar o seu corpo",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-cVdElG0RMVfbZCsypvu6mORlfHuz0r.svg",
              },
              {
                title: "Conforto sem apertar e sem marcar",
                description: "Tecido que acompanha o movimento sem enrolar e deixar marcas na pele",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-9ar1Gvf7AOgynfs54J7kheSGIF9St4.svg",
              },
              {
                title: "Liberdade para treinar com autoestima",
                description: "Segurança total para focar no treino sem preocupações",
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-6lKSObOR6GBSAkRCAOrsDpCvcxXCQK.svg",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <Image
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full md:w-auto text-center"
            >
              GARANTIR MINHA PROMO
            </button>
          </div>
        </div>
      </section>

      {/* Visual Proof Gallery */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Veja como fica no corpo durante o treino</h2>

          <div className="relative mb-8">
            <div className="max-w-xs mx-auto">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jessicanmpersonal_1748806178_3645572231838676345_285550507-y7EpL82DzANESQUwQadeZM31hKCom4.mp4"
                className="w-full aspect-[9/16] object-cover rounded-lg mb-4"
                controls
                preload="metadata"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FV%201-PUXV9ub46zQ0WuH0RjeBAdbSoEH6x9.png"
              >
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="max-w-xs mx-auto">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auramar.modapraia_1751889600_3671438606644916811_27455560408-ueIcZuSCUWOrfHFkzGtlGSB90ewbu3.mp4"
                className="w-full aspect-[9/16] object-cover rounded-lg"
                controls
                preload="metadata"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FV%202-yUSle1N36A3oc2lMTm795aJQqWB0ch.png"
              >
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="max-w-xs mx-auto">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2726-QSjqaj2JJgsuvTng38aoLqDUx9XlAX.MOV"
                className="w-full aspect-[9/16] object-cover rounded-lg"
                controls
                preload="metadata"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FV%203-XTXepi4egBRNvsu8nmdWezciCTAePK.png"
              >
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
            <p className="text-gray-600 mt-4">Veja nossas clientes usando para treinar</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Elas já experimentaram e aprovaram</h2>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-600">4.9</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <span className="text-gray-700">(1076 mulheres já compraram)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {testimonials.slice(3).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full md:w-auto text-center"
            >
              GARANTIR MINHA PROMO
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* ================ NOVA SEÇÃO DE AVISO IMPORTANTE ================ */}
      {/* ================================================================== */}
      <section className="px-4 py-8 bg-yellow-50 border-t border-b border-yellow-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <AlertTriangle className="w-12 h-12 md:w-10 md:h-10 text-yellow-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-gray-900">Atenção para o Brinde!</h3>
              <p className="text-gray-700 mt-1 max-w-2xl mx-auto">
                Para garantir seu conjunto grátis, lembre-se de <strong>selecionar o brinde no checkout</strong> antes de finalizar a compra. É super simples!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ================================================================== */}
      {/* =================== FIM DA NOVA SEÇÃO DE AVISO =================== */}
      {/* ================================================================== */}

      {/* Irresistible Offer */}
      <section className="px-4 py-12" id="oferta-especial-auramar">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4"> OFERTA ESPECIAL HOJE!</h2>
            <div className="text-xl md:text-2xl mb-4">
              <span className="text-gray-600">Você paga:</span>
              <span className="font-bold text-green-600 mx-2">R$129,90</span>
              <span className="text-gray-600">→ Recebe:</span>
              <span className="font-bold mx-2">2 conjuntos</span>
              <span className="text-gray-600">(Verde + Marrom)</span>
            </div>
            <div className="text-lg text-gray-600 mb-4">
              Valor real do combo: <span className="font-bold line-through text-black">R$259,80</span> — Você economiza:{" "}
              <span className="font-bold text-red-600">R$139,90</span>
            </div>
          </div>

          <div className="text-center mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pre%C3%A7o_auramar-3uy0jHscZ5xktlJ66CeVtzYdTJevCe.png"
              alt="Promoção - 2 conjuntos por R$129,90"
              width={600}
              height={400}
              className="mx-auto rounded-lg"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>

          <div className="text-center mb-6">
            <YampiBuyButton />
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Escolha o tamanho certo para você</h2>

          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={sizeChartImages[currentSizeChart] || "/placeholder.svg"}
                  alt={`Tabela de medidas ${currentSizeChart + 1}`}
                  width={800}
                  height={600}
                  className="w-full rounded-lg"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>

              <button
                onClick={prevSizeChart}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-2 rounded-full shadow-lg transition-colors z-10"
              >
                <ChevronLeft
                  className={`w-6 h-6 md:w-5 md:h-5 transition-transform ${openFaq === -1 ? "rotate-90" : ""}`}
                />
              </button>

              <button
                onClick={nextSizeChart}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 md:p-2 rounded-full shadow-lg transition-colors z-10"
              >
                <ChevronRight
                  className={`w-6 h-6 md:w-5 md:h-5 transition-transform ${openFaq === -1 ? "rotate-90" : ""}`}
                />
              </button>

              <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-3 md:gap-2">
                {sizeChartImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSizeChart(index)}
                    className={`w-3 h-3 md:w-2 md:h-2 rounded-full transition-colors ${
                      index === currentSizeChart ? "bg-gray-800" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-8">
            <button
              onClick={() => setOpenFaq(openFaq === -1 ? null : -1)}
              className="flex items-center justify-between w-full text-left font-semibold"
            >
              <span>Como medir em casa</span>
              <ChevronRight className={`w-5 h-5 transition-transform ${openFaq === -1 ? "rotate-90" : ""}`} />
            </button>
            {openFaq === -1 && (
              <div className="mt-4 text-gray-600 space-y-2">
                <p>
                  <strong>1. Busto:</strong> Meça na parte mais volumosa do seio, com os braços relaxados.
                </p>
                <p>
                  <strong>2. Cintura:</strong> Meça na parte mais fina do tronco, geralmente acima do umbigo.
                </p>
                <p>
                  <strong>3. Quadril:</strong> Meça na parte mais larga do quadril, passando pelo bumbum.
                </p>
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full md:w-auto text-center"
            >
              GARANTIR MINHA PROMO
            </button>
          </div>
        </div>
      </section>

      {/* Guarantee & Trust */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Compra segura, troca fácil</h2>

          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-6 text-pretty">
              Se o conjunto não te deixar segura e confortável, você tem até 7 dias para trocar ou devolver — sem
              complicação.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="text-sm">Checkout Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-6 h-6 text-blue-600" />
                <span className="text-sm">7 dias para trocar</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-6 h-6 text-purple-600" />
                <span className="text-sm">Entrega garantida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>

          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex items-center justify-between w-full text-left font-semibold"
                >
                  <span>{faq.question}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${openFaq === index ? "rotate-90" : ""}`} />
                </button>
                {openFaq === index && <p className="mt-4 text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={scrollToCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-full md:w-auto text-center"
            >
              GARANTIR MINHA PROMO
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sem%20nome-QRedQRkh1Vcazmyv779FeQwUkh0Rgx.svg"
            alt="Logo Auramar"
            width={120}
            height={32}
            className="h-8 mx-auto mb-4"
          />
          <p className="text-sm text-gray-400 mb-2">Instagram: @auramar.modapraia</p>
          <p className="text-sm text-gray-400">Contato: contato@auramarmodapraia.com.br | (21) 96437-0270</p>
        </div>
      </footer>
    </div>
  )
}
