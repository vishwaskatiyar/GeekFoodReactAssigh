import Navigation from "./Component/Navigation";
import MainSection from "./Component/MainSection";
import Card from "./Component/Card";
import Footer from "./Component/Fotter";

const cardData = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1618416682145-2fe1aaa6bd40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8fHww",
    title: "Spicy Chicken Wings",
    description:
      "Crispy chicken wings tossed in a spicy sauce, served with blue cheese dressing and celery sticks.",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    title: "Gourmet Burger",
    description:
      "Juicy beef patty topped with melted cheddar cheese, crispy bacon, lettuce, tomato, and caramelized onions, served with fries.",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFyZ3JpdGElMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Margherita Pizza",
    description:
      "Classic pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil.",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1532939624-3af1308db9a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    title: "Sushi Platter",
    description:
      "Assortment of fresh sushi rolls including salmon, tuna, and California rolls, served with pickled ginger and wasabi.",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1c2hpJTIwcGxhdHRlcnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Vegan Buddha Bowl",
    description:
      "Healthy and colorful bowl filled with quinoa, roasted vegetables, avocado slices, chickpeas, and a tahini dressing.",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1508615263227-c5d58c1e5821?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJicSUyMHJpYnN8ZW58MHx8MHx8fDA%3D",
    title: "BBQ Ribs",
    description:
      "Tender and succulent ribs slathered in smoky BBQ sauce, served with coleslaw and cornbread.",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2hyaW1wJTIwUGFzdGF8ZW58MHx8MHx8fDA%3D",
    title: "Shrimp Pasta",
    description:
      "Delicious pasta tossed with garlic butter shrimp, cherry tomatoes, spinach, and Parmesan cheese.",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1481391032119-d89fee407e44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENob2NvbGF0ZSUyMEZvbmR1ZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Chocolate Fondue",
    description:
      "Decadent chocolate fondue served with fresh strawberries, bananas, marshmallows, and pound cake for dipping.",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1501959915551-4e8d30928317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    title: "Seafood Paella",
    description:
      "Traditional Spanish paella loaded with shrimp, mussels, clams, and chorizo, flavored with saffron and served with lemon wedges.",
  },
];

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navigation />
      <MainSection />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
