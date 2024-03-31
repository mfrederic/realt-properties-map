import { Carousel } from "@mantine/carousel";
import { Grid, Image } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";

export function PropertyCarousel({
  imageLink,
  fullName,
}: {
  imageLink: string[];
  fullName: string;
}) {
  const { ref, height } = useElementSize();

  return (
    <>
      {
        imageLink.length > 0 &&
        <Grid.Col span={12}>
          <Carousel height={height ?? 290}>
            {
              imageLink.map((link, index) => (
                <Carousel.Slide key={index}>
                  <Image fit="contain" src={link} alt={`${fullName} [picture ${index}]`} ref={index === 0 ? ref : undefined} />
                </Carousel.Slide>
              ))
            }
          </Carousel>
        </Grid.Col>
      }
    </>
  )
}