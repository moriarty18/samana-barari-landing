'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Instagram, 
  Phone, 
  MapPin, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Waves, 
  Dumbbell, 
  Car, 
  Shield, 
  Star,
  Clock,
  Users,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  // Функции для отслеживания событий в Яндекс.Метрике
  const trackWhatsAppClick = (location: string) => {
    // @ts-expect-error - Yandex Metrika global variable
    if (typeof ym !== 'undefined') {
      // @ts-expect-error - Yandex Metrika reachGoal method
      ym(103733977, 'reachGoal', 'whatsapp_click', {
        location: location
      });
    }
    console.log(`WhatsApp click tracked: ${location}`);
  };

  const trackInstagramClick = (location: string) => {
    // @ts-expect-error - Yandex Metrika global variable
    if (typeof ym !== 'undefined') {
      // @ts-expect-error - Yandex Metrika reachGoal method
      ym(103733977, 'reachGoal', 'instagram_click', {
        location: location
      });
    }
    console.log(`Instagram click tracked: ${location}`);
  };

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const galleryImages = [
    {
      src: '/images/apartment03.jpg',
      alt: 'Роскошная гостиная с современным дизайном'
    },
    {
      src: '/images/bedroom01.jpg',
      alt: 'Спальня с панорамными окнами и видом на город'
    },
    {
      src: '/images/bathroom(1).jpg',
      alt: 'Премиальная ванная комната с мраморной отделкой'
    },
    {
      src: '/images/gym01.jpg',
      alt: 'Современный фитнес-центр с видом на Дубай'
    }
  ]

  const features = [
    {
      icon: <Waves className="w-5 h-5 text-blue-500" />,
      title: "Бассейн в каждой квартире",
      description: "Собственный бассейн на балконе"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-green-500" />,
      title: "Рассрочка на 8 лет",
      description: "$2,200 в месяц"
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
      title: "Доходность 3-5%",
      description: "Стабильный доход от аренды"
    },
    {
      icon: <Calendar className="w-5 h-5 text-orange-500" />,
      title: "Сдача Q2 2027",
      description: "Гарантированные сроки"
    }
  ]

  const amenities = [
    { icon: <Waves className="w-4 h-4" />, text: "Бассейн на крыше" },
    { icon: <Dumbbell className="w-4 h-4" />, text: "Фитнес-центр" },
    { icon: <Car className="w-4 h-4" />, text: "Парковка" },
    { icon: <Shield className="w-4 h-4" />, text: "24/7 охрана" },
    { icon: <MapPin className="w-4 h-4" />, text: "Центр Дубая" },
    { icon: <Star className="w-4 h-4" />, text: "Премиум отделка" }
  ]

  const whatsappUrl = "https://wa.me/971509429954?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D0%BC%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20%D0%BD%D0%B5%D0%B4%D0%B2%D0%B8%D0%B6%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D1%8C%20%D0%B2%20%D0%94%D1%83%D0%B1%D0%B0%D0%B5"
  const instagramUrl = "https://www.instagram.com/meterkulova_madina"

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* Hero Section - Mobile First */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/images/apartment03.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-3 max-w-sm mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold mb-3 leading-tight"
          >
            $2,200 в месяц<br />за квартиру в Дубае?
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm mb-6 opacity-90"
          >
            Да, это возможно — с надёжным застройщиком Samana
          </motion.p>

          {/* Compact Info Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/20"
          >
            <h2 className="text-lg font-bold mb-3">Samana Barari Heights</h2>
            
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-green-400 font-bold text-base">AED 804,000</div>
                <div className="opacity-80">($218,923)</div>
              </div>
              <div>
                <div className="text-blue-400 font-bold text-base">Q2 2027</div>
                <div className="opacity-80">Сдача объекта</div>
              </div>
              <div>
                <div className="text-purple-400 font-bold text-base">8 лет</div>
                <div className="opacity-80">Рассрочка</div>
              </div>
              <div>
                <div className="text-orange-400 font-bold text-base">3-5%</div>
                <div className="opacity-80">Доходность</div>
              </div>
            </div>
          </motion.div>

          {/* Compact Urgency Timer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-red-500 rounded-lg p-3 mb-4"
          >
            <div className="text-xs mb-2 flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" />
              Предложение заканчивается через:
            </div>
            <div className="flex justify-center gap-2 text-sm">
              <div className="bg-white/20 rounded px-2 py-1">
                <div className="font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-80">часов</div>
              </div>
              <div className="bg-white/20 rounded px-2 py-1">
                <div className="font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-80">минут</div>
              </div>
              <div className="bg-white/20 rounded px-2 py-1">
                <div className="font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-80">секунд</div>
              </div>
            </div>
          </motion.div>

          {/* Limited Availability */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-orange-500 rounded-lg p-3 mb-6"
          >
            <div className="text-xs flex items-center justify-center gap-1">
              <Users className="w-3 h-3" />
              Осталось всего 16 квартир по специальной цене
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <div className="space-y-2">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('hero_section')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Написать в WhatsApp
            </a>
            
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackInstagramClick('hero_section')}
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Features Section - Compact Mobile Grid */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-sm mx-auto px-3">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Почему Samana Barari?
            </h2>
            <p className="text-sm text-gray-600">
              Уникальный проект с выгодными условиями
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="mb-2">{feature.icon}</div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Gallery Slider */}
      <section className="py-8">
        <div className="max-w-sm mx-auto px-3">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Галерея проекта
            </h2>
            <p className="text-sm text-gray-600">
              Роскошные интерьеры
            </p>
          </div>
          
          <div className="relative">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img 
                src={galleryImages[currentImageIndex].src} 
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Image Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white text-xs font-medium">
                  {galleryImages[currentImageIndex].alt}
                </p>
              </div>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-1 mt-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Thumbnail Navigation */}
            <div className="grid grid-cols-4 gap-1 mt-3">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-12 rounded overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators - Compact */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-sm mx-auto px-3">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Почему нам доверяют
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <Award className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-900">Лицензированный застройщик</div>
              <div className="text-xs text-gray-700">Официальная регистрация в ОАЭ</div>
            </div>
            
            <div className="text-center">
              <Shield className="w-6 h-6 text-green-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-900">Гарантия качества</div>
              <div className="text-xs text-gray-700">Сдача в срок</div>
            </div>
            
            <div className="text-center">
              <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-900">500+ клиентов</div>
              <div className="text-xs text-gray-700">Довольных инвесторов</div>
            </div>
            
            <div className="text-center">
              <TrendingUp className="w-6 h-6 text-purple-500 mx-auto mb-2" />
              <div className="text-sm font-semibold text-gray-900">Рост стоимости</div>
              <div className="text-xs text-gray-700">Стабильный рост цен</div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities - Compact Grid */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="max-w-sm mx-auto px-3">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">
              Удобства
            </h2>
            <p className="text-sm text-gray-300">
              Всё для комфортной жизни
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 rounded-lg p-2">
                <div className="text-blue-400">{amenity.icon}</div>
                <span className="text-xs">{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Broker Section - Compact */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-sm mx-auto px-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src="/images/image.png" 
                  alt="Мадина Метеркулова"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Ваш консультант
                  </h3>
                  <p className="text-sm text-gray-600">
                    Мадина Метеркулова
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Опытный брокер по недвижимости в Дубае. Поможет выбрать лучший вариант инвестиций.
              </p>
              
              <div className="space-y-2">
                <a 
                  href="tel:+971509429954"
                  className="flex items-center gap-2 text-sm text-blue-600"
                >
                  <Phone className="w-4 h-4" />
                  +971 50 942 99 54
                </a>
                
                <a 
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackInstagramClick('broker_section')}
                  className="flex items-center gap-2 text-sm text-purple-600"
                >
                  <Instagram className="w-4 h-4" />
                  @meterkulova_madina
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-sm mx-auto px-3 text-center">
          <h2 className="text-xl font-bold mb-4">
            Не упустите возможность!
          </h2>
          <p className="text-sm mb-6 opacity-90">
            Количество квартир ограничено. Свяжитесь с нами сегодня.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6 border border-white/20">
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-bold text-lg">$2,200</div>
                <div className="text-xs opacity-80">в месяц</div>
              </div>
              <div>
                <div className="font-bold text-lg">8 лет</div>
                <div className="text-xs opacity-80">рассрочка</div>
              </div>
              <div>
                <div className="font-bold text-lg">3-5%</div>
                <div className="text-xs opacity-80">доходность</div>
              </div>
            </div>
          </div>
          
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('final_cta')}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Получить консультацию
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-sm mx-auto px-3">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Samana Barari Heights</h3>
            <p className="text-sm text-gray-400 mb-4">
              Инвестиции в недвижимость Дубая
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('footer')}
                className="text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackInstagramClick('footer')}
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800 text-gray-500 text-xs">
              <p>&copy; 2024 Samana Barari Heights. Все права защищены.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick('fixed_button')}
        className="fixed bottom-20 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </div>
  )
}
