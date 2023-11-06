import cn from "classnames";
import { Suptitle, Text } from "@/app/components/ui";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export interface iMapProjects {
  className?: string;
}

export const MapProjects = ({ className }: iMapProjects) => {
  return (
    <section className={cn(className)}>
      <div className="container">
        <div className="grid grid-cols-[280rem_980rem] gap-[280rem]">
          <Suptitle text="Карта проектов" />
          <Text
            size="md"
            text="На сегодняшний день география деятельности группы компаний \n «Стройград» охватывает две чрезвычайно важные для экономики страны области — Краснодарский и Ставропольский края."
          />
        </div>
      </div>

      <div className="mt-[100rem] h-[920rem] bg-grayLight">
      <YMaps>
              <Map
                instanceRef={(ref) => {
                  ref && ref.behaviors.disable("scrollZoom");
                }}
                style={{
                  height: "100%",
                  filter: "grayscale(1)",
                }}
                width="100%"
                defaultState={{
                  center: [55.569754, 37.132895],
                  zoom: 10,
                }}
              >
                <Placemark geometry={[55.569754, 37.132895]} />
              </Map>
            </YMaps>
          </div>
      
    </section>
  );
};
