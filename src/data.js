import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
export const links = [
  {
    id: 1,
    url: '/skills',
    text: 'skills',
  },

  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url:
      'https://docs.google.com/document/d/1hcSqTwheS-OffMs8PhxsPESvCm9RWUXzxNHl9uhLewk/edit',
    text: 'Resume',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.github.com/maliaditya',
    icon: <FaGithub />,
  },
]
