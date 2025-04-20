import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import IconClose from "../components/IconClose";
import { Fragment, useEffect } from "react";
import MovieEpisode from "@/feature/movie/presentation/MovieEpisode";
import IconTopTen from "../components/IconTopTen";
import JoinedText from "../components/JoinedText";
import useMovies from "@/feature/movie/presentation/useMovies";
import { useSearchParams } from "next/navigation";
import MovieDetailsLoadingSkeletion from "../../feature/movie/presentation/MovieDetailLoadingSkeleton";
import { useTranslations } from "next-intl";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MovieDetailModal({ isOpen, onClose }: Props) {
  const { movieDetails, setMovieDetails, fetchMovieDetails } = useMovies()
  const [firstEp, ...restEps] = movieDetails ? movieDetails.episodes : []
  const searchParams = useSearchParams()
  const movieId = searchParams.get('movieId')
  const t = useTranslations('MovieDetailPage');

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails(Number(movieId))
    }
  }, [movieId])

  useEffect(() => {
    if (!isOpen) {
      setMovieDetails(undefined)
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/80 dark backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-start justify-center overflow-y-auto">

          <DialogPanel className="movie-detail-page relative w-full max-w-5xl mx-auto rounded-xl text-white shadow-xl overflow-hidden mt-10">
            <button onClick={onClose} className="absolute text-white-fixed top-4 right-4 z-10 p-2 hover:text-red-400 cursor-pointer">
              <IconClose />
            </button>

            {!movieDetails && <MovieDetailsLoadingSkeletion />}

            {movieDetails && (
              <Fragment>
                {/* Movie banner */}
                <div className="relative h-128 w-full">
                  <Image src={movieDetails.backdropUrl} alt={movieDetails.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                  <div className="absolute bottom-0 pl-6 text-2xl-fixed font-bold text-white-fixed">{movieDetails.title}</div>
                  <button className="button-2xl absolute bottom-0 ml-6 mb-20 bg-white text-black rounded font-bold text-xl">
                    ▶ {t('next_episode')}
                  </button>
                </div>

                {/* Movie details */}
                <div className="p-6 space-y-4">
                  <div className="flex max-ful gap-6">
                    <div className="w-[60%]">
                      <div className="flex justify-between items-start mb-4">
                        <h2 className="text-xl-fixed text-gray-400">{movieDetails.year} {movieDetails.totalSeasons} {t('seasons')} [HD]</h2>
                      </div>
                      
                      <div className="flex gap-2 mb-4">
                        <span className="text-sm-fixed border-white border-1 pt-1 px-2">16+</span>
                        {movieDetails.adultTags.join(', ')}
                      </div>

                      <div className="flex gap-2 mb-4 text-xl-fixed font-bold">
                        <IconTopTen />
                        1# {t('in_tv_shows_today')}
                      </div>
                      
                      <p className="mb-6">
                        {movieDetails.overview}
                      </p>
                    </div>
                    
                    <div className="w-[40%]">
                      {/* Cast */}
                      <div className="text-gray-400 text-sm-fixed mb-6">
                        <span>{t('cast')}: </span> 
                        {movieDetails.casts.map((name, index) => (
                          <JoinedText 
                            key={index} 
                            text={name} 
                            showComma={index < movieDetails.casts.length - 1} 
                            className="font-medium text-white" 
                          />
                        ))}
                      </div>
            
                      {/* Genre */}
                      <div className="text-gray-400 text-sm-fixed mb-6">
                        <span>{t('genres')}: </span> 
                        {movieDetails.genres.map(({ name }, index) => (
                          <JoinedText 
                            key={index} 
                            text={name} 
                            showComma={index < movieDetails.genres.length - 1} 
                            className="font-medium text-white" 
                          />
                        ))}
                      </div>
              
                      {/* Emotions */}
                      <div className="text-gray-400 text-sm-fixed">
                        <span>{t('this_show_is')}: </span> 
                        {movieDetails.emotions.map((name, index) => (
                          <JoinedText 
                            key={index} 
                            text={name} 
                            showComma={index < movieDetails.emotions.length - 1} 
                            className="font-medium text-white" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Episode list */}
                  <div className="space-y-4">
                    <h3 className="text-2xl-fixed font-bold">{t('episodes')}</h3>
                    {movieDetails && (
                      <Fragment>
                        <MovieEpisode movieDetails={movieDetails} episode={firstEp} isFirstEp />
                        {restEps.map((episode, index) => <MovieEpisode key={index} movieDetails={movieDetails} episode={episode} />)}
                      </Fragment>
                    )}
                  </div>
                </div>
            </Fragment>
            )}
          </DialogPanel>
      </div>
    </Dialog>
  );
}