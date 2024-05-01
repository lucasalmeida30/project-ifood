import Image from "next/image";
import CategoryList from "./_components/categoryList";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/productList";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "./_lib/prisma";

export default async function Home() {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <div>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="pt-5">
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

      <div className="pb-3 pt-5">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
      </div>

      <ProductList products={products} />
    </div>
  );
}
