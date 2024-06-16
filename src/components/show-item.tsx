import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

async function getData() {
  const res = await fetch(
    'http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10'
  );
  const data = await res.json();
  const items = data.Items;
  console.log(items);
  return items;
}

export async function Items() {
  const results = await getData();
  return (
    <Carousel className="container mx-auto">
      <CarouselContent className="-ml-1">
        {results.map((item, index) => (
          <CarouselItem
            key={index}
            img={item.ImageUrl}
            name={item.Name}
            pop={item.IsPopular}
            rec={item.IsRecommended}
            className="pl- sm:basis-1/3 md:basis-1/3 lg:basis-1/5"
          >
            <div className="p-1">
              <Card className="border-none shadow-none">
                <CardContent className="flex aspect-square items-center justify-center">
                  {
                    <Image
                      className="rounded-xl shadow-lg shadow-gray-600 object-cover w-[200px] h-[260px]"
                      src={item.ImageUrl}
                      width={200}
                      height={260}
                      alt="Profile"
                    />
                  }
                </CardContent>
                <CardFooter className=" grid justify-center items-center pt-1">
                  <p>{item.Name}</p>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
