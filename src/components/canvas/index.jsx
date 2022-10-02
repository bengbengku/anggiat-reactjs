import React from 'react'
import './style.css'
import { BsChevronCompactRight, BsGithub } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Canvas = () => {
  return (
    <div className='canvas_wrapper'>
      <div className='canvas_wrap'>
        <img src='../../../images/desk.png' alt='' />
        <div className='badge_intro'>
          <span>Hello, I'm an fullstack developer based in Medan!</span>
        </div>
        <div className='canvas_profile'>
          <div className='canvas_profile_left'>
            <span>Anggiat Napitupulu</span>
            <span>Fullstack Developer ( MERN / Python / Adobe )</span>
          </div>
          <div className='canvas_profile_right'>
            <img src='../../../images/profile.jpg' alt='' />
          </div>
        </div>
        <div className='canvas_desc'>
          <div className='canvas_desc_title'>
            <span>Desc</span>
          </div>
          <p>
            Anggiat is a <span className='fullstack_span'>freelance</span> and{' '}
            <span className='fullstack_span'>full-stack developer</span> based
            in Medan with a passion for building the web pages he wants. He has
            a knack for planning and designing in solving real life problems
            with code. When not online, he spends time hanging out with his
            friends. Currently, he is focusing on developing websites using{' '}
            <span className='fullstack_span'>MERN technology</span>.
          </p>
          <a
            href='https://www.linkedin.com/in/anggiat-benget-napitupulu-2994a2146/'
            target='_blank'
            className='canvas_btn'
          >
            <span>My LinkedIn</span>
            <BsChevronCompactRight />
          </a>
        </div>
        <div className='canvas_bio'>
          <div className='canvas_bio_title'>
            <span>Bio</span>
          </div>
          <div className='canvas_bio_year'>
            <div className='bio_year'>
              <span>1995</span>
              <span>Born in Cipayung, Jakarta.</span>
            </div>
            <div className='bio_year'>
              <span>2021</span>
              <span>
                Completed Bachelor of Computer Science at University of
                Methodist Indonesia - Medan.
              </span>
            </div>
            <div className='bio_year'>
              <span>2021</span>
              <span>Worked at Polda Sumatera Utara.</span>
            </div>
            <div className='bio_year'>
              <span>2022 to present</span>
              <span>Working as a freelancer.</span>
            </div>
          </div>
        </div>
        <div className='canvas_liked'>
          <div className='canvas_liked_title'>
            <span>I ♥</span>
          </div>
          <p>
            Art, <span className='fullstack_span'>Music</span>, Playing Guitar,
            The Beatles, Bob Dylan,{' '}
            <span className='fullstack_span'>One Piece</span>, Watching NBA, CSS
            Native, <span className='fullstack_span'>Jokes</span>, Gabriel
            Iglesias, <span className='fullstack_span'>Dark Theme</span>.
          </p>
        </div>
        <div className='canvas_website'>
          <div className='canvas_website_title'>
            <span>Social Media</span>
          </div>
          <div className='canvas_website_wrap'>
            <div className='canvas_website_icon'>
              <BsGithub />
              <a href='/'>@bengbengku</a>
            </div>
            <div className='canvas_website_icon'>
              <AiOutlineInstagram />
              <a href='/'>@anggiatbenget.py</a>
            </div>
            <div className='canvas_website_icon'>
              <AiOutlineTwitter />
              <a href='/'>@AnggiatBenget</a>
            </div>
          </div>
        </div>
        <div className='canvas_footer'>
          © 2022 Anggiat Napitupulu. All Rights Reserved.
        </div>
      </div>
    </div>
  )
}

export default Canvas
