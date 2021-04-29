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
      'https://drive.google.com/file/d/1zhx6OsIVvUsCXNHN8U7A6SfeC5L5Mjb7/view?usp=sharing',
    text: 'Resume',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/aditya.mali.94/',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/maliaditya',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://www.github.com/maliaditya',
    icon: <FaGithub />,
  },
]
