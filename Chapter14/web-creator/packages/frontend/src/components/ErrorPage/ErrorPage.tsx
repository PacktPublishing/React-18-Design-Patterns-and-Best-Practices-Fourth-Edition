import React, { FC } from 'react'

import { CSS } from './ErrorPage.styled'

const ErrorPage: FC = () => {
  // Characters
  const characters = ['boy', 'girl']
  const image = characters[Math.round(Math.random())]

  return (
    <CSS.ErrorPage className={image}>
      <div className="notFound">
        <h1 className="text404">404</h1>

        <span className="text">Um, yeah. This is awkward.</span>

        <p className="text">
          We tried really hard, but could not find the page you were looking for.
        </p>

        <p className="textLink">You may find what you were looking for on our</p>
        <p className="textLink">
          <a className="link" href="/dashboard">
            Dashboard homepage
          </a>
        </p>
      </div>
      <img alt="Not Found" src={`/images/characters/${image}.png`} />
    </CSS.ErrorPage>
  )
}

export default ErrorPage
