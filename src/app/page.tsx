import MovieRow from "@/feature/home/components/MovieRow";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const movies = [
  {
    "id": 1045938,
    "title": "G20",
    "overview": "After the G20 Summit is overtaken by terrorists, President Danielle Sutton must bring all her statecraft and military experience to defend her family and her fellow leaders.",
    "releaseDate": "2025-04-09",
    "posterUrl": "https://image.tmdb.org/t/p/w500/tSee9gbGLfqwvjoWoCQgRZ4Sfky.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/k32XKMjmXMGeydykD32jfER3BVI.jpg",
    "voteAverage": 6.538
  },
  {
    "id": 1195506,
    "title": "Novocaine",
    "overview": "When the girl of his dreams is kidnapped, everyman Nate turns his inability to feel pain into an unexpected strength in his fight to get her back.",
    "releaseDate": "2025-03-12",
    "posterUrl": "https://image.tmdb.org/t/p/w500/xmMHGz9dVRaMY6rRAlEX4W0Wdhm.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/sNx1A3822kEbqeUxvo5A08o4N7o.jpg",
    "voteAverage": 6.857
  },
  {
    "id": 1293286,
    "title": "Gunslingers",
    "overview": "When the most wanted man in America surfaces in a small Kentucky town, his violent history -- and a blood-thirsty mob seeking vengeance and a king’s ransom -- soon follow. As brothers face off against one another and bullets tear the town to shreds, this lightning-fast gunslinger makes his enemies pay the ultimate price for their greed.",
    "releaseDate": "2025-04-11",
    "posterUrl": "https://image.tmdb.org/t/p/w500/O7REXWPANWXvX2jhQydHjAq2DV.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/zksO4lVnRKRoaSYzh2EDn2Z3Pel.jpg",
    "voteAverage": 6.765
  },
  {
    "id": 822119,
    "title": "Captain America: Brave New World",
    "overview": "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
    "releaseDate": "2025-02-12",
    "posterUrl": "https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/ce3prrjh9ZehEl5JinNqr4jIeaB.jpg",
    "voteAverage": 6.139
  },
  {
    "id": 1197306,
    "title": "A Working Man",
    "overview": "Levon Cade left behind a decorated military career in the black ops to live a simple life working construction. But when his boss's daughter, who is like family to him, is taken by human traffickers, his search to bring her home uncovers a world of corruption far greater than he ever could have imagined.",
    "releaseDate": "2025-03-26",
    "posterUrl": "https://image.tmdb.org/t/p/w500/6FRFIogh3zFnVWn7Z6zcYnIbRcX.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/fTrQsdMS2MUw00RnzH0r3JWHhts.jpg",
    "voteAverage": 6.4
  },
  {
    "id": 1125899,
    "title": "Cleaner",
    "overview": "When a group of radical activists take over an energy company's annual gala, seizing 300 hostages, an ex-soldier turned window cleaner suspended 50 storeys up on the outside of the building must save those trapped inside, including her younger brother.",
    "releaseDate": "2025-02-19",
    "posterUrl": "https://image.tmdb.org/t/p/w500/mwzDApMZAGeYCEVjhegKvCzDX0W.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/gsQJOfeW45KLiQeEIsom94QPQwb.jpg",
    "voteAverage": 6.561
  },
  {
    "id": 1229730,
    "title": "Carjackers",
    "overview": "By day, they're invisible—valets, hostesses, and bartenders at a luxury hotel. By night, they're the Carjackers, a crew of skilled drivers who track and rob wealthy clients on the road. As they plan their ultimate heist, the hotel director hires a ruthless hitman, to stop them at all costs. With danger closing in, can Nora, Zoe, Steve, and Prestance pull off their biggest score yet?",
    "releaseDate": "2025-03-27",
    "posterUrl": "https://image.tmdb.org/t/p/w500/wbkPMTz2vVai7Ujyp0ag7AM9SrO.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/is9bmV6uYXu7LjZGJczxrjJDlv8.jpg",
    "voteAverage": 6.286
  },
  {
    "id": 1195585,
    "title": "The Hard Hit",
    "overview": "An Interpol agent hunting the head of a global crime syndicate tracks his target to Las Vegas, but when the criminal organization kills his wife and daughter, he goes above the law to get his revenge.",
    "releaseDate": "2023-10-20",
    "posterUrl": "https://image.tmdb.org/t/p/w500/whkFbOZTamHeugEG95jvQehSzAH.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/fzv87rT0jlAkh5Uf9PpIlUj6Nj8.jpg",
    "voteAverage": 7.4
  },
  {
    "id": 1195430,
    "title": "Deva",
    "overview": "Dev Ambre, a ruthless cop, loses his memory in an accident just after he has finished solving a murder case and now has to reinvestigate it while keeping his memory loss a secret from everyone except DCP Farhan Khan.",
    "releaseDate": "2025-01-31",
    "posterUrl": "https://image.tmdb.org/t/p/w500/qxtXzAlEPxmjHILU8k8wduvBSdo.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/lqHt4icP1GTaNBeVTxTrwTZdoAW.jpg",
    "voteAverage": 6.036
  },
  {
    "id": 1312833,
    "title": "A Knight's War",
    "overview": "A fearless knight braves a deadly realm to save the Chosen One’s soul. Facing witches, demons, and brutal foes, he discovers her return could ignite chaos and doom humanity.",
    "releaseDate": "2025-02-07",
    "posterUrl": "https://image.tmdb.org/t/p/w500/janjdSMrTRGtPrI1p9uOX66jv7x.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/cJCW78MZsyyXBKHo4V25WctK00V.jpg",
    "voteAverage": 5.5
  },
  {
    "id": 1353117,
    "title": "Home Sweet Home: Rebirth",
    "overview": "When a city is overrun with a demonically-possessed crowd, a cop must find the source of evil to save his family.",
    "releaseDate": "2025-03-20",
    "posterUrl": "https://image.tmdb.org/t/p/w500/9rCBCm9cyI4JfLEhx3EncyncMR3.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/wmqpE7p2dUCEgCnovuovoNXaCXr.jpg",
    "voteAverage": 7.06
  },
  {
    "id": 1373723,
    "title": "The Codes of War",
    "overview": "War stories about family, ethics and honor include the true story of two U.S. Marines who in a span of six seconds, must stand their ground to stop a suicide truck bomb, a Navy Corpsman who attempts to hold on to his humanity, and a WW2 soldier who gets separated from his squad and is forced to re-evaluate his code.",
    "releaseDate": "2025-03-20",
    "posterUrl": "https://image.tmdb.org/t/p/w500/oXeiQAfRK90pxxhP5iKPXQqAIN1.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/ibF5XVxTzf1ayzZrmiJqgeQ39Qk.jpg",
    "voteAverage": 6.3
  },
  {
    "id": 939243,
    "title": "Sonic the Hedgehog 3",
    "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
    "releaseDate": "2024-12-19",
    "posterUrl": "https://image.tmdb.org/t/p/w500/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
    "voteAverage": 7.738
  },
  {
    "id": 1261050,
    "title": "The Quiet Ones",
    "overview": "In 2008, a group of men from Denmark and across Europe pull off the biggest heist of all time on Danish soil. Kasper, a boxer with few chances left in life, is offered the opportunity to plan the robbery by its foreign initiators.",
    "releaseDate": "2024-10-31",
    "posterUrl": "https://image.tmdb.org/t/p/w500/7NLY1jNwtZX1yVzwVoBeAhaBE8i.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/9OO6I25MHhCDd0XwNk4oZl0fpwB.jpg",
    "voteAverage": 5.778
  },
  {
    "id": 1087891,
    "title": "The Amateur",
    "overview": "After his life is turned upside down when his wife is killed in a London terrorist attack, a brilliant but introverted CIA decoder takes matters into his own hands when his supervisors refuse to take action.",
    "releaseDate": "2025-04-09",
    "posterUrl": "https://image.tmdb.org/t/p/w500/SNEoUInCa5fAgwuEBMIMBGvkkh.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/yMoEGh8kDEwqsoJumnQLwFJ9V6h.jpg",
    "voteAverage": 6.639
  },
  {
    "id": 1212855,
    "title": "Fight or Flight",
    "overview": "A mercenary takes on the job of tracking down a target on a plane but must protect her when they're surrounded by people trying to kill both of them.",
    "releaseDate": "2025-04-03",
    "posterUrl": "https://image.tmdb.org/t/p/w500/x4nWnfgJvL045rcUCSJzfgIIY9i.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/6J259Zuq09Bt2PLUNeTS5a3DwLZ.jpg",
    "voteAverage": 5.2
  },
  {
    "id": 1126166,
    "title": "Flight Risk",
    "overview": "A U.S. Marshal escorts a government witness to trial after he's accused of getting involved with a mob boss, only to discover that the pilot who is transporting them is also a hitman sent to assassinate the informant. After they subdue him, they're forced to fly together after discovering that there are others attempting to eliminate them.",
    "releaseDate": "2025-01-22",
    "posterUrl": "https://image.tmdb.org/t/p/w500/q0bCG4NX32iIEsRFZqRtuvzNCyZ.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/hwlyY7LJdEFbCPaGNXiskKKmJ5X.jpg",
    "voteAverage": 6.106
  },
  {
    "id": 1297763,
    "title": "Batman Ninja vs. Yakuza League",
    "overview": "The Batman family has returned to the present to discover that Japan has disappeared, and a giant island - Hinomoto - is now in the sky over Gotham City.  At the top sit the Yakuza, a group of superpowered individuals who reign without honor or humanity and look suspiciously like the Justice League. Now, it’s up to Batman and his allies to save Gotham!",
    "releaseDate": "2025-03-17",
    "posterUrl": "https://image.tmdb.org/t/p/w500/sVVT6GYFErVv0Lcc9NvqCu0iOxO.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/e807jDKiFcntZS32ze88X6I96OD.jpg",
    "voteAverage": 6.7
  },
  {
    "id": 1103432,
    "title": "Bloody Escape: Bats out of Hell",
    "overview": "After being turned into a cyborg, Kisaragi faces pursuit from vampires and vengeful yakuza.",
    "releaseDate": "2024-01-05",
    "posterUrl": "https://image.tmdb.org/t/p/w500/lWKtVX5oEgcLbMYMaWiyes6c4IB.jpg",
    "backdropUrl": "https://image.tmdb.org/t/p/w500/rKTRky21Sk5jpfMBUeHYamqshkt.jpg",
    "voteAverage": 5.5
  }
]

