import Image from "next/image";
import CategoryList from "./_components/categoryList";
import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="pt-6">
        <CategoryList />
      </div>

      <div className="pt-2">
        <Image
          src="/Banner-promo01.png"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-full object-contain"
          quality={100}
        />
      </div>
    </div>
  );
}
