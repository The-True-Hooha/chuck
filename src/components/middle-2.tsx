import { HorizontalWrapper } from "@/lib/horizontalScroll";
import ImageCard from "@/lib/image-card";
import { cards } from "@/utils/card";

export function IMiddle() {
    return (
      <div className="pt-[30px] bg-[#5BA7FF]">
        <HorizontalWrapper height="40rem" direction={1400}>
          <div
            style={{ right: 0 }}
            className="absolute grid gap-[4rem] grid-cols-5 justify-center items-center"
          >
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