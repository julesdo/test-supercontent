import getBillboard from "@/actions/get-billboard";
import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { storeId } from "@/lib/utils";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true }, storeId);
  const billboards = await getBillboards(storeId);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboards[0]}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList storeId={storeId} title="Featured Products" items={products} />
        </div>
        <Button className="bg-primary">Shop All</Button>
      </div>
    </Container>
  )
};

export default HomePage;
