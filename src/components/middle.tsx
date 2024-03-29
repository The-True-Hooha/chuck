import { HorizontalWrapper } from "@/lib/horizontalScroll";
import { cards } from '../utils/card';
import ImageCard from "@/lib/image-card";


export function MiddleSection() {
    return (
      <div className="pt-[30px] bg-[#5BA7FF]">
        <HorizontalWrapper height="40rem" direction={-1400}>
          <div className="absolute grid gap-[4rem] grid-cols-5 justify-center items-center">
            {cards.map((card, index) => {
              return (
                <ImageCard
                  key={index}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              );
            })}
          </div>
        </HorizontalWrapper>
      </div>
    );
}