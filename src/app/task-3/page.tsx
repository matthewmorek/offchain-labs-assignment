import type { Metadata } from "next";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { NewsletterSignup } from "@/components/newsletter-signup";

export const metadata: Metadata = {
  title: "Task #3",
};

const navigationMenus = [
  {
    label: "Science",
    items: ["Chemistry", "Earth", "Physics", "Genetics", "Space", "Medicine"],
  },
  {
    label: "Politics",
    items: ["China", "USA", "Europe", "Brexit", "Iraq", "South America"],
  },
  {
    label: "Entertainment",
    items: ["Celebrities", "Movies", "Music", "Theatre", "TV Shows", "Choreography"],
  },
];

export default function Task3Page() {
  return (
    <div>
      <header className="bg-background sticky top-0 flex items-center justify-between p-4 shadow">
        <a href="#" className="logo"></a>

        <div className="flex gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationMenus.map((menu) => (
                <NavigationMenuItem key={menu.label}>
                  <NavigationMenuTrigger>{menu.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-96 grid-cols-2 gap-1 p-2">
                      {menu.items.map((item) => (
                        <li key={item}>
                          <NavigationMenuLink href="#">{item}</NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    <div className="p-2">
                      <NavigationMenuLink
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Read more....
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="default">Log In</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </header>

      <main className="flex flex-col gap-4 lg:gap-12">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1493236272120-200db0da1927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
            className="h-96 w-full overflow-hidden object-cover"
          />
        </div>
        <article className="prose prose-lg mx-auto">
          <h1>Why you always have room for dessert</h1>
          <p>
            Most of us can testify to it. After two or three heaping portions of turkey, stuffing,
            mashed potatoes and gravy, cranberry sauce, sweet potatoes and Waldorf salad you’re
            bursting at the seams. You’re so sated that you had to discretely place a crumpled
            napkin over that uneaten turkey wing on your plate.
          </p>
          <p>
            But when panna cotta or the plum pudding arrives at the table you miraculously have room
            for that too.
          </p>
          <p>This wondrous dessert miracle has now been given a physiological explanation.</p>
          <p>
            The sugar in sweet foods stimulates a reflex that expands your stomach, writes senior
            researcher Arnold Berstad and assistant doctor Jørgen Valeur from Lovisenberg Diakonale
            Hospital in the latest issue of The Journal of the Norwegian Medical Association.
          </p>
          <p>
            “If you eat dessert after you’re actually feeling stuffed you’re tricking your normal
            sensation of being full,” they argue.
          </p>
          <h3>Your stomach is flexible</h3>
          <p>
            The stomach is a flexible organ. When you consume a large meal the walls of the upper
            section of the stomach relax to make room for the food.
          </p>
          <p>
            How full you feel is closely associated with the pressure inside the stomach, which in
            turn is linked to how much the stomach has expanded to tackle the food.
          </p>
          <p>
            "It appears that three factors collaborate in triggering the relaxing reflex,” explains
            Berstad.
          </p>
          <p>
            First of all, the sight and smell of food and the process of chewing and swallowing it
            have an effect. Secondly, the pressure of food against the stomach has its important
            impact. And thirdly, the duodenum “tastes” the components of the food.
          </p>
          <h3>Relaxing with sugar</h3>
          <p>
            All this information goes to the brainstem through particular nerves. A message is sent
            out again from the core of the brainstem which oversees the relaxation of muscles in the
            stomach wall, according to Berstad.
          </p>
          <p>And so to dessert:</p>
          <p>Glucose – or sugar if you will – stimulates this relaxation reflex.</p>
          <p>
            “In this way it can decrease the pressure on the stomach and reduce the sensation of
            being full. A sweet dessert allows the stomach to make room for more food,” the
            researchers write in the medical journal.
          </p>
          <p>
            How comfortable it actually is to bamboozle your stomach with sugar and refill it to the
            pain threshold with crème caramel is another matter. The optimal use of dessert is
            really a question of moderation, according to the researchers.
          </p>
          <h3>Less full with just a taste</h3>
          <p>
            The best thing to do is to limit your consumption of dessert to just a taste of
            something sweet. This won’t split your gut, and at the same time the small dose of sugar
            will trigger the dessert expansion. The result will probably be that you feel a little
            less full after your meal.
          </p>
          <p>
            So a single bite of something sweet will actually make you more comfortable after a
            feast than if you had passed it by. But the exact balance between sugar abstention and
            too much of a good thing can be hard to achieve.
          </p>
          <p>
            “The problem is that you don’t know when to stop eating dessert. The brakes on
            carbohydrate consumption are five metres further down, at the lower end of the small
            intestine,” says Berstad.
          </p>
          <p>
            “Fat, however, is absorbed higher up in the system and triggers a high-placed brake. It
            makes you quickly full. If you eat one spoon too much of creamy gravy you risk getting
            nauseous and vomiting.
          </p>
          <p>
            "This surely helps enable many people to eat fatty foods without gaining weight,"
            concludes Berstad.
          </p>
          <a
            href="https://sciencenorway.no/foods-forskningno-norway/why-you-always-have-room-for-dessert/1413209"
            target="_blank"
          >
            Article from sciencenorway
          </a>
          <NewsletterSignup />
        </article>
      </main>

      <footer className="mt-4 bg-black px-4 py-2 text-right text-xs text-white lg:mt-8">
        &copy;2020{" "}
        <a href="https://medium.com/@fionnachan" target="_blank">
          Fionna Chan
        </a>
      </footer>
    </div>
  );
}