const bannerMovie = {
  "id": 324544,
  "title": "In the Lost Lands",
  "overview": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where the sorceress and her guide, the drifter Boyce must outwit and outfight man and demon.",
  "releaseDate": "2025-02-27",
  "posterUrl": "https://image.tmdb.org/t/p/w500/iHf6bXPghWB6gT8kFkL1zo00x6X.jpg",
  "backdropUrl": "https://image.tmdb.org/t/p/w500/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
  "voteAverage": 6.294
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      
      <nav className="flex absolute w-full z-10 justify-between items-center px-6 py-4 text-white">
        <div className="text-red-600 text-2xl font-bold">NETFLIX</div>
        <div className="flex justify-between items-center w-full ml-8">
          {/* Left Links */}
          <ul className="flex gap-4">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>

          {/* Right Links */}
          <ul className="flex gap-4">
            <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="MagnifyingGlassStandard" aria-hidden="true" class="search-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z" fill="currentColor"></path></svg></li>
            <li>Kids</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="BellStandard" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path></svg></li>
            <li className="flex">
              <Image
                src="/netflix-profile-icon.png"
                alt="Netflix Logo"
                width={25}
                height={10}
                priority
              />
              <ChevronDownIcon className="h-4 w-4 text-white ml-1 mt-1" />
            </li>
          </ul>
        </div>
      </nav>

      <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url(${bannerMovie.backdropUrl})` }}>
        <div className="absolute inset-0 flex flex-col justify-center px-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Devil in Ohio</h1>
          <p className="text-white mt-4 max-w-lg">
            Determined to protect a young patient who escaped a mysterious cult...
          </p>
          <div className="mt-4 flex gap-2">
            <button className="bg-white text-black px-4 py-2 rounded">▶ Play</button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded">More Info</button>
          </div>
        </div>
      </div>

      <MovieRow categoryTitle={'Popular on Netflix'} movies={movies} />

    </div>
  );
}
