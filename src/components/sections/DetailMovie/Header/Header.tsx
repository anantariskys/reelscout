import Button from '@/components/Button'
import { MovieDetail } from '@/types/global'
import Link from 'next/link'
import React, { FC } from 'react'

const Header:FC<{detail:MovieDetail}> = ({detail}) => {
  return (
    <section
    className="bg-cover bg-center relative"
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail?.backdrop_path})`,
    }}
  >
    <div className="bg-gradient-to-t from-primary to-transparent h-2/4 absolute bottom-0 left-0 right-0 bg-opacity-20"></div>

    <main className="flex items-center relative z-10 min-h-screen justify-start gap-8 container">
      {detail?.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${detail?.poster_path}`}
          className="max-w-72 rounded-md shadow-xl"
          alt={detail?.title}
        />
      )}
      <div className="bg-primary space-y-2 bg-opacity-30 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold">{detail?.title}</h1>
          {detail?.homepage && (
            <Link href={detail?.homepage}>
              <Button variant="tertiary">Visit</Button>
            </Link>
          )}
        </div>
          <small>     {detail.tagline}</small>
        <div className="flex gap-2">
          {detail?.genres.map((genre) => (
            <p
              className="bg-secondary text-white px-2 py-1 rounded-md text-sm"
              key={genre.id}
            >
              {genre.name}
            </p>
          ))}
        </div>
        <p>{detail?.overview}</p>
        <p>{detail?.video}</p>
      </div>
    </main>
  </section>
  )
}

export default Header
