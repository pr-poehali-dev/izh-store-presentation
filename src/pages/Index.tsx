import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Спортивная куртка',
      category: 'sport',
      price: 3990,
      image: 'https://cdn.poehali.dev/projects/452ec4ea-596b-4116-beb8-0b3f26488e92/files/4aeb64a8-6fcd-4f74-8967-6c1fe8a744c1.jpg',
      badge: 'ХИТ'
    },
    {
      id: 2,
      name: 'Тренировочные штаны',
      category: 'sport',
      price: 2490,
      image: 'https://cdn.poehali.dev/projects/452ec4ea-596b-4116-beb8-0b3f26488e92/files/4aeb64a8-6fcd-4f74-8967-6c1fe8a744c1.jpg',
      badge: null
    },
    {
      id: 3,
      name: 'Футболка базовая',
      category: 'casual',
      price: 990,
      image: 'https://cdn.poehali.dev/projects/452ec4ea-596b-4116-beb8-0b3f26488e92/files/7e92470d-dee4-4c05-b7a6-133cf2b9809b.jpg',
      badge: null
    },
    {
      id: 4,
      name: 'Джинсы классика',
      category: 'casual',
      price: 3490,
      image: 'https://cdn.poehali.dev/projects/452ec4ea-596b-4116-beb8-0b3f26488e92/files/7e92470d-dee4-4c05-b7a6-133cf2b9809b.jpg',
      badge: 'НОВИНКА'
    },
    {
      id: 5,
      name: 'Худи спортивное',
      category: 'sport',
      price: 2990,
      image: 'https://cdn.poehali.dev/projects/452ec4ea-596b-4116-beb8-0b3f26488e92/files/4aeb64a8-6fcd-4f74-8967-6c1fe8a744c1.jpg',
      badge: null
    },
    {
      id: 6,
      name: 'Рубашка повседневная',
      category: 'casual',
      price: 2790,
      image: 'https://cdn.poehali.dev/projects/452ec4ea-596b-4116-beb8-0b3f26488e92/files/7e92470d-dee4-4c05-b7a6-133cf2b9809b.jpg',
      badge: null
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">РОЛЬ</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="gap-2">
            <Icon name="ShoppingCart" size={18} />
            Корзина
          </Button>
        </div>
      </header>

      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/452ec4ea-596b-4116-beb8-0b3f26488e92/files/7cb79a2e-ad5d-4f80-93fd-af6a285c6bbe.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Стиль для активной жизни
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Качественная одежда для спорта и повседневной жизни в Ижевске
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                Смотреть каталог
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наш каталог</h2>
            <p className="text-xl text-muted-foreground">Выберите категорию одежды</p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <Button 
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('all')}
              size="lg"
            >
              Все товары
            </Button>
            <Button 
              variant={activeCategory === 'sport' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('sport')}
              size="lg"
            >
              <Icon name="Dumbbell" size={20} className="mr-2" />
              Спортивное
            </Button>
            <Button 
              variant={activeCategory === 'casual' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('casual')}
              size="lg"
            >
              <Icon name="Shirt" size={20} className="mr-2" />
              Повседневное
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price} ₽</span>
                    <Button className="gap-2">
                      <Icon name="ShoppingBag" size={18} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="flex justify-center mb-4">
                <Icon name="Truck" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="opacity-90">По всему Ижевску за 1-2 дня</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex justify-center mb-4">
                <Icon name="Shield" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="opacity-90">Проверенные бренды и материалы</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex justify-center mb-4">
                <Icon name="RotateCcw" size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Легкий возврат</h3>
              <p className="opacity-90">14 дней на возврат товара</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">РОЛЬ</h3>
              <p className="opacity-80">Магазин качественной одежды в Ижевске</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 opacity-80">
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  г. Ижевск
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (XXX) XXX-XX-XX
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@rol-izh.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Часы работы</h4>
              <p className="opacity-80">Пн-Пт: 10:00 - 20:00</p>
              <p className="opacity-80">Сб-Вс: 10:00 - 18:00</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-60">
            <p>© 2024 РОЛЬ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
